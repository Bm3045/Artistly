'use client';

import { useState } from 'react';
import ArtistCard from '../components/ArtistCard';
import FilterBlock from '../components/FilterBlock';
import { mockArtists } from '../data/mockArtists';

const categories = ['Singer', 'Dancer', 'Speaker', 'DJ', 'Comedian'];
const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad'];
const priceRanges = ['< ₹5K', '₹5K–₹10K', '₹10K–₹25K', '> ₹25K'];

export default function ArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const filteredArtists = mockArtists.filter(artist => {
    return (
      (selectedCategory === '' || artist.category.includes(selectedCategory)) &&
      (selectedLocation === '' || artist.city === selectedLocation) &&
      (selectedPrice === '' || artist.fee === selectedPrice)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Artists</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <FilterBlock 
              title="Category" 
              options={categories} 
              selected={selectedCategory} 
              onSelect={setSelectedCategory} 
            />
            <FilterBlock 
              title="Location" 
              options={locations} 
              selected={selectedLocation} 
              onSelect={setSelectedLocation} 
            />
            <FilterBlock 
              title="Price Range" 
              options={priceRanges} 
              selected={selectedPrice} 
              onSelect={setSelectedPrice} 
            />
          </div>
        </div>
        
        <div className="lg:col-span-3">
          {filteredArtists.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-gray-500">No artists found matching your filters.</p>
              <button 
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedLocation('');
                  setSelectedPrice('');
                }}
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtists.map(artist => (
                <ArtistCard
                  key={artist.id}
                  name={artist.name}
                  category={artist.category.join(', ')}
                  priceRange={artist.fee}
                  location={artist.city}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}