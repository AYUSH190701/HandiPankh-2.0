import { NextResponse } from 'next/server';
import { Order } from '@/lib/types';

const orders = new Map<string, Order>();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const mockOrder: Order = {
      id: id,
      userId: 'USER-123',
      items: [],
      subtotal: 598,
      tax: 108,
      deliveryFee: 0,
      total: 706,
      status: 'confirmed',
      paymentStatus: 'completed',
      paymentMethod: 'card',
      customer: {
        name: 'John Doe',
        phone: '+91 95602 45235',
        address: 'Shop NO-1, A-80, Palam Extension, Ramlphal Chowk Dwarka New Delhi-110075'
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      estimatedDeliveryTime: '45 minutes',
      specialInstructions: 'Extra raita please'
    };

    const order = orders.get(id) || mockOrder;

    return NextResponse.json({
      success: true,
      data: order
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, paymentStatus } = body;

    const order = orders.get(id);
    
    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    if (status) order.status = status;
    if (paymentStatus) order.paymentStatus = paymentStatus;
    order.updatedAt = new Date();

    orders.set(id, order);

    return NextResponse.json({
      success: true,
      data: order,
      message: 'Order updated successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update order' },
      { status: 500 }
    );
  }
}