// ============================================================================
// 1. DOMAIN ENTITY (Core Business Logic - Zero External Dependencies)
// ============================================================================
export class OrderEntity {
  constructor(
    public readonly id: string,
    public readonly customerEmail: string,
    public readonly totalAmount: number,
    public status: 'PENDING' | 'PAID' | 'CANCELLED' = 'PENDING'
  ) {
    if (totalAmount <= 0) {
      throw new Error('Order total must be greater than zero');
    }
  }

  public markAsPaid(): void {
    if (this.status === 'CANCELLED') {
      throw new Error('Cannot pay for a cancelled order');
    }
    this.status = 'PAID';
  }
}

// ============================================================================
// 2. PORTS (Interfaces defining boundaries)
// ============================================================================
// Driven/Secondary Port (Database Access)
export interface OrderRepositoryPort {
  save(order: OrderEntity): Promise<void>;
  findById(id: string): Promise<OrderEntity | null>;
}

// Driven/Secondary Port (Notification System)
export interface NotificationPort {
  sendReceipt(email: string, orderId: string, amount: number): Promise<void>;
}

// Driving/Primary Port (Use Case Interface)
export interface ProcessPaymentUseCasePort {
  execute(orderId: string): Promise<{ success: boolean; status: string }>;
}

// ============================================================================
// 3. APPLICATION USE CASE (Orchestrates Domain Entities & Ports)
// ============================================================================
export class ProcessPaymentUseCase implements ProcessPaymentUseCasePort {
  constructor(
    private orderRepo: OrderRepositoryPort,
    private notifier: NotificationPort
  ) {}

  public async execute(orderId: string): Promise<{ success: boolean; status: string }> {
    const order = await this.orderRepo.findById(orderId);
    if (!order) {
      throw new Error(`Order with ID ${orderId} not found`);
    }

    order.markAsPaid();
    await this.orderRepo.save(order);
    await this.notifier.sendReceipt(order.customerEmail, order.id, order.totalAmount);

    return {
      success: true,
      status: order.status,
    };
  }
}
