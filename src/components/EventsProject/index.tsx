import React, { useRef, useState } from "react";
import { InfosComponent, MainWraper, CustomSwiperButton } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CardsComponents: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const experienceInFazenda = [
    { id: 0, name: "1" },
    { id: 1, name: "2" },
    { id: 2, name: "3" },
    { id: 3, name: "4" },
    { id: 4, name: "5" },
    { id: 5, name: "6" },
    { id: 6, name: "7" },
    { id: 7, name: "8" },
    { id: 8, name: "9" },
  ];

  return (
    <MainWraper>
      <Swiper
        modules={[Pagination, Navigation, FreeMode]}
        spaceBetween={100}
        slidesPerView={3}
        slidesPerGroup={3}
        freeMode={true}
        speed={50}
        centeredSlides={false}
        pagination={{ clickable: true }}
        loop={false}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="swiper"
      >
        {experienceInFazenda.map((item) => (
          <SwiperSlide key={item.id}>
            <InfosComponent>
              <h1>{item.name}</h1>
            </InfosComponent>
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomSwiperButton
        verifbullet={isBeginning ? 1 : 0}
        className="custom-prev"
        onClick={() => {
          swiperInstance.slidePrev();
        }}
      >
        <svg
          fill="#ffffff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 199.404 199.404"
          xmlSpace="preserve"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              {" "}
              <polygon points="135.412,0 35.709,99.702 135.412,199.404 163.695,171.119 92.277,99.702 163.695,28.285 "></polygon>{" "}
            </g>{" "}
          </g>
        </svg>
      </CustomSwiperButton>
      <CustomSwiperButton
        verifbullet={isEnd ? 1 : 0}
        className="custom-next swiper-button-disabled"
        onClick={() => {
          swiperInstance.slideNext();
        }}
      >
        <svg
          fill="#ffffff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 199.404 199.404"
          xmlSpace="preserve"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              {" "}
              <polygon points="135.412,0 35.709,99.702 135.412,199.404 163.695,171.119 92.277,99.702 163.695,28.285 "></polygon>{" "}
            </g>{" "}
          </g>
        </svg>
      </CustomSwiperButton>
    </MainWraper>
  );
};
