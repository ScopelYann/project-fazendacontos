import React from "react";
import { InfosComponent, MainWraper } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CardsComponents: React.FC = () => {
  const experienceInFazenda = [
    { id: 0, name: "Peças de teatro" },
    { id: 1, name: "Passeio na natureza" },
    { id: 2, name: "Atividades de socialização e recreação" },
    { id: 3, name: "Cinema ao ar livre" },
    { id: 4, name: "Jogos interativos" },
    { id: 5, name: "Música ao vivo" },
  ];

  return (
    <MainWraper>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={100}
        slidesPerView={3}
        slidesPerGroup={1}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
        loop={false}
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
    </MainWraper>
  );
};
