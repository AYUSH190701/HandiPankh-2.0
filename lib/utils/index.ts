import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function calculateTax(subtotal: number): number {
  return Math.round(subtotal * 0.18);
}

export function calculateDeliveryFee(subtotal: number): number {
  if (subtotal > 500) return 0;
  if (subtotal > 300) return 30;
  return 50;
}

export function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

export function estimateDeliveryTime(): string {
  const now = new Date();
  const deliveryTime = new Date(now.getTime() + 45 * 60000);
  return deliveryTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getSpiceLevelColor(level: string): string {
  switch (level) {
    case 'mild':
      return 'text-green-600';
    case 'medium':
      return 'text-yellow-600';
    case 'hot':
      return 'text-orange-600';
    case 'extra-hot':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
}

export function getSpiceLevelEmoji(level: string): string {
  switch (level) {
    case 'mild':
      return '🌶️';
    case 'medium':
      return '🌶️🌶️';
    case 'hot':
      return '🌶️🌶️🌶️';
    case 'extra-hot':
      return '🌶️🌶️🌶️🌶️';
    default:
      return '';
  }
}