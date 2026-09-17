import { describe, it, expect } from 'vitest';
import {
  PayPalAdapter,
  LegacyPayPalSDK,
  ConcreteDataService,
  LoggingDecorator,
  EncryptionDecorator,
  VideoConverterFacade,
  ProductionDatabaseAccess,
  ProtectedDatabaseProxy
} from './structural-patterns.js';

describe('Structural Design Patterns Unit Tests', () => {
  it('Adapter: adapts legacy dollar-based PayPal SDK to cents-based ModernPaymentGateway', () => {
    const legacySdk = new LegacyPayPalSDK();
    const adapter = new PayPalAdapter(legacySdk);

    const res = adapter.pay(5000); // $50.00
    expect(res.status).toBe('SUCCESS');
    expect(res.txId).toContain('PAYPAL-LEGACY');
  });

  it('Decorator: dynamically chains Logging and Encryption capabilities onto DataService', () => {
    const baseService = new ConcreteDataService();
    const loggingService = new LoggingDecorator(baseService);
    const encryptedService = new EncryptionDecorator(loggingService);

    const result = encryptedService.readData();
    expect(result).toContain('ENCRYPTED[');
    expect(loggingService.logHistory.length).toBe(1);
  });

  it('Facade: simplifies video transcoding complex subsystems into single call', () => {
    const facade = new VideoConverterFacade();
    const result = facade.convertVideo('movie.mp4');
    expect(result).toContain('Conversion Complete for movie.mp4');
  });

  it('Proxy: enforces protection proxy access control rules based on user role', () => {
    const realDb = new ProductionDatabaseAccess();
    const memberProxy = new ProtectedDatabaseProxy(realDb, 'MEMBER');
    const adminProxy = new ProtectedDatabaseProxy(realDb, 'ADMIN');

    expect(memberProxy.query('SELECT * FROM users')).toEqual(['Result for query: SELECT * FROM users']);
    expect(() => memberProxy.query('DROP TABLE users')).toThrow('Access Denied');
    expect(adminProxy.query('DROP TABLE users')).toEqual(['Result for query: DROP TABLE users']);
  });
});
