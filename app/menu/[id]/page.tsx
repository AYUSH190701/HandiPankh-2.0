'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/lib/data/menu';
import { MenuItem } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, getSpiceLevelColor, getSpiceLevelEmoji } from '@/lib/utils';
import { 
  Star, Clock, ChevronLeft, Plus, Minus, ShoppingCart, 
  Info, ChefHat, Heart, Share2, Shield, Truck 
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function ItemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem, isInCart, getItemQuantity, updateQuantity } = useCart();
  const [item, setItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'nutrition'>('description');
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const foundItem = menuItems.find(i => i.id === params.id);
    if (foundItem) {
      setItem(foundItem);
    } else {
      router.push('/menu');
    }
  }, [params.id, router]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  const cartQuantity = getItemQuantity(item.id);
  const inCart = isInCart(item.id);

  const handleAddToCart = () => {
    addItem(item, quantity);
    setQuantity(1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.name,
        text: item.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const relatedItems = menuItems.filter(i => i.id !== item.id && i.category === item.category).slice(0, 3);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/menu" className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                </div>
              )}
              <Image
                src={`https://source.unsplash.com/800x800/?biryani,${item.name}`}
                alt={item.name}
                fill
                className="object-cover"
                onLoadingComplete={() => setImageLoading(false)}
              />
              {item.isVeg ? (
                <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-sm rounded">
                  VEG
                </span>
              ) : (
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm rounded">
                  NON-VEG
                </span>
              )}
              
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center p-3 bg-orange-50 rounded-lg">
                <Shield className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-sm font-medium">Hygiene</span>
              </div>
              <div className="flex items-center justify-center p-3 bg-orange-50 rounded-lg">
                <ChefHat className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-sm font-medium">Expert Chef</span>
              </div>
              <div className="flex items-center justify-center p-3 bg-orange-50 rounded-lg">
                <Truck className="h-5 w-5 text-orange-600 mr-2" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
            
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="ml-1 font-semibold">{item.rating}</span>
                <span className="ml-1 text-gray-500">({item.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-1" />
                <span className="text-gray-600">{item.preparationTime} min</span>
              </div>
              <div className={`font-medium ${getSpiceLevelColor(item.spiceLevel)}`}>
                {getSpiceLevelEmoji(item.spiceLevel)}
              </div>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-orange-600">{formatPrice(item.price)}</span>
            </div>

            {/* Tabs */}
            <div className="border-b mb-4">
              <div className="flex gap-6">
                {(['description', 'ingredients', 'nutrition'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 capitalize transition-colors ${
                      activeTab === tab
                        ? 'border-b-2 border-orange-600 text-orange-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-6">
              {activeTab === 'description' && (
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              )}
              {activeTab === 'ingredients' && (
                <div>
                  <h3 className="font-semibold mb-2">Key Ingredients:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {item.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'nutrition' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600">Calories</p>
                    <p className="text-lg font-semibold">{item.nutritionalInfo.calories} kcal</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600">Protein</p>
                    <p className="text-lg font-semibold">{item.nutritionalInfo.protein}g</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600">Carbs</p>
                    <p className="text-lg font-semibold">{item.nutritionalInfo.carbs}g</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm text-gray-600">Fat</p>
                    <p className="text-lg font-semibold">{item.nutritionalInfo.fat}g</p>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              {!inCart ? (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Quantity</label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg h-10 w-10 flex items-center justify-center transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-semibold text-lg w-12 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg h-10 w-10 flex items-center justify-center transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart - {formatPrice(item.price * quantity)}
                  </Button>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-medium">✓ Item added to cart</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-gray-600">Quantity in cart:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, cartQuantity - 1)}
                          className="bg-white hover:bg-gray-50 text-gray-600 rounded h-8 w-8 flex items-center justify-center transition-colors border"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-semibold w-8 text-center">{cartQuantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, cartQuantity + 1)}
                          className="bg-white hover:bg-gray-50 text-gray-600 rounded h-8 w-8 flex items-center justify-center transition-colors border"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/cart">
                    <Button variant="primary" size="lg" className="w-full">
                      Go to Cart
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start">
              <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <p className="text-sm text-blue-800">
                Free delivery on orders above ₹500. Estimated delivery time: 45 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedItems.map((relatedItem) => (
                <Link key={relatedItem.id} href={`/menu/${relatedItem.id}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={`https://source.unsplash.com/200x200/?biryani,${relatedItem.name}`}
                          alt={relatedItem.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 line-clamp-1">{relatedItem.name}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{relatedItem.description}</p>
                        <p className="text-orange-600 font-bold mt-1">{formatPrice(relatedItem.price)}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}