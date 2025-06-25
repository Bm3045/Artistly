'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Talented Artists</h1>
        <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
          Book singers, dancers, speakers and more for your events with our curated platform
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/artists">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
              Explore Artists
            </button>
          </Link>
          <Link href="/onboarding">
            <button className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition shadow-md">
              Register as Artist
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}