// @ts-ignore 
import "swiper/css";
// @ts-ignore 
import "swiper/css/autoplay";
// @ts-ignore 
import "swiper/css/navigation";
// @ts-ignore 
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Container from "../shared/Container";
import { Link } from "react-router"; // Corrected to 'react-router-dom'
import { StarIcon } from "lucide-react";

const blogPosts = Array.from({ length: 5 }).map((_, index) => ({
  _id: `blog-post-${index + 1}`,
  title: `Blog post ${index + 1}`,
  thumbnail: "https://picsum.photos/200",
  location: "Dhaka, Bangladesh",
  rating: 4.5,
  numberOfReviews: 100,
}));

const PopularCategory = () => {
  return (
    <Container>
      <h1>Hi</h1>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1.5}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {blogPosts.map((blogPost) => (
          <SwiperSlide key={blogPost._id}>
            <div className="group flex flex-col gap-y-4 relative">
              <Link
                to={`/places-in-bd/${blogPost._id}`}
                className="rounded-md flex aspect-[262/320] overflow-hidden relative before:block before:absolute before:pointer-events-none before:-inset-0 before:bg-gradient-to-b before:from-black/0 before:to-black before:z-10"
              >
                <img
                  src={blogPost.thumbnail}
                  alt={blogPost.title}
                  width={262}
                  height={320}
                  className="rounded-t-md w-[262px] h-[320px] object-cover duration-300 group-hover:scale-110 z-0"
                />
              </Link>
              <div className="flex flex-col justify-end gap-y-1 absolute inset-0 px-5 py-4 pointer-events-none z-20">
                <h3 className="text-base lg:text-lg font-medium leading-tight pointer-events-auto">
                  <Link
                    to={`/places-in-bd/${blogPost._id}`}
                    className="text-white duration-300 hover:text-p-900 flex items-center gap-x-2.5 line-clamp-1"
                  >
                    {blogPost.title}
                  </Link>
                </h3>
                <div className="flex gap-x-4 font-medium text-white pointer-events-auto text-xs lg:text-sm">
                  <div className="flex-shrink-0 flex items-center gap-x-1.5">
                    <StarIcon
                      viewBox="0 0 18 17"
                      className="w-3.5 lg:w-[1.125rem] h-3.5 lg:h-[1.125rem] flex-shrink-0 text-[#FFD600]"
                    />
                    <span>{blogPost.rating}</span>
                  </div>
                  <span>
                    ({blogPost.numberOfReviews > 1 ? `${blogPost.numberOfReviews} reviews` : `${blogPost.numberOfReviews} review`})
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-white line-clamp-1 pointer-events-auto">
                  {blogPost.location}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PopularCategory;

