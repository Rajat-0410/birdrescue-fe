'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [birdInfo, setBirdInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        // Here you would typically make an API call to identify the bird
        setLoading(true);
        // Simulating API call delay
        setTimeout(() => {
          setBirdInfo({
            species: "Common Sparrow",
            scientificName: "Passer domesticus",
            commonIssues: [
              "Wing injuries",
              "Dehydration",
              "Malnutrition"
            ],
            immediateActions: [
              "Keep in a quiet, warm place",
              "Avoid handling unnecessarily",
              "Do not attempt to feed"
            ]
          });
          setLoading(false);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Emergency Banner */}
      <div className="bg-red-500 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-semibold">Emergency Bird Rescue Hotline: +1 (555) 123-4567</span>
          </div>
          <button className="bg-white text-red-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-50 transition-colors duration-200">
            Call Now
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Report an Injured Bird</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location Found
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Bird Information</h2>
            
            {/* Image Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Bird Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Preview and Bird Info */}
            {selectedImage && (
              <div className="mb-6">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={selectedImage}
                    alt="Uploaded bird"
                    fill
                    className="object-cover"
                  />
                </div>
                {loading ? (
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-green-500 border-t-transparent"></div>
                    <p className="mt-2 text-gray-600">Analyzing image...</p>
                  </div>
                ) : birdInfo && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Identified Bird:</h3>
                    <p className="text-gray-700"><span className="font-medium">Species:</span> {birdInfo.species}</p>
                    <p className="text-gray-700"><span className="font-medium">Scientific Name:</span> {birdInfo.scientificName}</p>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-800 mb-2">Common Issues:</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {birdInfo.commonIssues.map((issue: string, index: number) => (
                          <li key={index}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-800 mb-2">Immediate Actions:</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        {birdInfo.immediateActions.map((action: string, index: number) => (
                          <li key={index}>{action}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Additional Details */}
            <div className="space-y-6">
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
                  Bird's Condition
                </label>
                <select
                  id="condition"
                  name="condition"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option>Injured</option>
                  <option>Sick</option>
                  <option>Orphaned</option>
                  <option>Not Sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Detailed Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Please describe the bird's condition, behavior, and any visible injuries..."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="time-found" className="block text-sm font-medium text-gray-700">
                  When was the bird found?
                </label>
                <input
                  type="datetime-local"
                  id="time-found"
                  name="time-found"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              Submit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 