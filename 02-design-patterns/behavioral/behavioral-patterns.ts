// ============================================================================
// 1. OBSERVER PATTERN (Pub-Sub)
// ============================================================================
export interface Observer<T> {
  update(data: T): void;
}

export class EventEmitter<T> {
  private observers: Observer<T>[] = [];

  public subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notify(data: T): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }
}

// ============================================================================
// 2. CHAIN OF RESPONSIBILITY PATTERN (Middleware Pipeline)
// ============================================================================
export interface RequestContext {
  token?: string;
  userRole?: string;
  isAuthorized?: boolean;
}

export abstract class MiddlewareHandler {
  private nextHandler: MiddlewareHandler | null = null;

  public setNext(handler: MiddlewareHandler): MiddlewareHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(ctx: RequestContext): void {
    this.process(ctx);
    if (this.nextHandler) {
      this.nextHandler.handle(ctx);
    }
  }

  protected abstract process(ctx: RequestContext): void;
}

export class AuthenticationMiddleware extends MiddlewareHandler {
  protected process(ctx: RequestContext): void {
    if (ctx.token === 'valid-secret-token') {
      ctx.userRole = 'ADMIN';
    }
  }
}

export class AuthorizationMiddleware extends MiddlewareHandler {
  protected process(ctx: RequestContext): void {
    if (ctx.userRole === 'ADMIN') {
      ctx.isAuthorized = true;
    } else {
      ctx.isAuthorized = false;
    }
  }
}

// ============================================================================
// 3. COMMAND PATTERN (Undoable Commands)
// ============================================================================
export interface Command {
  execute(): void;
  undo(): void;
}

export class DocumentEditor {
  public content: string = '';
}

export class AppendTextCommand implements Command {
  constructor(
    private editor: DocumentEditor,
    private textToAppend: string
  ) {}

  public execute(): void {
    this.editor.content += this.textToAppend;
  }

  public undo(): void {
    this.editor.content = this.editor.content.slice(
      0,
      this.editor.content.length - this.textToAppend.length
    );
  }
}

export class CommandHistoryManager {
  private history: Command[] = [];

  public executeCommand(cmd: Command): void {
    cmd.execute();
    this.history.push(cmd);
  }

  public undoLastCommand(): void {
    const cmd = this.history.pop();
    if (cmd) {
      cmd.undo();
    }
  }
}

// ============================================================================
// 4. STATE PATTERN (Order State Machine)
// ============================================================================
export interface OrderState {
  payOrder(order: OrderContext): string;
  shipOrder(order: OrderContext): string;
}

export class OrderContext {
  private state: OrderState;

  constructor() {
    this.state = new PendingState();
  }

  public setState(state: OrderState): void {
    this.state = state;
  }

  public pay(): string {
    return this.state.payOrder(this);
  }

  public ship(): string {
    return this.state.shipOrder(this);
  }
}

export class PendingState implements OrderState {
  public payOrder(order: OrderContext): string {
    order.setState(new PaidState());
    return 'Payment successful. Order status updated to PAID.';
  }

  public shipOrder(order: OrderContext): string {
    throw new Error('Cannot ship an order that has not been paid for.');
  }
}

export class PaidState implements OrderState {
  public payOrder(order: OrderContext): string {
    return 'Order is already paid.';
  }

  public shipOrder(order: OrderContext): string {
    order.setState(new ShippedState());
    return 'Order has been dispatched for delivery.';
  }
}

export class ShippedState implements OrderState {
  public payOrder(order: OrderContext): string {
    return 'Order is already shipped.';
  }

  public shipOrder(order: OrderContext): string {
    return 'Order is already shipped.';
  }
}
