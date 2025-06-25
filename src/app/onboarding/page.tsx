import ArtistForm from '../components/ArtistForm';


export default function OnboardingPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Artist Onboarding</h1>
          <ArtistForm />
        </div>
      </div>
    </div>
  );
}