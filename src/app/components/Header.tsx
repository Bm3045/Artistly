import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-10">
      <Link href="/">
        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">Artistly</h1>
      </Link>
      <nav className="space-x-4 text-gray-600">
        <Link href="/" className="hover:text-indigo-500">Home</Link>
        <Link href="/artists" className="hover:text-indigo-500">Artists</Link>
        <Link href="/onboarding" className="hover:text-indigo-500">Onboard Artist</Link>
        <Link href="/dashboard" className="hover:text-indigo-500">Dashboard</Link>
      </nav>
    </header>
  );
}