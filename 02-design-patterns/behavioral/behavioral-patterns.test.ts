import { describe, it, expect } from 'vitest';
import {
  EventEmitter,
  Observer,
  AuthenticationMiddleware,
  AuthorizationMiddleware,
  RequestContext,
  DocumentEditor,
  AppendTextCommand,
  CommandHistoryManager,
  OrderContext
} from './behavioral-patterns.js';

describe('Behavioral Design Patterns Unit Tests', () => {
  it('Observer: notifies subscribed observers when state emits event', () => {
    const emitter = new EventEmitter<string>();
    const logs: string[] = [];

    const logger: Observer<string> = {
      update(msg) { logs.push(msg); }
    };

    emitter.subscribe(logger);
    emitter.notify('User Logged In');
    emitter.notify('User Updated Profile');

    expect(logs).toEqual(['User Logged In', 'User Updated Profile']);

    emitter.unsubscribe(logger);
    emitter.notify('Should not log');
    expect(logs.length).toBe(2);
  });

  it('Chain of Responsibility: passes request sequentially through middleware pipeline', () => {
    const auth = new AuthenticationMiddleware();
    const az = new AuthorizationMiddleware();
    auth.setNext(az);

    const validCtx: RequestContext = { token: 'valid-secret-token' };
    auth.handle(validCtx);

    expect(validCtx.userRole).toBe('ADMIN');
    expect(validCtx.isAuthorized).toBe(true);

    const invalidCtx: RequestContext = { token: 'bad-token' };
    auth.handle(invalidCtx);
    expect(invalidCtx.isAuthorized).toBe(false);
  });

  it('Command: executes commands and supports undo history stack', () => {
    const editor = new DocumentEditor();
    const history = new CommandHistoryManager();

    history.executeCommand(new AppendTextCommand(editor, 'Hello '));
    history.executeCommand(new AppendTextCommand(editor, 'World!'));

    expect(editor.content).toBe('Hello World!');

    history.undoLastCommand();
    expect(editor.content).toBe('Hello ');
  });

  it('State: manages state transitions and enforces state constraints', () => {
    const order = new OrderContext();

    expect(() => order.ship()).toThrow('Cannot ship an order that has not been paid for.');

    const payResult = order.pay();
    expect(payResult).toContain('Payment successful');

    const shipResult = order.ship();
    expect(shipResult).toContain('dispatched');
  });
});
