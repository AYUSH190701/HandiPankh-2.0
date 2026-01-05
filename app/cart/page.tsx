'use client';

import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { formatPrice, calculateTax, calculateDeliveryFee } from '@/lib/utils';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, Truck, Clock } from 'lucide-react';
import { useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getSubtotal } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const subtotal = getSubtotal();
  const tax = calculateTax(subtotal);
  const deliveryFee = calculateDeliveryFee(subtotal);
  const discount = promoApplied ? promoDiscount : 0;
  const total = subtotal + tax + deliveryFee - discount;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'FIRST50') {
      setPromoDiscount(Math.min(subtotal * 0.1, 50));
      setPromoApplied(true);
    } else if (promoCode.toUpperCase() === 'BIRYANI20') {
      setPromoDiscount(subtotal * 0.2);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious biryanis to get started!</p>
          <Link href="/menu">
            <Button size="lg">
              Explore Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-lg font-semibold">Cart Items ({items.length})</h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.menuItem.id} className="p-6">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={`https://source.unsplash.com/200x200/?biryani,${item.menuItem.name}`}
                          alt={item.menuItem.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{item.menuItem.name}</h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {item.menuItem.isVeg ? '🟢 Veg' : '🔴 Non-Veg'} • 
                              {item.menuItem.spiceLevel === 'mild' && ' 🌶️ Mild'}
                              {item.menuItem.spiceLevel === 'medium' && ' 🌶️🌶️ Medium'}
                              {item.menuItem.spiceLevel === 'hot' && ' 🌶️🌶️🌶️ Hot'}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.menuItem.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                              className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded h-8 w-8 flex items-center justify-center transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                              className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded h-8 w-8 flex items-center justify-center transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-lg">
                              {formatPrice(item.menuItem.price * item.quantity)}
                            </p>
                            <p className="text-sm text-gray-500">
                              {formatPrice(item.menuItem.price)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Truck className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Free Delivery</p>
                    <p className="text-sm text-gray-600">On orders above ₹500</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-800">45 Min</p>
                    <p className="text-sm text-gray-600">Estimated delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      disabled={promoApplied}
                    />
                  </div>
                  <Button
                    variant={promoApplied ? 'secondary' : 'outline'}
                    onClick={handleApplyPromo}
                    disabled={promoApplied || !promoCode}
                  >
                    {promoApplied ? 'Applied' : 'Apply'}
                  </Button>
                </div>
                {promoApplied && (
                  <p className="text-green-600 text-sm mt-2">✓ Promo code applied successfully!</p>
                )}
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Tax (18% GST)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-orange-600">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <Button size="lg" className="w-full mt-6">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <p className="text-xs text-gray-500 text-center mt-4">
                By proceeding, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}