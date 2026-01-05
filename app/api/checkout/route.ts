import { NextResponse } from 'next/server';
import { Order, User, CartItem } from '@/lib/types';
import { generateOrderId, calculateTax, calculateDeliveryFee, estimateDeliveryTime } from '@/lib/utils';

const orders = new Map<string, Order>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer, items, paymentMethod, specialInstructions } = body;

    if (!customer || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid checkout data' },
        { status: 400 }
      );
    }

    const validateCustomer = (customer: User): boolean => {
      return !!(customer.name && customer.phone && customer.address);
    };

    if (!validateCustomer(customer)) {
      return NextResponse.json(
        { success: false, error: 'Please provide all customer details' },
        { status: 400 }
      );
    }

    const subtotal = items.reduce((total: number, item: CartItem) => 
      total + (item.menuItem.price * item.quantity), 0
    );
    const tax = calculateTax(subtotal);
    const deliveryFee = calculateDeliveryFee(subtotal);
    const total = subtotal + tax + deliveryFee;

    const order: Order = {
      id: generateOrderId(),
      userId: customer.id || `USER-${Date.now()}`,
      items,
      subtotal,
      tax,
      deliveryFee,
      total,
      status: 'pending',
      paymentStatus: 'pending',
      paymentMethod: paymentMethod || 'card',
      customer,
      createdAt: new Date(),
      updatedAt: new Date(),
      estimatedDeliveryTime: estimateDeliveryTime(),
      specialInstructions
    };

    orders.set(order.id, order);

    return NextResponse.json({
      success: true,
      data: order,
      message: 'Order created successfully'
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process checkout' },
      { status: 500 }
    );
  }
}