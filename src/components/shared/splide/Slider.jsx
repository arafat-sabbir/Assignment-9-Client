import { Splide } from "@splidejs/react-splide";
import { forwardRef } from "react";

import "@splidejs/react-splide/css/core";

const Slider = forwardRef(({ children, options, hasTrack, ...props }, ref) => {
  return (
    <Splide ref={ref} options={{ ...options, autoplay: true }} hasTrack={hasTrack} {...props}>
      {children}
    </Splide>
  );
});

Slider.displayName = "Slider";

export default Slider;
