import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import Style from "../css/SliderSwiper1.module.css"
import { Grid,Navigation} from 'swiper/modules';

const SliderSwiper1 = () => {
  return (
        <div className={Style.divSliderSwiperParent}>
      <Swiper
        slidesPerView={7}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
            navigation={true}
        modules={[Grid,Navigation]}
        className={Style.mySwiper}
      >
        <SwiperSlide><img src="src/assets/Biryani.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="src/assets/Cake.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="src/assets/Chole Bhature.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="src/assets/Coffee.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kachori.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Juice.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Omelette.png" height="190px" width="300px"></img></SwiperSlide>
        
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pakoda.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poha.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Upma.png" height="190px" width="300px"></img></SwiperSlide>
        <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png" height="190px" width="300px"></img></SwiperSlide>

      </Swiper>
    </div>
  )
}

export default SliderSwiper1