// ============================================================================
// 1. ADAPTER PATTERN
// ============================================================================
// Target Interface expected by client application
export interface ModernPaymentGateway {
  pay(amountInCents: number): { status: 'SUCCESS' | 'FAILED'; txId: string };
}

// Incompatible Legacy SDK
export class LegacyPayPalSDK {
  public makePayment(dollarAmount: number): { code: number; transaction_reference: string } {
    return {
      code: 200,
      transaction_reference: `PAYPAL-LEGACY-${Date.now()}`,
    };
  }
}

// Adapter converting LegacyPayPalSDK to ModernPaymentGateway
export class PayPalAdapter implements ModernPaymentGateway {
  constructor(private legacyPayPal: LegacyPayPalSDK) {}

  public pay(amountInCents: number): { status: 'SUCCESS' | 'FAILED'; txId: string } {
    const dollarAmount = amountInCents / 100;
    const res = this.legacyPayPal.makePayment(dollarAmount);

    return {
      status: res.code === 200 ? 'SUCCESS' : 'FAILED',
      txId: res.transaction_reference,
    };
  }
}

// ============================================================================
// 2. DECORATOR PATTERN
// ============================================================================
export interface DataService {
  readData(): string;
}

export class ConcreteDataService implements DataService {
  public readData(): string {
    return 'Raw Data Payload';
  }
}

export abstract class DataServiceDecorator implements DataService {
  constructor(protected wrapped: DataService) {}

  public readData(): string {
    return this.wrapped.readData();
  }
}

export class LoggingDecorator extends DataServiceDecorator {
  public logHistory: string[] = [];

  public readData(): string {
    const data = super.readData();
    this.logHistory.push(`Read data at ${new Date().toISOString()}`);
    return data;
  }
}

export class EncryptionDecorator extends DataServiceDecorator {
  public readData(): string {
    const rawData = super.readData();
    return `ENCRYPTED[${Buffer.from(rawData).toString('base64')}]`;
  }
}

// ============================================================================
// 3. FACADE PATTERN
// ============================================================================
class AudioDecoder {
  public decode(): string { return 'Audio Stream Decoded'; }
}

class VideoDecoder {
  public decode(): string { return 'Video Stream Decoded'; }
}

class BitrateCompressor {
  public compress(): string { return 'Bitrate Compressed'; }
}

export class VideoConverterFacade {
  private audioDecoder = new AudioDecoder();
  private videoDecoder = new VideoDecoder();
  private compressor = new BitrateCompressor();

  public convertVideo(filename: string): string {
    const audio = this.audioDecoder.decode();
    const video = this.videoDecoder.decode();
    const compressed = this.compressor.compress();
    return `Conversion Complete for ${filename}: [${audio}, ${video}, ${compressed}]`;
  }
}

// ============================================================================
// 4. PROXY PATTERN (Protection Proxy)
// ============================================================================
export interface DatabaseAccess {
  query(sql: string): string[];
}

export class ProductionDatabaseAccess implements DatabaseAccess {
  public query(sql: string): string[] {
    return [`Result for query: ${sql}`];
  }
}

export class ProtectedDatabaseProxy implements DatabaseAccess {
  constructor(
    private realDb: DatabaseAccess,
    private userRole: 'ADMIN' | 'MEMBER'
  ) {}

  public query(sql: string): string[] {
    if (sql.toLowerCase().includes('drop') && this.userRole !== 'ADMIN') {
      throw new Error('Access Denied: Only ADMIN can execute DROP queries');
    }
    return this.realDb.query(sql);
  }
}
