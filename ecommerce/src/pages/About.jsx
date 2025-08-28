import React from 'react';
import '../components/Css/About.css';

function About() {
  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">

      {/* --- Main Header Section --- */}
      <header className="py-20 text-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto transition ease-in-out duration-100 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Every brand has a beginning, and ours started with a simple idea: to make style and comfort accessible to everyone.
          </p>
        </div>
      </header>

      {/* --- Our Story Section --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 animate-slideInLeft">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-900">
              Our Story
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Our journey began in 2023 with a small team and a shared passion for creating products that blend modern design with exceptional quality. We noticed a gap in the market for items that were not only beautiful but also built to last. Our goal became to fill that void by focusing on meticulous craftsmanship, sustainable materials, and a deep understanding of what our customers truly need.
            </p>
            <p className="text-lg text-gray-700">
              Today, we're proud to be a brand that puts you first. From the initial design to the moment your package arrives, we handle every step with care, ensuring a seamless and delightful shopping experience. Thank you for being a part of our story.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 animate-slideInRight">
            <img
              src="https://img.freepik.com/free-photo/stylish-shoes-isolated_23-2147694244.jpg"
              alt="Stylish Shoes"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* --- Our Values Section --- */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-12 text-gray-900 animate-fadeIn">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slideInUp">
              <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We are committed to creating products that stand the test of time. We use premium materials and pay close attention to every detail.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slideInUp">
              <h3 className="text-xl font-bold mb-2">Customer-Centric Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of our brand. We listen to your feedback and strive to exceed your expectations in every interaction.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slideInUp">
              <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">
                We believe in building a brand that's not only good for you but also for the planet. We're dedicated to sourcing ethically.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slideInUp">
              <h3 className="text-xl font-bold mb-2">Seamless Experience</h3>
              <p className="text-gray-600">
                We believe shopping should be easy and enjoyable. Our goal is to provide a clean, simple website, fast shipping, and a hassle-free return process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Founder Quote Section --- */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative max-w-4xl mx-auto text-center z-10 p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 animate-fadeIn">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Founder - John Doe"
            className="w-36 h-36 mx-auto rounded-full object-cover mb-8 border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out animate-slideInUp"
          />
          <p className="text-3xl sm:text-4xl italic font-serif text-white mb-6 leading-relaxed">
            "Our brand is built on passion, dedication, and the desire to make a difference. Every product we create carries our commitment to quality and style."
          </p>
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">
            John Doe, Founder
          </h3>
        </div>
      </section>

      {/* --- Our Mission Section --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gray-100">
        <div className="max-w-4xl mx-auto animate-slideInUp">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-900">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Our mission is to empower you to feel confident and comfortable in your own skin. We're committed to delivering exceptional products and outstanding service.
          </p>
          <button className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-md">
            Shop Our Collection
          </button>
        </div>
      </section>

    </div>
  );
}

export default About;
