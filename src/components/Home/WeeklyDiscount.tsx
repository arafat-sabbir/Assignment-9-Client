"use client";

import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Container from "../shared/Container";
import Slider from "../shared/splide/Slider";
import { Link } from "react-router";
import { StarIcon } from "lucide-react";
const blogPosts = Array.from({ length: 5 }).map((_, index) => ({
  _id: `blog-post-${index + 1}`,
  title: `Blog post ${index + 1}`,
  thumbnail: "https://picsum.photos/200",
  location: "Dhaka, Bangladesh",
  rating: 4.5,
  numberOfReviews: 100,
}));

const options = {
  type: "loop",
  perPage: 1.5,
  perMove: 1,
  autoplay: true,
  gap: 16,
  arrows: false,
  pagination: false,
  mediaQuery: "min",
  breakpoints: {
    640: {
      perPage: 2.5,
    },
    768: {
      perPage: 3.5,
    },
    1024: {
      perPage: 4,
      arrows: true,
      autoplay: true,
      interval: 3000,
      speed: 1000,
    },
    1280: {
      gap: 32,
    },
  },
};

const WeeklyDiscount = () => {
  return (
    <Container>
      <h1>Hi</h1>
      <Slider hasTrack={false} options={options}>
        <SplideTrack>
          {blogPosts.map((blogPost, index) => (
            <SplideSlide key={blogPost._id}>
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
                    className="rounded-t-md w-[262px] h-[320px] object-coverduration-300 group-hover:scale-110 z-0"
                  />
                </Link>
                <div className="flex flex-col justify-end gap-y-1 absolute inset-0 px-5 py-4 pointer-events-none z-20">
                  <h3 className="text-base lg:text-lg font-medium leading-tight pointer-events-auto">
                    <Link
                      to={`/places-in-bd/${blogPost._id}`}
                      className="text-white duration-300 hover:text-p-900 flex blogPosts-center gap-x-2.5 line-clamp-1"
                    >
                      {blogPost.title}
                    </Link>
                  </h3>
                  <div className="flex gap-x-4 font-medium text-white pointer-events-auto text-xs lg:text-sm">
                    <div className="flex-shrink-0 flex blogPosts-center gap-x-1.5">
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
            </SplideSlide>
          ))}
        </SplideTrack>
      </Slider>
    </Container>
  );
};

export default WeeklyDiscount;
