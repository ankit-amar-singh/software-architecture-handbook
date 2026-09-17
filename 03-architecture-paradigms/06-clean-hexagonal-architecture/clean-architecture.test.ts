import { describe, it, expect } from 'vitest';
import {
  OrderEntity,
  ProcessPaymentUseCase,
  OrderRepositoryPort,
  NotificationPort
} from './clean-architecture.js';

class MockOrderRepository implements OrderRepositoryPort {
  public orders = new Map<string, OrderEntity>();

  public async save(order: OrderEntity): Promise<void> {
    this.orders.set(order.id, order);
  }

  public async findById(id: string): Promise<OrderEntity | null> {
    return this.orders.get(id) || null;
  }
}

class MockNotificationAdapter implements NotificationPort {
  public sentReceipts: Array<{ email: string; orderId: string; amount: number }> = [];

  public async sendReceipt(email: string, orderId: string, amount: number): Promise<void> {
    this.sentReceipts.push({ email, orderId, amount });
  }
}

describe('Clean & Hexagonal Architecture Unit Tests', () => {
  it('should process payment and trigger notification using purely mocked ports', async () => {
    const repo = new MockOrderRepository();
    const notifier = new MockNotificationAdapter();
    const useCase = new ProcessPaymentUseCase(repo, notifier);

    const initialOrder = new OrderEntity('ORD-100', 'client@domain.com', 250);
    await repo.save(initialOrder);

    const result = await useCase.execute('ORD-100');

    expect(result.success).toBe(true);
    expect(result.status).toBe('PAID');

    const updatedOrder = await repo.findById('ORD-100');
    expect(updatedOrder?.status).toBe('PAID');

    expect(notifier.sentReceipts.length).toBe(1);
    expect(notifier.sentReceipts[0]).toEqual({
      email: 'client@domain.com',
      orderId: 'ORD-100',
      amount: 250,
    });
  });
});
