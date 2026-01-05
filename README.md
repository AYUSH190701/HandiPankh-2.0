# 🍛 Biryani Pankh - Production-Ready Food Ordering Platform

A modern, full-stack Biryani ordering website built with Next.js 14, TypeScript, Tailwind CSS, and Stripe payment integration. This production-ready application features a professional design, comprehensive e-commerce functionality, and optimized performance.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC)](https://tailwindcss.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-purple)](https://stripe.com/)

## ✨ Features

### 🛒 **Customer Experience**
- **Interactive Menu**: Browse 8+ authentic biryani varieties with detailed descriptions
- **Smart Filtering**: Filter by category (Veg/Non-Veg), price range, and spice level
- **Product Details**: Comprehensive item pages with nutritional info and ingredients
- **Shopping Cart**: Real-time cart updates with quantity management
- **Secure Checkout**: Multiple payment options with Stripe integration
- **Order Tracking**: Real-time order status updates with estimated delivery
- **Responsive Design**: Seamless experience across all devices and screen sizes

### 🎨 **Design & UX**
- **Modern UI**: Clean, restaurant-style interface with professional color scheme
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Loading States**: Skeleton screens and loading indicators for better UX
- **Error Boundaries**: Graceful error handling with user-friendly messages
- **Toast Notifications**: Real-time feedback for user actions

### ⚡ **Performance & SEO**
- **Server-Side Rendering**: Optimized for search engines and fast initial loads
- **Image Optimization**: Professional SVG placeholders with lazy loading
- **SEO Optimized**: Rich meta tags, JSON-LD structured data, and OpenGraph
- **Progressive Enhancement**: Works without JavaScript for core functionality

### 🔧 **Technical Excellence**
- **Type Safety**: Full TypeScript implementation with strict mode
- **Error Handling**: Comprehensive error boundaries and API error handling
- **State Management**: Efficient React Context API for cart functionality
- **API Design**: RESTful API routes with proper validation and responses
- **Configuration**: Environment-based configuration with proper defaults

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd biryani-order
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Configuration

### Environment Variables

Create `.env.local` file with the following variables:

```env
# Required for Stripe payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here

# Application URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Optional: Database (for production)
DATABASE_URL=mongodb://localhost:27017/biryani_express
```

### Stripe Setup (Test Mode)

1. Create a [Stripe account](https://stripe.com)
2. Get your test API keys from the dashboard
3. Add keys to `.env.local`
4. Use test card numbers for payments:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`

## 📁 Project Structure

```
biryani-order/
├── app/                    # Next.js App Router
│   ├── api/               # Backend API routes
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout flow
│   ├── menu/              # Menu browsing & item details
│   └── order/             # Order confirmation
├── components/            # React components
│   ├── layout/           # Header, Footer, Layout
│   ├── menu/             # Menu-related components
│   └── ui/               # Reusable UI components
├── contexts/             # React Context providers
├── lib/                  # Utilities and configuration
│   ├── config/          # App configuration
│   ├── constants/       # Constants and images
│   ├── data/            # Mock data
│   ├── types/           # TypeScript definitions
│   └── utils/           # Utility functions
└── public/              # Static assets
```

## 🔗 API Reference

### Menu API
```http
GET /api/menu                    # Get all menu items
GET /api/menu?category=veg      # Filter by category
GET /api/menu/[id]              # Get single item
```

### Cart & Orders
```http
GET /api/cart?sessionId={id}    # Get cart items
POST /api/cart                  # Update cart
POST /api/checkout              # Process order
GET /api/order/[id]             # Get order details
```

### Payment API
```http
POST /api/payment               # Create payment intent
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy automatically

### Manual Deployment
1. Build the project: `npm run build`
2. Start production server: `npm start`

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized images and lazy loading
- **SEO**: Meta tags, structured data, and OpenGraph
- **Payments**: Secure Stripe integration
- **State Management**: React Context for cart functionality
- **Error Handling**: Comprehensive error boundaries

## 🔐 Security

- Input validation and sanitization
- Secure payment processing with Stripe
- Environment-based configuration
- CSRF protection

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support, create an issue or contact: contact@biryanipankh.com

---

**Built with ❤️ for authentic biryani lovers by Biryani Pankh** 🍛# biryani
