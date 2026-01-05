'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '@/lib/types';
import { formatPrice, getSpiceLevelColor, getSpiceLevelEmoji } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { Star, Clock, Plus, Minus } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { addItem, isInCart, getItemQuantity, updateQuantity } = useCart();
  const quantity = getItemQuantity(item.id);
  const inCart = isInCart(item.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(item, 1);
  };

  const handleUpdateQuantity = (e: React.MouseEvent, newQuantity: number) => {
    e.preventDefault();
    updateQuantity(item.id, newQuantity);
  };

  return (
    <Link href={`/menu/${item.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {item.isVeg ? (
            <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs rounded z-20">
              VEG
            </span>
          ) : (
            <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded z-20">
              NON-VEG
            </span>
          )}
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full z-20">
            <span className="font-bold text-lg">{formatPrice(item.price)}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-1">{item.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-medium">{item.rating}</span>
                <span className="text-gray-500">({item.reviews})</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">{item.preparationTime} min</span>
              </div>
            </div>
            <div className={`text-sm font-medium ${getSpiceLevelColor(item.spiceLevel)}`}>
              {getSpiceLevelEmoji(item.spiceLevel)}
            </div>
          </div>

          {inCart ? (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">In Cart:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => handleUpdateQuantity(e, quantity - 1)}
                  className="bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full h-8 w-8 flex items-center justify-center transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={(e) => handleUpdateQuantity(e, quantity + 1)}
                  className="bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full h-8 w-8 flex items-center justify-center transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="sm"
              className="w-full"
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}