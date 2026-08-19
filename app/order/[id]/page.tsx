'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { formatPrice, estimateDeliveryTime } from '@/lib/utils';
import { 
  CheckCircle, Clock, MapPin, Phone, CreditCard, 
  Package, Truck, ChefHat, Home, Star, Copy
} from 'lucide-react';
import toast from 'react-hot-toast';
import { Order } from '@/lib/types';

export default function OrderConfirmationPage() {
  const params = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    fetchOrder();
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev < 4 ? prev + 1 : prev));
    }, 10000);
    return () => clearInterval(interval);
  }, [params.id]);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`/api/order/${params.id}`);
      const data = await response.json();
      if (data.success) {
        setOrder(data.data);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyOrderId = () => {
    navigator.clipboard.writeText(params.id as string);
    toast.success('Order ID copied!');
  };

  const trackingSteps = [
    { icon: CheckCircle, label: 'Order Confirmed', description: 'Your order has been placed' },
    { icon: Package, label: 'Preparing', description: 'Chef is preparing your biryani' },
    { icon: Truck, label: 'Out for Delivery', description: 'Your order is on the way' },
    { icon: Home, label: 'Delivered', description: 'Enjoy your meal!' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order not found</h2>
          <Link href="/menu">
            <Button>Go to Menu</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your order. Your delicious biryani is being prepared.</p>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            {/* Order Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg font-semibold mb-1">Order Details</h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-sm">Order ID:</span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                      {params.id}
                    </code>
                    <button onClick={copyOrderId} className="text-orange-600 hover:text-orange-700">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {order.paymentStatus === 'completed' ? 'Paid' : 'Pending'}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Estimated Delivery</p>
                    <p className="text-sm">{order.estimatedDeliveryTime || '45 minutes'}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Delivery Address</p>
                    <p className="text-sm">{order.customer.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Contact</p>
                    <p className="text-sm">{order.customer.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <CreditCard className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Payment Method</p>
                    <p className="text-sm capitalize">{order.paymentMethod}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Tracking */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-6">Track Your Order</h2>
              
              <div className="relative">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index < currentStep;
                  const isCurrent = index === currentStep - 1;
                  
                  return (
                    <div key={index} className="flex items-start mb-8 last:mb-0">
                      <div className="relative">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center transition-colors
                          ${isActive ? 'bg-orange-600' : 'bg-gray-200'}
                        `}>
                          <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div className={`
                            absolute top-12 left-6 w-0.5 h-16 -translate-x-1/2
                            ${isActive ? 'bg-orange-600' : 'bg-gray-200'}
                          `} />
                        )}
                        {isCurrent && (
                          <div className="absolute -inset-1 rounded-full border-2 border-orange-600 animate-pulse" />
                        )}
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <p className={`font-semibold ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                          {step.label}
                        </p>
                        <p className={`text-sm ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-700 mb-3">Our customer support team is here to assist you.</p>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Call +91 95602 45235
                </button>
                <span className="text-gray-400">|</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Email handipankh@gmail.com
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              {order.items && order.items.length > 0 ? (
                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.menuItem.name} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        {formatPrice(item.menuItem.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600 mb-4">Order items will appear here</p>
              )}
              
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(order.subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Tax (GST)</span>
                  <span>{formatPrice(order.tax)}</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Delivery Fee</span>
                  <span>{order.deliveryFee === 0 ? 'FREE' : formatPrice(order.deliveryFee)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Paid</span>
                    <span className="text-orange-600">{formatPrice(order.total)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Link href="/menu">
                  <Button variant="outline" className="w-full">
                    Order More
                  </Button>
                </Link>
                
                <button className="w-full flex items-center justify-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
                  <Star className="h-4 w-4" />
                  Rate Your Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}