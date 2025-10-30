import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        🌍 About WanderWise
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-blue-600">WanderWise</span> — your ultimate travel companion for discovering
          the world’s most beautiful destinations. We help travelers like you
          find breathtaking places, plan seamless trips, and explore new
          cultures with ease.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Whether you’re planning a luxurious vacation, an adventurous backpacking
          trip, or a short weekend getaway, WanderWise provides curated guides,
          travel tips, and real experiences to make your journey unforgettable.
        </p>

        <p className="text-lg leading-relaxed">
          Our mission is simple: <span className="font-semibold">to inspire exploration and make travel accessible to everyone.</span>
          Join thousands of explorers who trust WanderWise to plan their dream
          adventures around the globe.
        </p>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            ✈️ Crafted with ❤️ by the WanderWise Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
