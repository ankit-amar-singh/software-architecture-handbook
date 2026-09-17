import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CircuitBreaker, CircuitState } from './circuit-breaker.js';

describe('Circuit Breaker Pattern Unit Tests', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('should remain CLOSED when requests succeed', async () => {
    const cb = new CircuitBreaker({ failureThreshold: 3, resetTimeoutMs: 1000 });
    const successFn = async () => 'OK';

    const res = await cb.execute(successFn);
    expect(res).toBe('OK');
    expect(cb.getState()).toBe(CircuitState.CLOSED);
  });

  it('should transition to OPEN after consecutive failure threshold is reached', async () => {
    const cb = new CircuitBreaker({ failureThreshold: 2, resetTimeoutMs: 1000 });
    const failFn = async () => { throw new Error('Service Unavailable'); };

    await expect(cb.execute(failFn)).rejects.toThrow('Service Unavailable');
    expect(cb.getState()).toBe(CircuitState.CLOSED);

    await expect(cb.execute(failFn)).rejects.toThrow('Service Unavailable');
    expect(cb.getState()).toBe(CircuitState.OPEN);

    // Immediate subsequent calls fail fast
    await expect(cb.execute(failFn)).rejects.toThrow('CircuitBreaker: OPEN');
  });

  it('should transition to HALF_OPEN after timeout and CLOSE on probe success', async () => {
    const cb = new CircuitBreaker({ failureThreshold: 1, resetTimeoutMs: 1000 });
    const failFn = async () => { throw new Error('Failure'); };
    const successFn = async () => 'Recovered';

    await expect(cb.execute(failFn)).rejects.toThrow();
    expect(cb.getState()).toBe(CircuitState.OPEN);

    // Fast-forward time past reset timeout
    vi.advanceTimersByTime(1050);

    expect(cb.getState()).toBe(CircuitState.HALF_OPEN);

    // Probe request succeeds
    const res = await cb.execute(successFn);
    expect(res).toBe('Recovered');
    expect(cb.getState()).toBe(CircuitState.CLOSED);
  });
});
