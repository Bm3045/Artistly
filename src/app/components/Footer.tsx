export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-500">
          © 2025 Artistly. All rights reserved.
        </div>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="text-gray-500 hover:text-indigo-600">Terms</a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}