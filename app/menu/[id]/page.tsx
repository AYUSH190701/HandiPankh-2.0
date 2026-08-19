'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/lib/data/menu';
import { MenuItem } from '@/lib/types';
import { config } from '@/lib/config';
import { formatPrice, getSpiceLevelColor, getSpiceLevelEmoji } from '@/lib/utils';
import { 
  Star, Clock, ChevronLeft, 
  Info, ChefHat, Heart, Share2, Shield, Truck, Phone
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function ItemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState<MenuItem | null>(null);
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

  const whatsappMsg = encodeURIComponent(`Hi! I'd like to order ${item.name} (${formatPrice(item.price)})`);
  const whatsappUrl = `https://wa.me/91${config.contact.phone.replace(/\D/g, '').slice(-10)}?text=${whatsappMsg}`;

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
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                onLoad={() => setImageLoading(false)}
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

            {/* Order CTAs */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">How to Order</p>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors text-base"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order on WhatsApp
              </a>

              {/* Call */}
              <a
                href={`tel:${config.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors text-base"
              >
                <Phone className="h-5 w-5" />
                Call: {config.contact.phone}
              </a>

              {/* Divider */}
              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 font-medium">OR ORDER ONLINE</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Swiggy / Zomato */}
              <div className="flex gap-3">
                <a
                  href={config.social.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
                >
                  <Image src="/images/logos/swiggy.jpeg" alt="Swiggy" width={20} height={20} className="rounded" />
                  Swiggy
                </a>
                <a
                  href={config.social.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
                >
                  <Image src="/images/logos/zomato.svg" alt="Zomato" width={60} height={18} className="brightness-0 invert" />
                </a>
              </div>
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg flex items-start">
              <Info className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-green-800">
                Free home delivery within 2km. Takeaway orders get upto <strong>35% OFF</strong>. Call or WhatsApp us to place your order!
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