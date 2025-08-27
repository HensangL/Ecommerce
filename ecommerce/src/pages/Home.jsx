import React from "react";
import { Link } from "react-router-dom";
import Shop from "../pages/Shop";
import { Products } from "../components/Products";


function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className=" mt-20 bg-gradient-to-r from-pink-100 via-white to-pink-50 py-16">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-pink-600 font-semibold uppercase tracking-wide mb-4">
              New Season Drop
            </p>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Shop the Latest <br /> Fashion Trends
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-lg">
              Upgrade your wardrobe with our premium collection. Stylish,
              affordable, and delivered fast across Nepal.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/shop">
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300">
                  Shop Now →
                </button>
              </Link>
              <button className="px-6 py-3 border border-pink-500 text-pink-600 font-semibold rounded-full hover:bg-pink-100 transition duration-300">
                View Categories
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2749.jpg"
                alt="Fashion"
                className="rounded-2xl shadow-xl w-[380px] lg:w-[500px] object-cover"
              />
              <span className="absolute top-4 right-4 bg-white text-pink-600 font-bold px-4 py-2 rounded-lg shadow-md">
                Sale 30% OFF
              </span>
              <span className="absolute bottom-4 left-4 bg-white text-gray-700 font-medium px-4 py-2 rounded-full shadow-md">
                Trending Now
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Women", img: "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2749.jpg" },
            { title: "Men", img: "https://img.freepik.com/free-photo/young-handsome-man-posing_144627-22553.jpg" },
            { title: "Accessories", img: "https://img.freepik.com/free-photo/still-life-fashion-photography_23-2149303796.jpg" },
            { title: "Shoes", img: "https://img.freepik.com/free-photo/stylish-shoes-isolated_23-2147694244.jpg" },
          ].map((cat, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-white text-xl font-bold">{cat.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <button className="text-pink-600 font-medium hover:underline">
            View All →
          </button>
        </div>
                <Shop products={Products} />

      </section>
    </>
  );
}

export default Home;
