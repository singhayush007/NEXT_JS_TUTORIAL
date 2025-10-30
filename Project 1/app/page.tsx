import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-70px)] bg-gradient-to-b from-white to-blue-50 px-6">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">WanderWise</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your ultimate travel companion — explore beautiful destinations,
          discover hidden gems, and plan your perfect trip effortlessly.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer">
          Start Exploring
        </button>
      </div>

      {/* Optional Background Image */}
      <div className="mt-10">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Travel Beach"
          width={800}
          height={400}
          className=" w-screen shadow-lg"
        />
      </div>
    </section>
  );
};

export default Page;
