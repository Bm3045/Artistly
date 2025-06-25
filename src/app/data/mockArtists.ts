export interface Artist {
  id: string;
  name: string;
  category: string[];
  city: string;
  fee: string;
  location: string;
  priceRange: string;
}

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    category: ['Singer'],
    city: 'Mumbai',
    fee: '₹8,000',
    location: 'Mumbai, India',
    priceRange: '₹5K–₹10K'
  },
  {
    id: '2',
    name: 'Raj Kapoor',
    category: ['Dancer'],
    city: 'Delhi',
    fee: '₹15,000',
    location: 'Delhi, India',
    priceRange: '₹10K–₹25K'
  },
  {
    id: '3',
    name: 'Ananya Singh',
    category: ['Speaker', 'Comedian'],
    city: 'Bangalore',
    fee: '₹30,000',
    location: 'Bangalore, India',
    priceRange: '> ₹25K'
  },
  {
    id: '4',
    name: 'Vikram Patel',
    category: ['DJ'],
    city: 'Goa',
    fee: '₹20,000',
    location: 'Goa, India',
    priceRange: '₹10K–₹25K'
  },
  {
    id: '5',
    name: 'Meera Desai',
    category: ['Dancer'],
    city: 'Chennai',
    fee: '₹12,000',
    location: 'Chennai, India',
    priceRange: '₹10K–₹25K'
  },
  {
    id: '6',
    name: 'Arjun Menon',
    category: ['Singer', 'Comedian'],
    city: 'Kochi',
    fee: '₹18,000',
    location: 'Kochi, India',
    priceRange: '₹10K–₹25K'
  },
  {
    id: '7',
    name: 'Sneha Reddy',
    category: ['Speaker'],
    city: 'Hyderabad',
    fee: '₹25,000',
    location: 'Hyderabad, India',
    priceRange: '> ₹25K'
  },
  {
    id: '8',
    name: 'Rahul Verma',
    category: ['Comedian'],
    city: 'Pune',
    fee: '₹7,000',
    location: 'Pune, India',
    priceRange: '₹5K–₹10K'
  },
];