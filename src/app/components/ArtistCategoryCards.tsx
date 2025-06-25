import Link from "next/link";

const categories = [
  { name: "Singers", image: "🎤", count: 42 },
  { name: "Dancers", image: "💃", count: 28 },
  { name: "Speakers", image: "🎙️", count: 35 },
  { name: "DJs", image: "🎧", count: 19 },
  { name: "Comedians", image: "😂", count: 15 },
];

export default function ArtistCategoryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {categories.map((cat) => (
        <Link 
          href="/artists" 
          key={cat.name}
          className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform hover:scale-105 cursor-pointer"
        >
          <div className="text-5xl mb-3">{cat.image}</div>
          <h3 className="text-lg font-semibold mb-1">{cat.name}</h3>
          <p className="text-gray-500 text-sm">{cat.count} artists</p>
        </Link>
      ))}
    </div>
  );
}