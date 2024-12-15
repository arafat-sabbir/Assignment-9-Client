import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import Container from "../shared/Container";

const PopularCategories = () => {
  const categories = [
    {
      title: "Vegetables & Fruits",
      image: "https://picsum.photos/200/300",
      items: [
        "Fresh Fruits",
        "Fresh Vegetables",
        "Frozen Veg",
        "Leafies & Herbs",
        "Mushrooms",
      ],
    },
    {
      title: "Seafood",
      image: "https://picsum.photos/200/300",
      items: ["Fresh Fish", "Fresh Shellfish", "Frozen Fish"],
    },
    {
      title: "Vegan Meat",
      image: "https://picsum.photos/200/300",
      items: ["Bacon", "Beef", "Burgers", "Chicken", "Deli Meat"],
    },
    {
      title: "Dairy",
      image: "https://picsum.photos/200/300",
      items: ["Butter", "Cheese", "Eggs", "Milk & Cream", "Yogurt"],
    },
  ];

  return (
    <Container className="popular-categories">
      <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="p-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img
                src={category.image}
                alt={category.title}
                className="h-40 w-auto rounded-lg mb-4 object-cover"
              />
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <ul className="text-gray-600 text-sm">
                {category.items.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PopularCategories;
