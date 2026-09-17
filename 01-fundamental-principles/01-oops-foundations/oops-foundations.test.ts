import { describe, it, expect } from 'vitest';
import { BankAccount, StripeGateway, PayPalGateway, CheckoutService } from './oops-foundations.js';

describe('OOP Foundations Unit Tests', () => {
  describe('Encapsulation', () => {
    it('should correctly encapsulate balance and prevent direct invalid mutation', () => {
      const account = new BankAccount('ACC-12345', 500);
      expect(account.balance).toBe(500);

      account.deposit(200);
      expect(account.balance).toBe(700);

      account.withdraw(300);
      expect(account.balance).toBe(400);

      expect(() => account.withdraw(1000)).toThrow('Insufficient funds');
    });
  });

  describe('Polymorphism', () => {
    it('should dynamically execute Stripe or PayPal processors interchangeably', () => {
      const stripe = new StripeGateway();
      const paypal = new PayPalGateway();

      const checkoutStripe = new CheckoutService(stripe);
      const checkoutPayPal = new CheckoutService(paypal);

      const resStripe = checkoutStripe.checkout(100);
      const resPayPal = checkoutPayPal.checkout(100);

      expect(resStripe.success).toBe(true);
      expect(resStripe.transactionId).toContain('STRIPE');

      expect(resPayPal.success).toBe(true);
      expect(resPayPal.transactionId).toContain('PAYPAL');
    });
  });
});
