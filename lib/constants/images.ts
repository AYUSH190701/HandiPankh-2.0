export const REAL_IMAGES = {
  hero: '/images/biryani/chickenHyderabadi.png',
  biryani: {
    // Hyderabadi
    vegHyd: '/images/biryani/veghyderabadi.png',
    paneerHyd: '/images/biryani/Paneer Hyderabadi.png',
    kathalHyd: '/images/biryani/KathalHyderabadi.png',
    eggHyd: '/images/biryani/egghyderabadi.png',
    chicken65Hyd: '/images/biryani/chicken65.png',
    chickenHyd: '/images/biryani/chickenHyderabadi.png',
    chickenBoneless: '/images/biryani/chickenboneless.png',
    chickenDoGuna: '/images/biryani/chickendoguna.png',
    muttonHyd: '/images/biryani/mutton hyderabadi.png',
    // Lucknowi
    vegLuck: '/images/biryani/veglucknowi.png',
    chickenLuck: '/images/biryani/chickenlucknowi.png',
    muttonLuck: '/images/biryani/muttonlucknowi.png',
    // Kolkata
    chickenKolk: '/images/biryani/chickenkolkata.png',
    muttonKolk: '/images/biryani/kolkatamutton.png',
    // Generic fallbacks
    chicken: [
      '/images/biryani/chickenHyderabadi.png',
      '/images/biryani/chickenlucknowi.png',
    ],
    mutton: [
      '/images/biryani/mutton hyderabadi.png',
      '/images/biryani/muttonlucknowi.png',
    ],
    veg: [
      '/images/biryani/veghyderabadi.png',
      '/images/biryani/veglucknowi.png',
    ],
    egg: ['/images/biryani/egghyderabadi.png'],
    prawn: ['/images/biryani/chickenHyderabadi.png'],
  },
  starters: {
    vegGalouti: '/images/kebab and all/kebab.jpeg',
    crispyCornStick: '/images/kebab and all/crispycorn stick.jpeg',
    paneer65: '/images/kebab and all/paneer65.jpeg',
    chickenSeekh: '/images/kebab and all/WhatsApp Image 2026-08-19 at 11.20.11 PM (1).jpeg',
    chicken65: '/images/kebab and all/WhatsApp Image 2026-08-19 at 11.20.11 PM.jpeg',
    chickenTikka: '/images/kebab and all/WhatsApp Image 2026-08-19 at 11.20.10 PM (2).jpeg',
    malaiTikka: '/images/kebab and all/WhatsApp Image 2026-08-19 at 11.20.09 PM (1).jpeg',
    raita: '/images/kebab and all/Raita.png',
    buraniRaita: '/images/kebab and all/Burani Raita.png',
    matkaPhirni: '/images/kebab and all/matka fherni.png',
    gulabJamun: '/images/kebab and all/Gulab Jamun (2 pcs.).png',
  },
  dishes: {
    curry: '/images/dishes/curry-1.jpg',
    rice: '/images/dishes/rice-dish-1.jpg',
    kebab: '/images/dishes/kebab-1.jpg'
  },
  restaurant: {
    kitchen: '/images/restaurant/kitchen-1.jpg',
    chef: [
      '/images/restaurant/chef-1.jpg',
      '/images/restaurant/chef-2.jpg'
    ]
  },
  avatars: [
    '/images/avatars/person-1.jpg',
    '/images/avatars/person-2.jpg',
    '/images/avatars/person-3.jpg'
  ]
};

export const getPlaceholderImage = (type: string, subtype?: string): string => {
  switch(type) {
    case 'hero':
      return REAL_IMAGES.hero;
    
    case 'biryani':
      if (subtype && REAL_IMAGES.biryani[subtype as keyof typeof REAL_IMAGES.biryani]) {
        const images = REAL_IMAGES.biryani[subtype as keyof typeof REAL_IMAGES.biryani];
        return Array.isArray(images) ? images[0] : images as string;
      }
      return REAL_IMAGES.biryani.chicken[0];
    
    case 'chicken':
      return REAL_IMAGES.biryani.chicken[0];
    
    case 'mutton':
      return REAL_IMAGES.biryani.mutton[0];
    
    case 'veg':
      return REAL_IMAGES.biryani.veg[0];
    
    case 'egg':
      return REAL_IMAGES.biryani.egg[0];
    
    case 'prawn':
    case 'prawns':
      return REAL_IMAGES.biryani.prawn[0];
    
    case 'avatar':
    case 'person':
      return REAL_IMAGES.avatars[0];
    
    case 'restaurant':
      if (subtype === 'kitchen') {
        return REAL_IMAGES.restaurant.kitchen;
      } else if (subtype === 'chef') {
        return REAL_IMAGES.restaurant.chef[0];
      }
      return REAL_IMAGES.restaurant.kitchen;
    
    case 'dish':
    case 'curry':
      return REAL_IMAGES.dishes.curry;
    
    case 'rice':
      return REAL_IMAGES.dishes.rice;
    
    case 'kebab':
      return REAL_IMAGES.dishes.kebab;
    
    default:
      return REAL_IMAGES.biryani.chicken[0];
  }
};