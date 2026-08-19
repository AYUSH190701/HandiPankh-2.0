export const config = {
  app: {
    name: 'Handi Pankh',
    description: 'Authentic Hyderabadi Biryani - From our Handi to your Heart',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    version: '1.0.0',
  },
  api: {
    url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  },
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/biryani_express',
  },
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
    secretKey: process.env.STRIPE_SECRET_KEY || '',
  },
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587'),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID || '',
    authToken: process.env.TWILIO_AUTH_TOKEN || '',
    phoneNumber: process.env.TWILIO_PHONE_NUMBER || '',
  },
  admin: {
    email: process.env.ADMIN_EMAIL || 'handipankh@gmail.com',
    password: process.env.ADMIN_PASSWORD || '',
  },
  auth: {
    secret: process.env.NEXTAUTH_SECRET || '',
    url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  },
  analytics: {
    googleId: process.env.GOOGLE_ANALYTICS_ID || '',
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.CLOUDINARY_API_KEY || '',
    apiSecret: process.env.CLOUDINARY_API_SECRET || '',
  },
  features: {
    enablePayments: true,
    enableNotifications: true,
    enableAnalytics: !!process.env.GOOGLE_ANALYTICS_ID,
    enableCloudinary: !!process.env.CLOUDINARY_CLOUD_NAME,
    enableSMS: !!process.env.TWILIO_ACCOUNT_SID,
    enableEmail: !!process.env.SMTP_HOST,
  },
  limits: {
    maxCartItems: 20,
    maxItemQuantity: 10,
    minOrderAmount: 100,
    freeDeliveryThreshold: 500,
    maxDeliveryDistance: 25, // km
  },
  delivery: {
    estimatedTime: 45, // minutes
    slots: [
      { label: '11:00 AM - 1:00 PM', value: '11:00-13:00' },
      { label: '1:00 PM - 3:00 PM', value: '13:00-15:00' },
      { label: '6:00 PM - 8:00 PM', value: '18:00-20:00' },
      { label: '8:00 PM - 10:00 PM', value: '20:00-22:00' },
    ],
  },
  contact: {
    phone: '+91 95602 45235',
    phone2: '+91 11 4173 5235',
    email: 'handipankh@gmail.com',
    address: 'Shop NO-1, A-80, Palam Extension, Ramlphal Chowk Dwarka New Delhi-110075',
  },
  social: {
    facebook: 'https://facebook.com/handipankh',
    instagram: 'https://instagram.com/handipankh_biriyani',
    twitter: 'https://twitter.com/handipankh',
    swiggy: 'https://www.swiggy.com/city/delhi/handipankh-biryani-palam-extension-sector-7-rest1402099',
    zomato: 'https://www.zomato.com/ncr/handi-pankh-sector-7-dwarka-new-delhi/order',
  },
} as const;

export type Config = typeof config;