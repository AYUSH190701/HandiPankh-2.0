import { MenuItem } from '@/lib/types';
import { REAL_IMAGES } from '@/lib/constants/images';

// ── SHAHI HYDERABADI BIRYANI ──────────────────────────────────────────────────

const hydBiryanis: MenuItem[] = [
  {
    id: 'hyd-veg',
    name: 'Veg Hyderabadi Biryani',
    description: 'Garden-fresh vegetables slow-cooked dum style with Hyderabadi spices, saffron, and fragrant basmati rice. Served with raita.',
    price: 289,
    image: REAL_IMAGES.biryani.vegHyd,
    category: 'veg',
    spiceLevel: 'medium',
    isVeg: true,
    rating: 4.5,
    reviews: 620,
    preparationTime: 35,
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Saffron', 'Ghee', 'Fried Onions', 'Hyderabadi Spices'],
    nutritionalInfo: { calories: 480, protein: 14, carbs: 82, fat: 14 }
  },
  {
    id: 'hyd-paneer',
    name: 'Paneer Hyderabadi Biryani',
    description: 'Tender cottage cheese cubes marinated in yogurt and spices, layered with aromatic saffron rice cooked dum style.',
    price: 299,
    image: REAL_IMAGES.biryani.paneerHyd,
    category: 'veg',
    spiceLevel: 'medium',
    isVeg: true,
    rating: 4.6,
    reviews: 580,
    preparationTime: 35,
    ingredients: ['Basmati Rice', 'Paneer', 'Yogurt', 'Saffron', 'Mint', 'Fried Onions', 'Hyderabadi Spices'],
    nutritionalInfo: { calories: 540, protein: 20, carbs: 75, fat: 20 }
  },
  {
    id: 'hyd-kathal',
    name: 'Kathal Hyderabadi Biryani',
    description: 'Raw jackfruit (kathal) slow-cooked in rich Hyderabadi masala, layered with basmati rice — a unique and flavourful dum biryani.',
    price: 399,
    image: REAL_IMAGES.biryani.kathalHyd,
    category: 'veg',
    spiceLevel: 'medium',
    isVeg: true,
    rating: 4.5,
    reviews: 320,
    preparationTime: 40,
    ingredients: ['Basmati Rice', 'Raw Jackfruit', 'Yogurt', 'Fried Onions', 'Saffron', 'Hyderabadi Spices'],
    nutritionalInfo: { calories: 490, protein: 12, carbs: 84, fat: 13 }
  },
  {
    id: 'hyd-egg',
    name: 'Egg Hyderabadi Biryani',
    description: 'Spiced boiled eggs layered with fragrant Hyderabadi dum rice — a protein-rich favourite cooked fresh every time.',
    price: 359,
    image: REAL_IMAGES.biryani.eggHyd,
    category: 'non-veg',
    spiceLevel: 'medium',
    isVeg: false,
    rating: 4.5,
    reviews: 490,
    preparationTime: 30,
    ingredients: ['Basmati Rice', 'Boiled Eggs', 'Onions', 'Yogurt', 'Saffron', 'Biryani Masala'],
    nutritionalInfo: { calories: 520, protein: 24, carbs: 70, fat: 18 }
  },
  {
    id: 'hyd-chicken65',
    name: 'Chicken 65 Hyderabadi Biryani',
    description: 'Crispy Chicken 65 pieces tossed into a spice-tempered sauce, then layered with Hyderabadi dum rice for a fiery indulgence.',
    price: 439,
    image: REAL_IMAGES.biryani.chicken65Hyd,
    category: 'non-veg',
    spiceLevel: 'hot',
    isVeg: false,
    rating: 4.7,
    reviews: 760,
    preparationTime: 40,
    ingredients: ['Basmati Rice', 'Fried Chicken', 'Curry Leaves', 'Yogurt', 'Red Chilli', 'Hyderabadi Spices'],
    nutritionalInfo: { calories: 680, protein: 38, carbs: 72, fat: 25 }
  },
  {
    id: 'hyd-chicken',
    name: 'Chicken Hyderabadi Biryani',
    description: 'Tender chicken pieces marinated overnight in authentic Hyderabadi masala and slow-cooked dum style with saffron-infused basmati rice.',
    price: 329,
    image: REAL_IMAGES.biryani.chickenHyd,
    category: 'non-veg',
    spiceLevel: 'medium',
    isVeg: false,
    rating: 4.8,
    reviews: 1420,
    preparationTime: 45,
    ingredients: ['Basmati Rice', 'Chicken', 'Yogurt', 'Saffron', 'Fried Onions', 'Ghee', 'Hyderabadi Spices'],
    nutritionalInfo: { calories: 650, protein: 36, carbs: 74, fat: 22 }
  },
  {
    id: 'hyd-chicken-bl',
    name: 'Chicken Hyderabadi Biryani (Boneless)',
    description: 'Our signature Hyderabadi dum biryani made with succulent boneless chicken — all the flavour, none of the bones.',
    price: 499,
    image: REAL_IMAGES.biryani.chickenBoneless,
    category: 'non-veg',
    spiceLevel: 'medium',
    isVeg: false,
    rating: 4.8,
    reviews: 980,
    preparationTime: 45,
    ingredients: ['Basmati Rice', 'Boneless Chicken', 'Yogurt', 'Saffron', 'Fried Onions', 'Ghee', 'Hyderabadi Spices'],
    nutritionalInfo: { calories: 660, protein: 40, carbs: 74, fat: 22 }
  },
  {
    id: 'hyd-chicken-doguna',
    name: 'Chicken Do Guna Biryani',
    description: 'Double the chicken, double the flavour — our indulgent Do Guna version packs twice the marinated chicken into every layer of dum rice.',
    price: 619,
    image: REAL_IMAGES.biryani.chickenDoGuna,
    category: 'non-veg',
    spiceLevel: 'hot',
    isVeg: false,
    rating: 4.9,
    reviews: 540,
    preparationTime: 50,
    ingredients: ['Basmati Rice', 'Double Chicken', 'Yogurt', 'Saffron', 'Fried Onions', 'Ghee', 'Premium Spices'],
    nutritionalInfo: { calories: 820, protein: 56, carbs: 72, fat: 30 }
  },
  {
    id: 'hyd-mutton',
    name: 'Mutton Hyderabadi Biryani',
    description: 'Slow-cooked tender mutton marinated in traditional Hyderabadi spices, layered with basmati rice and sealed for the perfect dum.',
    price: 689,
    image: REAL_IMAGES.biryani.muttonHyd,
    category: 'non-veg',
    spiceLevel: 'hot',
    isVeg: false,
    rating: 4.9,
    reviews: 870,
    preparationTime: 60,
    ingredients: ['Basmati Rice', 'Mutton', 'Yogurt', 'Saffron', 'Fried Onions', 'Kewra', 'Hyderabadi Spices'],
    nutritionalInfo: { calories: 720, protein: 44, carbs: 68, fat: 28 }
  },
];

// ── NAWABI LUCKNOWI BIRYANI ───────────────────────────────────────────────────

const luckBiryanis: MenuItem[] = [
  {
    id: 'luck-veg',
    name: 'Veg Lucknowi Biryani',
    description: 'Delicate Nawabi-style dum biryani with seasonal vegetables, rose water, kewra, and light aromatic spices — the royal Awadhi tradition.',
    price: 379,
    image: REAL_IMAGES.biryani.vegLuck,
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.5,
    reviews: 380,
    preparationTime: 35,
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Rose Water', 'Kewra', 'Light Spices', 'Ghee'],
    nutritionalInfo: { calories: 460, protein: 12, carbs: 82, fat: 12 }
  },
  {
    id: 'luck-chicken',
    name: 'Murg Lucknowi Biryani',
    description: 'Tender chicken in a velvety Awadhi marinade slow-cooked with fragrant basmati, infused with kewra water and subtle warm spices.',
    price: 329,
    image: REAL_IMAGES.biryani.chickenLuck,
    category: 'non-veg',
    spiceLevel: 'mild',
    isVeg: false,
    rating: 4.7,
    reviews: 890,
    preparationTime: 45,
    ingredients: ['Basmati Rice', 'Chicken', 'Kewra Water', 'Rose Water', 'Yogurt', 'Fried Onions', 'Awadhi Spices'],
    nutritionalInfo: { calories: 620, protein: 34, carbs: 76, fat: 19 }
  },
  {
    id: 'luck-mutton',
    name: 'Mutton Lucknowi Biryani',
    description: 'A regal Nawabi preparation — fall-off-the-bone mutton cooked in the Awadhi dum method with rose water, kewra, and hand-ground spices.',
    price: 489,
    image: REAL_IMAGES.biryani.muttonLuck,
    category: 'non-veg',
    spiceLevel: 'medium',
    isVeg: false,
    rating: 4.9,
    reviews: 720,
    preparationTime: 60,
    ingredients: ['Basmati Rice', 'Mutton', 'Rose Water', 'Kewra', 'Yogurt', 'Fried Onions', 'Awadhi Spices'],
    nutritionalInfo: { calories: 710, protein: 42, carbs: 70, fat: 27 }
  },
];

// ── KOLKATA DAWAT BIRYANI ─────────────────────────────────────────────────────

const kolkBiryanis: MenuItem[] = [
  {
    id: 'kolk-chicken',
    name: 'Kolkata Chicken Biryani',
    description: 'The iconic Dawat-style Kolkata biryani — light, subtly spiced basmati rice with tender chicken and soft potato, fragrant with kewra.',
    price: 489,
    image: REAL_IMAGES.biryani.chickenKolk,
    category: 'non-veg',
    spiceLevel: 'mild',
    isVeg: false,
    rating: 4.7,
    reviews: 670,
    preparationTime: 40,
    ingredients: ['Basmati Rice', 'Chicken', 'Potato', 'Kewra Water', 'Fried Onions', 'Light Spices'],
    nutritionalInfo: { calories: 630, protein: 32, carbs: 80, fat: 20 }
  },
  {
    id: 'kolk-mutton',
    name: 'Kolkata Mutton Biryani',
    description: 'Authentic Bengali dawat biryani — succulent mutton and soft aloo layered with lightly spiced fragrant rice in the true Kolkata tradition.',
    price: 689,
    image: REAL_IMAGES.biryani.muttonKolk,
    category: 'non-veg',
    spiceLevel: 'mild',
    isVeg: false,
    rating: 4.8,
    reviews: 520,
    preparationTime: 60,
    ingredients: ['Basmati Rice', 'Mutton', 'Potato', 'Kewra Water', 'Rose Water', 'Fried Onions', 'Kolkata Spices'],
    nutritionalInfo: { calories: 730, protein: 44, carbs: 74, fat: 27 }
  },
];

// ── STARTERS ──────────────────────────────────────────────────────────────────

const starters: MenuItem[] = [
  {
    id: 'st-veg-galouti',
    name: 'Veg Galouti Kebab',
    description: 'Mouth-melting minced vegetable patties infused with royal Awadhi spices — a vegetarian take on the classic galouti. [6 pcs.]',
    price: 299,
    image: REAL_IMAGES.starters.vegGalouti,
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.4,
    reviews: 280,
    preparationTime: 20,
    ingredients: ['Mixed Vegetables', 'Chana Dal', 'Garam Masala', 'Ghee', 'Awadhispices'],
    nutritionalInfo: { calories: 320, protein: 10, carbs: 38, fat: 14 }
  },
  {
    id: 'st-corn-stick',
    name: 'Crispy Corn Stick',
    description: 'Golden corn kernels pressed on skewers, crisped and dusted with chaat masala for a tangy crunch. [6 pcs.]',
    price: 299,
    image: REAL_IMAGES.starters.crispyCornStick,
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.3,
    reviews: 210,
    preparationTime: 15,
    ingredients: ['Sweet Corn', 'Cornflour', 'Chaat Masala', 'Spices'],
    nutritionalInfo: { calories: 280, protein: 6, carbs: 42, fat: 10 }
  },
  {
    id: 'st-paneer-65',
    name: 'Paneer 65',
    description: 'Fresh cottage cheese cubes tossed in a fiery tarka of curry leaves and hot spices — a restaurant-style treat. [250 gm.]',
    price: 379,
    image: REAL_IMAGES.starters.paneer65,
    category: 'veg',
    spiceLevel: 'hot',
    isVeg: true,
    rating: 4.5,
    reviews: 340,
    preparationTime: 20,
    ingredients: ['Paneer', 'Curry Leaves', 'Red Chilli', 'Yogurt', 'Spices'],
    nutritionalInfo: { calories: 380, protein: 22, carbs: 18, fat: 26 }
  },
  {
    id: 'st-chicken-seekh',
    name: 'Chicken Seekh Kebab',
    description: 'Succulent fine-minced chicken skewers grilled over amber tandoor coal — smoky, juicy, and irresistible. [250 gm.]',
    price: 379,
    image: REAL_IMAGES.starters.chickenSeekh,
    category: 'non-veg',
    spiceLevel: 'medium',
    isVeg: false,
    rating: 4.7,
    reviews: 560,
    preparationTime: 25,
    ingredients: ['Minced Chicken', 'Green Chilli', 'Coriander', 'Garam Masala', 'Ginger Garlic'],
    nutritionalInfo: { calories: 340, protein: 32, carbs: 8, fat: 20 }
  },
  {
    id: 'st-chicken-65',
    name: 'Chicken 65',
    description: 'Classic crisp southern-style fried chicken finished in spice-tempered yogurt — the ultimate game-day snack. [250 gm.]',
    price: 399,
    image: REAL_IMAGES.starters.chicken65,
    category: 'non-veg',
    spiceLevel: 'hot',
    isVeg: false,
    rating: 4.7,
    reviews: 780,
    preparationTime: 20,
    ingredients: ['Chicken', 'Curry Leaves', 'Red Chilli', 'Yogurt', 'Cornflour', 'Spices'],
    nutritionalInfo: { calories: 380, protein: 30, carbs: 14, fat: 22 }
  },
  {
    id: 'st-chicken-tikka',
    name: 'Classic Chicken Tikka',
    description: 'Clay-oven roasted chicken chunks marinated in mustard oil, yogurt, and local chillies — charred to smoky perfection. [8 pcs.]',
    price: 379,
    image: REAL_IMAGES.starters.chickenTikka,
    category: 'non-veg',
    spiceLevel: 'medium',
    isVeg: false,
    rating: 4.6,
    reviews: 490,
    preparationTime: 25,
    ingredients: ['Chicken', 'Mustard Oil', 'Yogurt', 'Local Chillies', 'Tandoori Masala'],
    nutritionalInfo: { calories: 310, protein: 34, carbs: 6, fat: 16 }
  },
  {
    id: 'st-malai-tikka',
    name: 'Murg Malai Tikka',
    description: 'Velvety chicken chunks steeped in fresh cream, yogurt, cheese, and aromatic green cardamom — melt-in-mouth goodness. [8 pcs.]',
    price: 399,
    image: REAL_IMAGES.starters.malaiTikka,
    category: 'non-veg',
    spiceLevel: 'mild',
    isVeg: false,
    rating: 4.8,
    reviews: 620,
    preparationTime: 25,
    ingredients: ['Chicken', 'Fresh Cream', 'Yogurt', 'Cheese', 'Green Cardamom', 'White Pepper'],
    nutritionalInfo: { calories: 360, protein: 36, carbs: 6, fat: 22 }
  },
];

// ── ADD-ONS & DESSERTS ────────────────────────────────────────────────────────

const addOns: MenuItem[] = [
  {
    id: 'addon-raita',
    name: 'Raita / Salan',
    description: 'Chilled yogurt raita with cumin and mint, or traditional salan — the perfect biryani companion.',
    price: 65,
    image: REAL_IMAGES.starters.raita,
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.3,
    reviews: 120,
    preparationTime: 5,
    ingredients: ['Yogurt', 'Cucumber', 'Mint', 'Cumin', 'Salt'],
    nutritionalInfo: { calories: 80, protein: 4, carbs: 8, fat: 3 }
  },
  {
    id: 'addon-burani-raita',
    name: 'Burani Raita',
    description: 'Garlic-infused yogurt tempered with mustard seeds and curry leaves — a Hyderabadi classic side.',
    price: 89,
    image: REAL_IMAGES.starters.buraniRaita,
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.4,
    reviews: 95,
    preparationTime: 5,
    ingredients: ['Yogurt', 'Garlic', 'Mustard Seeds', 'Curry Leaves', 'Red Chilli'],
    nutritionalInfo: { calories: 90, protein: 5, carbs: 8, fat: 4 }
  },
  {
    id: 'addon-phirni',
    name: 'Matka Phirni',
    description: 'Traditional slow-set rice pudding with saffron and cardamom, served in a clay matka — a timeless dessert.',
    price: 199,
    image: REAL_IMAGES.starters.matkaPhirni,
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.6,
    reviews: 310,
    preparationTime: 10,
    ingredients: ['Milk', 'Rice', 'Sugar', 'Saffron', 'Cardamom', 'Rose Water'],
    nutritionalInfo: { calories: 220, protein: 6, carbs: 38, fat: 6 }
  },
  {
    id: 'addon-gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Soft, golden khoya dumplings soaked in cardamom-rose syrup — a classic Indian sweet. [2 pcs.]',
    price: 109,
    image: REAL_IMAGES.starters.gulabJamun,
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.5,
    reviews: 240,
    preparationTime: 5,
    ingredients: ['Khoya', 'Flour', 'Sugar Syrup', 'Cardamom', 'Rose Water'],
    nutritionalInfo: { calories: 260, protein: 4, carbs: 48, fat: 8 }
  },
];

// ── BEVERAGES ─────────────────────────────────────────────────────────────────

const beverages: MenuItem[] = [
  {
    id: 'bev-lemonade',
    name: 'Masala Lemonade',
    description: 'Chilled lemonade with roasted cumin, black salt, and a tangy masala kick — the best thirst-quencher.',
    price: 79,
    image: REAL_IMAGES.dishes.curry,
    category: 'veg',
    spiceLevel: 'mild',
    isVeg: true,
    rating: 4.4,
    reviews: 180,
    preparationTime: 5,
    ingredients: ['Lemon', 'Roasted Cumin', 'Black Salt', 'Masala', 'Water', 'Ice'],
    nutritionalInfo: { calories: 60, protein: 0, carbs: 14, fat: 0 }
  },
];

export const menuItems: MenuItem[] = [
  ...hydBiryanis,
  ...luckBiryanis,
  ...kolkBiryanis,
  ...starters,
  ...addOns,
  ...beverages,
];