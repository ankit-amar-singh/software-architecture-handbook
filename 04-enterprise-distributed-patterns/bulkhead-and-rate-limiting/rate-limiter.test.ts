import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TokenBucketRateLimiter } from './rate-limiter.js';

describe('Token Bucket Rate Limiter Unit Tests', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('should allow requests up to capacity and block excess', () => {
    const limiter = new TokenBucketRateLimiter(3, 1); // Max 3 tokens, 1 token/sec refill

    expect(limiter.allowRequest()).toBe(true); // 2 left
    expect(limiter.allowRequest()).toBe(true); // 1 left
    expect(limiter.allowRequest()).toBe(true); // 0 left
    expect(limiter.allowRequest()).toBe(false); // Blocked
  });

  it('should refill tokens over time', () => {
    const limiter = new TokenBucketRateLimiter(2, 1);

    expect(limiter.allowRequest()).toBe(true);
    expect(limiter.allowRequest()).toBe(true);
    expect(limiter.allowRequest()).toBe(false);

    // Advance 2 seconds
    vi.advanceTimersByTime(2000);

    expect(limiter.allowRequest()).toBe(true);
    expect(limiter.allowRequest()).toBe(true);
    expect(limiter.allowRequest()).toBe(false);
  });
});
