// ============================================================================
// 1. SINGLE RESPONSIBILITY PRINCIPLE (SRP)
// ============================================================================
export interface User {
  id: string;
  email: string;
  name: string;
}

// BEFORE (Violation): God Object handling User state, persistence, and email
export class BadUserService {
  public saveAndNotifyUser(user: User): void {
    // DB Logic
    console.log(`Saving ${user.name} to DB...`);
    // Email Logic
    console.log(`Sending welcome email to ${user.email}...`);
  }
}

// AFTER (Refactored): Separated into isolated responsibilities
export interface UserRepository {
  save(user: User): void;
}

export interface NotificationService {
  sendWelcomeEmail(user: User): void;
}

export class InMemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();

  public save(user: User): void {
    this.users.set(user.id, user);
  }

  public findById(id: string): User | undefined {
    return this.users.get(id);
  }
}

export class EmailNotificationService implements NotificationService {
  public sentEmails: string[] = [];

  public sendWelcomeEmail(user: User): void {
    this.sentEmails.push(user.email);
  }
}

export class UserRegistrationUseCase {
  constructor(
    private userRepo: UserRepository,
    private notifier: NotificationService
  ) {}

  public register(user: User): void {
    this.userRepo.save(user);
    this.notifier.sendWelcomeEmail(user);
  }
}

// ============================================================================
// 2. OPEN/CLOSED PRINCIPLE (OCP)
// ============================================================================
export interface DiscountStrategy {
  applyDiscount(price: number): number;
}

export class RegularDiscount implements DiscountStrategy {
  public applyDiscount(price: number): number {
    return price;
  }
}

export class VIPDiscount implements DiscountStrategy {
  public applyDiscount(price: number): number {
    return price * 0.8; // 20% off
  }
}

export class BlackFridayDiscount implements DiscountStrategy {
  public applyDiscount(price: number): number {
    return price * 0.5; // 50% off
  }
}

export class OrderCalculator {
  public calculateTotal(price: number, discountStrategy: DiscountStrategy): number {
    return discountStrategy.applyDiscount(price);
  }
}

// ============================================================================
// 3. LISKOV SUBSTITUTION PRINCIPLE (LSP)
// ============================================================================
export interface Shape {
  getArea(): number;
}

export class Rectangle implements Shape {
  constructor(protected width: number, protected height: number) {}

  public setWidth(w: number): void {
    this.width = w;
  }

  public setHeight(h: number): void {
    this.height = h;
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

export class Square implements Shape {
  constructor(private sideLength: number) {}

  public setSide(side: number): void {
    this.sideLength = side;
  }

  public getArea(): number {
    return this.sideLength * this.sideLength;
  }
}

// ============================================================================
// 4. INTERFACE SEGREGATION PRINCIPLE (ISP)
// ============================================================================
export interface Printer {
  print(doc: string): string;
}

export interface Scanner {
  scan(): string;
}

export class SimplePrinter implements Printer {
  public print(doc: string): string {
    return `Printing: ${doc}`;
  }
}

export class MultiFunctionMachine implements Printer, Scanner {
  public print(doc: string): string {
    return `Printing: ${doc}`;
  }

  public scan(): string {
    return 'Scanned Document Content';
  }
}

// ============================================================================
// 5. DEPENDENCY INVERSION PRINCIPLE (DIP)
// ============================================================================
export interface DatabaseDriver {
  connect(): string;
  query(sql: string): any[];
}

export class PostgresDriver implements DatabaseDriver {
  public connect(): string {
    return 'Connected to PostgreSQL';
  }

  public query(sql: string): any[] {
    return [{ id: '1', result: 'Postgres Data' }];
  }
}

export class MongoDriver implements DatabaseDriver {
  public connect(): string {
    return 'Connected to MongoDB';
  }

  public query(sql: string): any[] {
    return [{ id: '1', result: 'Mongo Data' }];
  }
}

export class AnalyticsService {
  constructor(private db: DatabaseDriver) {}

  public runReport(): { connection: string; data: any[] } {
    const connection = this.db.connect();
    const data = this.db.query('SELECT * FROM analytics');
    return { connection, data };
  }
}
