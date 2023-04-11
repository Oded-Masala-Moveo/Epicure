import React from "react";
import "swiper/swiper.min.css";
import "./carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../../components";
import useWindowSize from "../../hooks/useWindowSize";
import { CardsList } from "../../models/index.model";

const Carousel: React.FC<{ cards: CardsList; weekChef: boolean }> = ({
  cards,
  weekChef,
}) => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="carousel-container">
        <div>
          <Swiper
            spaceBetween={24}
            slidesPerView={width && width > 650 ? 3 : 1.5}
            // centeredSlides={true}
            autoplay={{ delay: 3000 }}
          >
            {cards &&
              cards.length > 0 &&
              cards.map((cardItem, index) => (
                <SwiperSlide key={`${cardItem.name} ${cardItem.id} ${index}`}>
                  <Card key={cardItem.name} card={cardItem} week={weekChef} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel;
