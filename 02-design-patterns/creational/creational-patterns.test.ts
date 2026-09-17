import { describe, it, expect } from 'vitest';
import {
  ConfigurationManager,
  NotificationFactory,
  HTTPRequestBuilder,
  DocumentTemplate
} from './creational-patterns.js';

describe('Creational Design Patterns Unit Tests', () => {
  it('Singleton: returns the exact same instance across calls', () => {
    const config1 = ConfigurationManager.getInstance();
    const config2 = ConfigurationManager.getInstance();

    expect(config1).toBe(config2);
    config1.set('db_name', 'production_db');
    expect(config2.get('db_name')).toBe('production_db');
  });

  it('Factory Method: instantiates correct notification type dynamically', () => {
    const emailNotif = NotificationFactory.createNotification('email');
    const smsNotif = NotificationFactory.createNotification('sms');

    expect(emailNotif.send('Welcome!')).toBe('[Email] Sent: Welcome!');
    expect(smsNotif.send('OTP: 1234')).toBe('[SMS] Sent: OTP: 1234');
  });

  it('Builder: constructs complex HTTP request immutably step-by-step', () => {
    const req = new HTTPRequestBuilder()
      .setUrl('https://api.example.com/orders')
      .setMethod('POST')
      .addHeader('Authorization', 'Bearer token123')
      .setBody(JSON.stringify({ item: 'Laptop' }))
      .setTimeout(3000)
      .build();

    expect(req.url).toBe('https://api.example.com/orders');
    expect(req.method).toBe('POST');
    expect(req.headers['Authorization']).toBe('Bearer token123');
    expect(req.timeout).toBe(3000);
  });

  it('Prototype: deep clones document template without shared state mutations', () => {
    const originalDoc = new DocumentTemplate(
      'Invoice Template',
      'Invoice details...',
      { author: 'Admin', tags: ['finance'] }
    );

    const clonedDoc = originalDoc.clone();
    clonedDoc.title = 'Client Invoice #101';
    clonedDoc.metadata.tags.push('client-copy');

    expect(originalDoc.title).toBe('Invoice Template');
    expect(originalDoc.metadata.tags).toEqual(['finance']);
    expect(clonedDoc.title).toBe('Client Invoice #101');
    expect(clonedDoc.metadata.tags).toEqual(['finance', 'client-copy']);
  });
});
