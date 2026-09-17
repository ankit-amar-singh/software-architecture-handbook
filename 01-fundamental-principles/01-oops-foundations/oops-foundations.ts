/**
 * Pillar 1: Encapsulation & Abstraction
 * BankAccount encapsulates balance mutation and abstracts security checks.
 */
export interface PaymentProcessor {
  processPayment(amount: number): { success: boolean; transactionId: string };
}

export class BankAccount {
  private _balance: number;
  private readonly _accountNumber: string;

  constructor(accountNumber: string, initialBalance: number) {
    if (initialBalance < 0) {
      throw new Error('Initial balance cannot be negative');
    }
    this._accountNumber = accountNumber;
    this._balance = initialBalance;
  }

  public get balance(): number {
    return this._balance;
  }

  public get accountNumber(): string {
    return this._accountNumber;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive');
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive');
    }
    if (amount > this._balance) {
      throw new Error('Insufficient funds');
    }
    this._balance -= amount;
  }
}

/**
 * Pillar 3 & 4: Inheritance & Polymorphism
 * Abstract PaymentGateway providing polymorphic payment execution.
 */
export abstract class PaymentGateway implements PaymentProcessor {
  constructor(protected gatewayName: string) {}

  public abstract processPayment(amount: number): { success: boolean; transactionId: string };

  protected generateTransactionId(): string {
    return `${this.gatewayName.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
  }
}

export class StripeGateway extends PaymentGateway {
  constructor() {
    super('Stripe');
  }

  public processPayment(amount: number): { success: boolean; transactionId: string } {
    // Stripe specific implementation logic
    return {
      success: amount > 0,
      transactionId: this.generateTransactionId(),
    };
  }
}

export class PayPalGateway extends PaymentGateway {
  constructor() {
    super('PayPal');
  }

  public processPayment(amount: number): { success: boolean; transactionId: string } {
    // PayPal specific implementation logic
    return {
      success: amount > 0,
      transactionId: this.generateTransactionId(),
    };
  }
}

export class CheckoutService {
  constructor(private processor: PaymentProcessor) {}

  public checkout(amount: number): { success: boolean; transactionId: string } {
    return this.processor.processPayment(amount);
  }
}
