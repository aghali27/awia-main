"use client";

import { useRef, useEffect } from "react";

import { register } from "swiper/element/bundle";
register();

export default function AwiaSwiper({ children, attributes }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const props = {
      loop: true,
      // Having issues: Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be >= slidesPerView * 2
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        420: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        750: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    };
    Object.assign(swiperElRef.current, props);
    swiperElRef.current.initialize();
  }, []);

  return (
    <swiper-container ref={swiperElRef} init="false">
      {children}
    </swiper-container>
  );
}
