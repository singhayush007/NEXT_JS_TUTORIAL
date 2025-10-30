import Image from "next/image";
import React from "react";

const destinations = [
  {
    name: "Dubai",
    country: "UAE",
    price: "$1,200",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=387",
  },
  {
    name: "Paris",
    country: "France",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    name: "New York",
    country: "USA",
    price: "$1,500",
    image:
      "https://images.unsplash.com/photo-1548182880-8b7b2af2caa2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870",
  },
  {
    name: "Delhi",
    country: "India",
    price: "$700",
    image:
      "https://images.unsplash.com/photo-1678966432189-d58296e45ad2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=327",
  },
  {
    name: "Tokyo",
    country: "Japan",
    price: "$2,000",
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c",
  },
  {
    name: "London",
    country: "UK",
    price: "$1,600",
    image:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=871",
  },
  {
    name: "Rome",
    country: "Italy",
    price: "$1,400",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=876",
  },
  {
    name: "Bali",
    country: "Indonesia",
    price: "$1,000",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870",
  },
  {
    name: "Sydney",
    country: "Australia",
    price: "$1,900",
    image:
      "https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    price: "$1,300",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    name: "Singapore",
    country: "Singapore",
    price: "$1,700",
    image:
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=870",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    price: "$1,100",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
  },
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        🌍 Top Travel Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((city, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={city.image}
              alt={city.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold">{city.name}</h2>
              <p className="text-gray-500">{city.country}</p>
              <p className="mt-2 text-lg font-medium text-blue-600">
                Average Cost: {city.price}
              </p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
