interface ArtistCardProps {
  name: string;
  category: string;
  priceRange: string;
  location: string;
}

export default function ArtistCard({ name, category, priceRange, location }: ArtistCardProps) {
  return (
    <div className="border rounded-lg p-5 shadow hover:shadow-lg transition-all bg-white h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-between text-sm mb-3">
          <div>
            <span className="font-medium">Location: </span>
            {location}
          </div>
          <div>
            <span className="font-medium">Price: </span>
            <span className="text-indigo-600">{priceRange}</span>
          </div>
        </div>
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}