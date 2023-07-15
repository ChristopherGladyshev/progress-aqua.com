import React, { useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bloom from '../../img/1.jpg'
import pollution from '../../img/2.jpeg'
import fish from '../../img/3.jpg'
import reduction from '../../img/4.jpg'

import './Dashboard.scss'
import { DiagramConfig } from './config/diagram.config';

const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const menuEl = useRef<HTMLDivElement>(null);



  return (
    <div className='Dashboard'>
      <div className="container">
        <div className='Dashboard__item'>
          <div ref={menuEl}>
            <Doughnut data={DiagramConfig} />
          </div>
          <div ref={menuEl}>
            <Doughnut data={DiagramConfig} />
          </div>
          <div ref={menuEl}>
            <Doughnut data={DiagramConfig} />
          </div>
        </div>
        <div className='Dashboard__item'>
          <div className='swiper'>
            {/* <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className='home-card'>
                  <p className='home-card__title'>algal bloom</p>
                  <img className='home__img' src={bloom} alt="bloom" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='home-card'>
                  <p className='home-card__title'>aquatic pollution</p>
                  <img className='home__img' src={reduction} alt="pollution" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='home-card'>
                  <p className='home-card__title'>fish die-off</p>
                  <img className='home__img' src={pollution} alt="die-off" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='home-card'>
                  <p className='home-card__title'>death and reduction of the waterfowl population</p>
                  <img className='home__img' src={fish} alt="waterfowl" />
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>
          <div className='swiper'>
            {/* <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className='home-card'>
                  <p className='home-card__title'>algal bloom</p>
                  <img className='home__img' src={bloom} alt="bloom" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='home-card'>
                  <p className='home-card__title'>aquatic pollution</p>
                  <img className='home__img' src={reduction} alt="pollution" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='home-card'>
                  <p className='home-card__title'>fish die-off</p>
                  <img className='home__img' src={pollution} alt="die-off" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='home-card'>
                  <p className='home-card__title'>death and reduction of the waterfowl population</p>
                  <img className='home__img' src={fish} alt="waterfowl" />
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
