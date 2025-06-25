/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import ArtistTable from '../components/ArtistTable';
import { mockArtists } from '../data/mockArtists';

export default function DashboardPage() {
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setArtists(mockArtists);
      setLoading(false);
    }, 1500);
  }, []);

  const handleActionClick = (id: string) => {
    alert(`View details for artist ID: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Manager Dashboard</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ArtistTable data={artists} onAction={handleActionClick} />
        </div>
      )}
    </div>
  );
}