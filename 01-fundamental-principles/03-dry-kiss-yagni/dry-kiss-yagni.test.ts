import { describe, it, expect } from 'vitest';
import { EmailValidator, UserProfileService, StringFormatter, StandardTaxCalculator } from './dry-kiss-yagni.js';

describe('DRY / KISS / YAGNI Principles Unit Tests', () => {
  it('DRY: Centralized EmailValidator validates email inputs consistently', () => {
    expect(EmailValidator.isValid('test@example.com')).toBe(true);
    expect(EmailValidator.isValid('invalid-email')).toBe(false);

    const profileService = new UserProfileService();
    expect(profileService.updateEmail('usr-1', 'new@domain.org')).toBe(true);
    expect(() => profileService.updateEmail('usr-1', 'bad-email')).toThrow('Invalid email format');
  });

  it('KISS: StringFormatter slugifies string correctly without over-engineering', () => {
    expect(StringFormatter.slugify(' Hello World! Enterprise Software Design ')).toBe('hello-world-enterprise-software-design');
  });

  it('YAGNI: StandardTaxCalculator calculates tax cleanly for active regions', () => {
    const calc = new StandardTaxCalculator();
    expect(calc.calculateTax(100, 'US')).toBe(8);
    expect(calc.calculateTax(100, 'EU')).toBe(20);
  });
});
