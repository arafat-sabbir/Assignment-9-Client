import React from "react";

const fakeProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "Experience high-quality sound with noise-cancellation technology.",
    price: 99.99,
    discount: 20,
    inventory: 50,
    images: [
      "https://via.placeholder.com/300x200?text=Product+1+Image+1",
      "https://via.placeholder.com/300x200?text=Product+1+Image+2",
    ],
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    description: "Lightweight and durable running shoes for all terrains.",
    price: 79.99,
    discount: 15,
    inventory: 100,
    images: [
      "https://via.placeholder.com/300x200?text=Product+2+Image+1",
      "https://via.placeholder.com/300x200?text=Product+2+Image+2",
    ],
    category: "Footwear",
  },
];

const LatestProduct = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fakeProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <div className="overflow-hidden h-48">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product.name}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 truncate">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-red-500">
                    ${" "}
                    {(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  {product.discount > 0 && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
