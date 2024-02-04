// Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  
  const slides = []; 

  

  return (
    <Swiper
    // spaceBetween={50}
    slidesPerView={3}
    pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide ><img src={slide1} alt="Slide 1" style={styles.image} /></SwiperSlide>
    <SwiperSlide><img src={slide2} alt="Slide 2" style={styles.image} /></SwiperSlide>
    <SwiperSlide><img src={slide3} alt="Slide 3" style={styles.image} /></SwiperSlide>
    <SwiperSlide><img src={slide1} alt="Slide 4" style={styles.image} /></SwiperSlide>
    <SwiperSlide><img src={slide2} alt="Slide 5" style={styles.image} /></SwiperSlide>
    <SwiperSlide><img src={slide3} alt="Slide 6" style={styles.image} /></SwiperSlide>
    
  </Swiper>
  );
};
const styles = {
    image: {
      width: '100%', 
      height: '190px', 
      objectFit: 'cover'
    }
  };

export default Slider;
