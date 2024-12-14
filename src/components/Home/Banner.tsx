const Banner = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] bg-gray-200">
      {/* Banner Image */}
      <img
        src="https://via.placeholder.com/1500x500?text=Banner+Image" // Dummy image
        alt="Banner"
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 px-4 py-4 sm:px-8 sm:py-8 text-center">
        <div className="text-white space-y-4 max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-semibold">
            Shop the Best Deals on Our Products
          </h1>
          <p className="text-lg sm:text-xl">
            Discover great discounts, limited-time offers, and exclusive deals just for you.
          </p>
          <a
            href="#shop-now"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
