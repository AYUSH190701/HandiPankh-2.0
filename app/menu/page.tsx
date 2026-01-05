'use client';

import { useState, useEffect } from 'react';
import { MenuCard } from '@/components/menu/MenuCard';
import { MenuItem, FilterOptions } from '@/lib/types';
import { menuItems } from '@/lib/data/menu';
import { Filter, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  const [items, setItems] = useState<MenuItem[]>(menuItems);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    spiceLevel: 'all',
    sortBy: 'popular'
  });

  const priceRanges = [
    { label: 'All', min: 0, max: 9999 },
    { label: 'Under ₹200', min: 0, max: 200 },
    { label: '₹200 - ₹300', min: 200, max: 300 },
    { label: '₹300 - ₹400', min: 300, max: 400 },
    { label: 'Above ₹400', min: 400, max: 9999 }
  ];

  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  useEffect(() => {
    applyFilters();
  }, [filters, selectedPriceRange]);

  const applyFilters = () => {
    setLoading(true);
    
    let filteredItems = [...menuItems];

    if (filters.category && filters.category !== 'all') {
      filteredItems = filteredItems.filter(item => 
        filters.category === 'veg' ? item.isVeg : !item.isVeg
      );
    }

    if (filters.spiceLevel && filters.spiceLevel !== 'all') {
      filteredItems = filteredItems.filter(item => item.spiceLevel === filters.spiceLevel);
    }

    if (selectedPriceRange.min > 0 || selectedPriceRange.max < 9999) {
      filteredItems = filteredItems.filter(item => 
        item.price >= selectedPriceRange.min && item.price <= selectedPriceRange.max
      );
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
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

    setTimeout(() => {
      setItems(filteredItems);
      setLoading(false);
    }, 300);
  };

  const resetFilters = () => {
    setFilters({
      category: 'all',
      spiceLevel: 'all',
      sortBy: 'popular'
    });
    setSelectedPriceRange(priceRanges[0]);
  };

  const activeFiltersCount = () => {
    let count = 0;
    if (filters.category !== 'all') count++;
    if (filters.spiceLevel !== 'all') count++;
    if (selectedPriceRange.min > 0 || selectedPriceRange.max < 9999) count++;
    return count;
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Our Menu</h1>
          <p className="text-gray-600">Choose from our wide variety of authentic biryanis</p>
        </div>

        {/* Filter Toggle for Mobile */}
        <div className="md:hidden mb-4">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="w-full"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters {activeFiltersCount() > 0 && `(${activeFiltersCount()})`}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={cn(
            "md:w-64 space-y-6",
            showFilters ? "block" : "hidden md:block"
          )}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg flex items-center">
                  <SlidersHorizontal className="mr-2 h-5 w-5" />
                  Filters
                </h3>
                {activeFiltersCount() > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-orange-600 hover:text-orange-700"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {['all', 'veg', 'non-veg'].map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filters.category === category}
                        onChange={(e) => setFilters({ ...filters, category: e.target.value as FilterOptions['category'] })}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="capitalize">
                        {category === 'all' ? 'All Items' : category === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange.label === range.label}
                        onChange={() => setSelectedPriceRange(range)}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Spice Level Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Spice Level</h4>
                <div className="space-y-2">
                  {['all', 'mild', 'medium', 'hot', 'extra-hot'].map((level) => (
                    <label key={level} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="spice"
                        value={level}
                        checked={filters.spiceLevel === level}
                        onChange={(e) => setFilters({ ...filters, spiceLevel: e.target.value as FilterOptions['spiceLevel'] })}
                        className="mr-2 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="capitalize">
                        {level === 'all' ? 'All Levels' : level.replace('-', ' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-medium mb-3">Sort By</h4>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as FilterOptions['sortBy'] })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Menu Items Grid */}
          <div className="flex-1">
            {/* Active Filters Display */}
            {activeFiltersCount() > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {filters.category !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {filters.category === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                    <button
                      onClick={() => setFilters({ ...filters, category: 'all' })}
                      className="ml-2"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {filters.spiceLevel !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {filters.spiceLevel}
                    <button
                      onClick={() => setFilters({ ...filters, spiceLevel: 'all' })}
                      className="ml-2"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {(selectedPriceRange.min > 0 || selectedPriceRange.max < 9999) && (
                  <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {selectedPriceRange.label}
                    <button
                      onClick={() => setSelectedPriceRange(priceRanges[0])}
                      className="ml-2"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4 text-gray-600">
              Showing {items.length} {items.length === 1 ? 'item' : 'items'}
            </div>

            {/* Menu Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                    <div className="h-48 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No items found matching your filters.</p>
                <Button onClick={resetFilters} variant="outline" className="mt-4">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}