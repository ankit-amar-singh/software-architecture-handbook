import { describe, it, expect } from 'vitest';
import { Address, ShippingDetails, CustomerOrder, OrderService } from './law-of-demeter.js';

describe('Law of Demeter Unit Tests', () => {
  it('should extract zip code cleanly without train wreck violation', () => {
    const address = new Address('90210', 'Beverly Hills');
    const shipping = new ShippingDetails(address);
    const order = new CustomerOrder('ORD-99', shipping);

    const service = new OrderService();
    expect(service.getZipCodeClean(order)).toBe('90210');
  });
});
