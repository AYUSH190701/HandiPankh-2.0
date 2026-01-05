import { NextResponse } from 'next/server';
import { CartItem } from '@/lib/types';

const carts = new Map<string, CartItem[]>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId, items } = body;

    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: 'Session ID is required' },
        { status: 400 }
      );
    }

    carts.set(sessionId, items);

    return NextResponse.json({
      success: true,
      data: items,
      message: 'Cart updated successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update cart' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const cart = carts.get(sessionId) || [];

    return NextResponse.json({
      success: true,
      data: cart
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch cart' },
      { status: 500 }
    );
  }
}