import { MenuItem } from '@/lib/types';
import { getPlaceholderImage } from '@/lib/constants/images';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Hyderabadi Chicken Biryani',
    description: 'Aromatic basmati rice layered with tender marinated chicken, cooked with authentic Hyderabadi spices, saffron, and caramelized onions. Served with raita and shorba.',
    price: 299,
    image: getPlaceholderImage('chicken'),
    category: 'non-veg',
    spiceLevel: 'medium',
    isVeg: false,
    rating: 4.8,
    reviews: 1250,
    preparationTime: 45,
    ingredients: ['Basmati Rice', 'Chicken', 'Yogurt', 'Onions', 'Saffron', 'Ghee', 'Whole Spices'],
    nutritionalInfo: {
      calories: 650,
      protein: 35,
      carbs: 75,
      fat: 22
    }
  },
  {
    id: '2',
    name: 'Lucknowi Mutton Biryani',
    description: 'Slow-cooked tender mutton pieces with fragrant basmati rice, infused with aromatic spices and rose water. A royal delicacy from the kitchens of Awadh.',
    price: 399,
    image: getPlaceholderImage('mutton'),
    category: 'non-veg',
    spiceLevel: 'hot',
    isVeg: false,
    rating: 4.9,
    reviews: 890,
    preparationTime: 60,
    ingredients: ['Basmati Rice', 'Mutton', 'Rose Water', 'Kewra', 'Yogurt', 'Fried Onions', 'Premium Spices'],
    nutritionalInfo: {
      calories: 720,
      protein: 42,
      carbs: 70,
      fat: 28
    }
  },
  {
    id: '3',
    name: 'Vegetable Dum Biryani',
    description: 'Garden fresh vegetables layered with aromatic basmati rice, cooked dum style with exotic spices. Perfect for vegetarian food lovers.',
    price: 229,
    image: getPlaceholderImage('veg'),
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.6,
    reviews: 750,
    preparationTime: 35,
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Paneer', 'Yogurt', 'Mint', 'Coriander', 'Whole Spices'],
    nutritionalInfo: {
      calories: 480,
      protein: 18,
      carbs: 82,
      fat: 15
    }
  },
  {
    id: '4',
    name: 'Egg Biryani',
    description: 'Perfectly boiled eggs marinated in spices, layered with fragrant basmati rice and cooked to perfection. A protein-rich delight.',
    price: 199,
    image: getPlaceholderImage('egg'),
    category: 'non-veg',
    spiceLevel: 'medium',
    isVeg: false,
    rating: 4.5,
    reviews: 620,
    preparationTime: 30,
    ingredients: ['Basmati Rice', 'Boiled Eggs', 'Onions', 'Tomatoes', 'Yogurt', 'Biryani Masala'],
    nutritionalInfo: {
      calories: 520,
      protein: 24,
      carbs: 68,
      fat: 18
    }
  },
  {
    id: '5',
    name: 'Special Prawns Biryani',
    description: 'Succulent prawns marinated in coastal spices, layered with premium basmati rice. A seafood lover\'s paradise.',
    price: 449,
    image: getPlaceholderImage('prawns'),
    category: 'non-veg',
    spiceLevel: 'hot',
    isVeg: false,
    rating: 4.7,
    reviews: 420,
    preparationTime: 40,
    ingredients: ['Basmati Rice', 'Tiger Prawns', 'Coconut Milk', 'Curry Leaves', 'Coastal Spices'],
    nutritionalInfo: {
      calories: 580,
      protein: 38,
      carbs: 65,
      fat: 20
    }
  },
  {
    id: '6',
    name: 'Paneer Tikka Biryani',
    description: 'Grilled paneer tikka pieces layered with aromatic rice, creating a fusion of North Indian flavors with traditional biryani.',
    price: 259,
    image: getPlaceholderImage('paneer'),
    category: 'veg',
    spiceLevel: 'medium',
    isVeg: true,
    rating: 4.6,
    reviews: 580,
    preparationTime: 35,
    ingredients: ['Basmati Rice', 'Paneer', 'Bell Peppers', 'Tikka Masala', 'Cream', 'Kasuri Methi'],
    nutritionalInfo: {
      calories: 550,
      protein: 22,
      carbs: 72,
      fat: 21
    }
  },
  {
    id: '7',
    name: 'Kolkata Style Chicken Biryani',
    description: 'Light and flavorful biryani with perfectly cooked potatoes, boiled eggs, and tender chicken. A Bengali favorite.',
    price: 279,
    image: getPlaceholderImage('chicken'),
    category: 'non-veg',
    spiceLevel: 'mild',
    isVeg: false,
    rating: 4.7,
    reviews: 780,
    preparationTime: 40,
    ingredients: ['Basmati Rice', 'Chicken', 'Potatoes', 'Eggs', 'Kewra Water', 'Light Spices'],
    nutritionalInfo: {
      calories: 620,
      protein: 32,
      carbs: 78,
      fat: 20
    }
  },
  {
    id: '8',
    name: 'Soya Chunks Biryani',
    description: 'Protein-packed soya chunks marinated in spices and layered with aromatic rice. A healthy vegetarian alternative.',
    price: 189,
    image: getPlaceholderImage('veg'),
    category: 'veg',
    spiceLevel: 'medium',
    isVeg: true,
    rating: 4.4,
    reviews: 340,
    preparationTime: 30,
    ingredients: ['Basmati Rice', 'Soya Chunks', 'Yogurt', 'Mint', 'Biryani Spices'],
    nutritionalInfo: {
      calories: 450,
      protein: 28,
      carbs: 70,
      fat: 12
    }
  }
];