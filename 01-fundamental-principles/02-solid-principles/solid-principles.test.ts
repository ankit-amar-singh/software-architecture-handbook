import { describe, it, expect } from 'vitest';
import {
  UserRegistrationUseCase,
  InMemoryUserRepository,
  EmailNotificationService,
  OrderCalculator,
  RegularDiscount,
  VIPDiscount,
  BlackFridayDiscount,
  Rectangle,
  Square,
  SimplePrinter,
  MultiFunctionMachine,
  AnalyticsService,
  PostgresDriver,
  MongoDriver
} from './solid-principles.js';

describe('SOLID Principles Unit Tests', () => {
  it('SRP: UserRegistrationUseCase decouples storage and email notification', () => {
    const repo = new InMemoryUserRepository();
    const notifier = new EmailNotificationService();
    const registerUseCase = new UserRegistrationUseCase(repo, notifier);

    const user = { id: 'usr-1', name: 'Alice', email: 'alice@example.com' };
    registerUseCase.register(user);

    expect(repo.findById('usr-1')).toEqual(user);
    expect(notifier.sentEmails).toContain('alice@example.com');
  });

  it('OCP: OrderCalculator works with new strategies without modification', () => {
    const calc = new OrderCalculator();

    expect(calc.calculateTotal(100, new RegularDiscount())).toBe(100);
    expect(calc.calculateTotal(100, new VIPDiscount())).toBe(80);
    expect(calc.calculateTotal(100, new BlackFridayDiscount())).toBe(50);
  });

  it('LSP: Rectangle and Square satisfy Shape interface without contract violation', () => {
    const rect = new Rectangle(10, 5);
    const sq = new Square(5);

    expect(rect.getArea()).toBe(50);
    expect(sq.getArea()).toBe(25);
  });

  it('ISP: SimplePrinter implements only printing, MultiFunction handles both', () => {
    const simple = new SimplePrinter();
    const mfd = new MultiFunctionMachine();

    expect(simple.print('Report')).toBe('Printing: Report');
    expect(mfd.print('Report')).toBe('Printing: Report');
    expect(mfd.scan()).toBe('Scanned Document Content');
  });

  it('DIP: AnalyticsService seamlessly switches between Postgres and Mongo drivers', () => {
    const postgresAnalytics = new AnalyticsService(new PostgresDriver());
    const mongoAnalytics = new AnalyticsService(new MongoDriver());

    const pgResult = postgresAnalytics.runReport();
    expect(pgResult.connection).toBe('Connected to PostgreSQL');

    const mongoResult = mongoAnalytics.runReport();
    expect(mongoResult.connection).toBe('Connected to MongoDB');
  });
});
