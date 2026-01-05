export const REAL_IMAGES = {
  hero: '/images/biryani/chicken-biryani-2.jpg',
  biryani: {
    chicken: [
      '/images/biryani/chicken-biryani-1.jpg',
      '/images/biryani/chicken-biryani-2.jpg'
    ],
    mutton: [
      '/images/biryani/mutton-biryani-1.jpg',
      '/images/biryani/mutton-biryani-2.jpg'
    ],
    veg: [
      '/images/biryani/veg-biryani-1.jpg',
      '/images/biryani/veg-biryani-2.jpg'
    ],
    egg: [
      '/images/biryani/egg-biryani-1.jpg'
    ],
    prawn: [
      '/images/biryani/prawn-biryani-1.jpg'
    ]
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
  // Use real images when available, fallback to SVG placeholders
  switch(type) {
    case 'hero':
      return REAL_IMAGES.hero;
    
    case 'biryani':
      if (subtype && REAL_IMAGES.biryani[subtype as keyof typeof REAL_IMAGES.biryani]) {
        const images = REAL_IMAGES.biryani[subtype as keyof typeof REAL_IMAGES.biryani];
        return Array.isArray(images) ? images[Math.floor(Math.random() * images.length)] : images;
      }
      // Fallback to chicken biryani if subtype not found
      return REAL_IMAGES.biryani.chicken[0];
    
    case 'chicken':
      return REAL_IMAGES.biryani.chicken[Math.floor(Math.random() * REAL_IMAGES.biryani.chicken.length)];
    
    case 'mutton':
      return REAL_IMAGES.biryani.mutton[Math.floor(Math.random() * REAL_IMAGES.biryani.mutton.length)];
    
    case 'veg':
      return REAL_IMAGES.biryani.veg[Math.floor(Math.random() * REAL_IMAGES.biryani.veg.length)];
    
    case 'egg':
      return REAL_IMAGES.biryani.egg[0];
    
    case 'prawn':
    case 'prawns':
      return REAL_IMAGES.biryani.prawn[0];
    
    case 'avatar':
    case 'person':
      return REAL_IMAGES.avatars[Math.floor(Math.random() * REAL_IMAGES.avatars.length)];
    
    case 'restaurant':
      if (subtype === 'kitchen') {
        return REAL_IMAGES.restaurant.kitchen;
      } else if (subtype === 'chef') {
        return REAL_IMAGES.restaurant.chef[Math.floor(Math.random() * REAL_IMAGES.restaurant.chef.length)];
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
      // Fallback to SVG placeholder for unknown types
      const generateColoredPlaceholder = (color: string, text: string) => {
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='${encodeURIComponent(color)}' width='800' height='600'/%3E%3Ctext fill='white' font-size='24' font-family='system-ui' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
      };
      return generateColoredPlaceholder('#f97316', 'Biryani Pankh');
  }
};