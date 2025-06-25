'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const categories = ['Singer', 'Dancer', 'Speaker', 'DJ', 'Comedian'];
const languages = ['Hindi', 'English', 'Marathi', 'Tamil', 'Telugu', 'Punjabi'];
const fees = ['< ₹5K', '₹5K–₹10K', '₹10K–₹25K', '> ₹25K'];

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required').min(20, 'Bio should be at least 20 characters'),
  category: yup.array().min(1, 'Select at least one category').required(),
  languages: yup.array().min(1, 'Select at least one language').required(),
  fee: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required'),
});

interface ArtistFormData {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  fee: string;
  location: string;
  image?: FileList;
}

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ArtistFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const onSubmit = (data: ArtistFormData) => {
    console.log('Artist Data:', data);
    // In a real app, you would submit to an API here
    alert('Artist submitted successfully!');
    reset();
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input 
            {...register('name')} 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter artist's full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea 
            {...register('bio')} 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Tell us about the artist's background and experience"
          />
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  value={cat} 
                  {...register('category')} 
                  className="h-4 w-4 text-indigo-600 rounded"
                />
                {cat}
              </label>
            ))}
          </div>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Languages Spoken</label>
          <div className="grid grid-cols-2 gap-3">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  value={lang} 
                  {...register('languages')} 
                  className="h-4 w-4 text-indigo-600 rounded"
                />
                {lang}
              </label>
            ))}
          </div>
          {errors.languages && <p className="text-red-500 text-sm mt-1">{errors.languages.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Fee Range</label>
            <select 
              {...register('fee')} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Fee Range</option>
              {fees.map((fee) => (
                <option key={fee} value={fee}>{fee}</option>
              ))}
            </select>
            {errors.fee && <p className="text-red-500 text-sm mt-1">{errors.fee.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Location</label>
            <input 
              {...register('location')} 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="City or region"
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Profile Image (optional)</label>
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <input 
              type="file" 
              {...register('image')} 
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Artist Profile'}
        </button>
      </form>
    </div>
  );
}