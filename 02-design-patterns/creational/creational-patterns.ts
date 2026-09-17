// ============================================================================
// 1. SINGLETON PATTERN
// ============================================================================
export class ConfigurationManager {
  private static instance: ConfigurationManager | null = null;
  private settings: Map<string, string> = new Map();

  private constructor() {
    this.settings.set('env', 'production');
    this.settings.set('port', '8080');
  }

  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }

  public get(key: string): string | undefined {
    return this.settings.get(key);
  }

  public set(key: string, value: string): void {
    this.settings.set(key, value);
  }
}

// ============================================================================
// 2. FACTORY METHOD PATTERN
// ============================================================================
export interface Notification {
  send(message: string): string;
}

export class EmailNotification implements Notification {
  public send(message: string): string {
    return `[Email] Sent: ${message}`;
  }
}

export class SMSNotification implements Notification {
  public send(message: string): string {
    return `[SMS] Sent: ${message}`;
  }
}

export class NotificationFactory {
  public static createNotification(type: 'email' | 'sms'): Notification {
    if (type === 'email') {
      return new EmailNotification();
    }
    if (type === 'sms') {
      return new SMSNotification();
    }
    throw new Error(`Unsupported notification type: ${type}`);
  }
}

// ============================================================================
// 3. BUILDER PATTERN
// ============================================================================
export interface HTTPRequest {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers: Record<string, string>;
  body?: string;
  timeout: number;
}

export class HTTPRequestBuilder {
  private request: Partial<HTTPRequest> = {
    method: 'GET',
    headers: {},
    timeout: 5000,
  };

  public setUrl(url: string): this {
    this.request.url = url;
    return this;
  }

  public setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE'): this {
    this.request.method = method;
    return this;
  }

  public addHeader(key: string, value: string): this {
    if (!this.request.headers) this.request.headers = {};
    this.request.headers[key] = value;
    return this;
  }

  public setBody(body: string): this {
    this.request.body = body;
    return this;
  }

  public setTimeout(ms: number): this {
    this.request.timeout = ms;
    return this;
  }

  public build(): HTTPRequest {
    if (!this.request.url) {
      throw new Error('URL is required to build HTTPRequest');
    }
    return this.request as HTTPRequest;
  }
}

// ============================================================================
// 4. PROTOTYPE PATTERN
// ============================================================================
export interface Prototype<T> {
  clone(): T;
}

export class DocumentTemplate implements Prototype<DocumentTemplate> {
  constructor(
    public title: string,
    public content: string,
    public metadata: Record<string, any>
  ) {}

  public clone(): DocumentTemplate {
    // Deep clone metadata to prevent shared reference mutations
    return new DocumentTemplate(
      this.title,
      this.content,
      JSON.parse(JSON.stringify(this.metadata))
    );
  }
}
