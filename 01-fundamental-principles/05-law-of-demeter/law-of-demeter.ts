export class Address {
  constructor(private zipCode: string, private city: string) {}

  public getZipCode(): string {
    return this.zipCode;
  }
}

export class ShippingDetails {
  constructor(private address: Address) {}

  public getAddress(): Address {
    return this.address;
  }

  // Delegate method enforcing Law of Demeter
  public getDestinationZip(): string {
    return this.address.getZipCode();
  }
}

export class CustomerOrder {
  constructor(private orderId: string, private shippingDetails: ShippingDetails) {}

  public getShippingDetails(): ShippingDetails {
    return this.shippingDetails;
  }

  // Delegate method enforcing Law of Demeter
  public getShippingZipCode(): string {
    return this.shippingDetails.getDestinationZip();
  }
}

export class OrderService {
  // ❌ Violation: Train wreck navigation (order.getShippingDetails().getAddress().getZipCode())
  public getZipCodeBad(order: CustomerOrder): string {
    return order.getShippingDetails().getAddress().getZipCode();
  }

  // ✅ Compliant with Law of Demeter: Interacts only with direct friend CustomerOrder
  public getZipCodeClean(order: CustomerOrder): string {
    return order.getShippingZipCode();
  }
}
