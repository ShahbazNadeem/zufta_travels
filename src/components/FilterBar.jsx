'use client';

import React, { useState } from 'react';
import TourCards from './TourCards';
import { byAirTourPickup as allTours } from '@/jsonData/Data';

const FilterBar = () => {
  const [filteredTours, setFilteredTours] = useState(allTours);
  const [sortByPrice, setSortByPrice] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPlace, setFilterPlace] = useState('');

  const priceOptions = ['Low to High', 'High to Low'];
  const categoryOptions = ['Private', 'Corporate', 'By Air'];
  const placeOptions = ['Naran', 'Hunza', 'Swat', 'Neelam'];

  const handlePriceSort = (option) => {
    setSortByPrice(option);
    const sorted = [...filteredTours].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/,/g, ''));
      const priceB = parseInt(b.price.replace(/,/g, ''));
      return option === 'Low to High' ? priceA - priceB : priceB - priceA;
    });
    setFilteredTours(sorted);
  };

  const handleCategoryFilter = (category) => {
    setFilterCategory(category);
    // You can filter by some category property if available
    // Here we just reset to original for demo
    setFilteredTours(allTours); // Adjust based on actual data
  };

  const handlePlaceFilter = (place) => {
    setFilterPlace(place);
    const filtered = allTours.filter((tour) =>
      tour.title.toLowerCase().includes(place.toLowerCase())
    );
    setFilteredTours(filtered);
  };

  return (
    <div className="container px-4 py-6">
      <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-700">
        {/* Sort by Price */}
        <div className="relative group cursor-pointer">
          <span className="border-b-2 border-blue-900">Sort by price</span>
          <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg rounded z-10">
            {priceOptions.map((option, i) => (
              <div
                key={i}
                onClick={() => handlePriceSort(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="relative group cursor-pointer">
          <span className="border-b-2 border-transparent hover:border-blue-900">Sort by categories</span>
          <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg rounded z-10">
            {categoryOptions.map((option, i) => (
              <div
                key={i}
                onClick={() => handleCategoryFilter(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews (static, not wired up here) */}
        <div className="relative group cursor-pointer">
          <span className="border-b-2 border-transparent hover:border-blue-900">Sort by reviews</span>
          <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg rounded z-10">
            <div className="px-4 py-2 text-gray-400">Coming soon</div>
          </div>
        </div>

        {/* Places Filter */}
        <div className="relative group cursor-pointer">
          <span className="border-b-2 border-transparent hover:border-blue-900">Sort by places</span>
          <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg rounded z-10">
            {placeOptions.map((option, i) => (
              <div
                key={i}
                onClick={() => handlePlaceFilter(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Cards Rendered */}
      <div className="mt-8">
        <TourCards data={filteredTours} />
      </div>
    </div>
  );
};

export default FilterBar;
