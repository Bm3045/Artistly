import HeroSection from './components/HeroSection';
import ArtistCategoryCards from './components/ArtistCategoryCards';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
        <ArtistCategoryCards />
      </div>
    </>
  );
}