import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/components/pagination/pagination.less';

SwiperCore.use([Pagination]);

const CustomSwiper = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
    >
      {['11111', '22222', '33333'].map((item, index) => (
        <SwiperSlide key={index}>
          <div style={{ backgroundColor: 'red', width: 100, height: 100 }}>
            <span>{item}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
