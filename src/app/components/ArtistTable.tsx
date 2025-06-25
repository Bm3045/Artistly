import React from "react";

interface Artist {
  id: string;
  name: string;
  category: string[];
  city: string;
  fee: string;
}

interface ArtistTableProps {
  data: Artist[];
  onAction: (id: string) => void;
}

export default function ArtistTable({ data, onAction }: ArtistTableProps) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No artist submissions available.</p>
        <button 
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={() => onAction('new')}
        >
          Add New Artist
        </button>
      </div>
    );
  }

  return (
    <table className="artist-table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>City</th>
          <th>Fee</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((artist) => (
          <tr key={artist.id} className="hover:bg-gray-50">
            <td className="py-3">{artist.name}</td>
            <td className="py-3">{artist.category.join(", ")}</td>
            <td className="py-3">{artist.city}</td>
            <td className="py-3">{artist.fee}</td>
            <td className="py-3">
              <button 
                className="text-indigo-600 hover:text-indigo-800 font-medium"
                onClick={() => onAction(artist.id)}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}