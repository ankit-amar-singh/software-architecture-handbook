// ============================================================================
// 1. DRY: Refactoring Duplicated Email Validation Logic
// ============================================================================
export class EmailValidator {
  private static EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  public static isValid(email: string): boolean {
    return this.EMAIL_REGEX.test(email.trim().toLowerCase());
  }
}

export class UserProfileService {
  public updateEmail(userId: string, newEmail: string): boolean {
    if (!EmailValidator.isValid(newEmail)) {
      throw new Error('Invalid email format');
    }
    return true;
  }
}

// ============================================================================
// 2. KISS: Clean Simple Implementation vs Over-engineered Factory Chain
// ============================================================================
export class StringFormatter {
  // Simple, readable KISS implementation
  public static slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}

// ============================================================================
// 3. YAGNI: Building only required scope without speculative parameterization
// ============================================================================
export interface TaxCalculatorConfig {
  region: 'US' | 'EU';
}

export class StandardTaxCalculator {
  public calculateTax(amount: number, region: 'US' | 'EU'): number {
    if (region === 'US') {
      return amount * 0.08; // 8% sales tax
    }
    return amount * 0.20; // 20% VAT
  }
}
