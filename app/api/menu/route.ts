import { NextResponse } from 'next/server';
import { menuItems } from '@/lib/data/menu';
import { FilterOptions } from '@/lib/types';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') as FilterOptions['category'];
    const spiceLevel = searchParams.get('spiceLevel') as FilterOptions['spiceLevel'];
    const sortBy = searchParams.get('sortBy') as FilterOptions['sortBy'];
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    let filteredItems = [...menuItems];

    if (category && category !== 'all') {
      filteredItems = filteredItems.filter(item => 
        category === 'veg' ? item.isVeg : !item.isVeg
      );
    }

    if (spiceLevel && spiceLevel !== 'all') {
      filteredItems = filteredItems.filter(item => item.spiceLevel === spiceLevel);
    }

    if (minPrice) {
      filteredItems = filteredItems.filter(item => item.price >= parseInt(minPrice));
    }

    if (maxPrice) {
      filteredItems = filteredItems.filter(item => item.price <= parseInt(maxPrice));
    }

    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          filteredItems.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filteredItems.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filteredItems.sort((a, b) => b.rating - a.rating);
          break;
        case 'popular':
          filteredItems.sort((a, b) => b.reviews - a.reviews);
          break;
      }
    }

    return NextResponse.json({
      success: true,
      data: filteredItems,
      count: filteredItems.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch menu items' },
      { status: 500 }
    );
  }
}

export async function GET_BY_ID(request: Request, { params }: { params: { id: string } }) {
  try {
    const item = menuItems.find(item => item.id === params.id);
    
    if (!item) {
      return NextResponse.json(
        { success: false, error: 'Menu item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: item
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch menu item' },
      { status: 500 }
    );
  }
}