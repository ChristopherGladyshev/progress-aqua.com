import React, { useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { temperature } from './mock';
import { Doughnut } from 'react-chartjs-2';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bloom from '../../img/1.jpg'
import pollution from '../../img/2.jpeg'
import fish from '../../img/3.jpg'
import reduction from '../../img/4.jpg'

import './Dashboard.scss'
import { DiagramConfig } from './config/diagram.config';
import { faker } from '@faker-js/faker';

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};


export const data = {
  labels: temperature.map((item: any) => item.date),
  datasets: [
    {
      label: 'Температура воды °C',
      data: temperature.map(() => faker.datatype.number({ min: 0, max: 40 })),
      borderColor: 'rgb(29,53,87)',
      backgroundColor: 'rgba(241,250,238)',
    },
  ],
};

export const phData = {
  labels: temperature.map((item: any) => item.date),
  datasets: [
    {
      label: 'Кислотность pH',
      data: temperature.map(() => faker.datatype.number({ min: 3, max: 12 })),
      borderColor: 'rgb(29,53,87)',
      backgroundColor: 'rgba(241,250,238)',
    },
  ],
};


export const ppmData = {
  labels: temperature.map((item: any) => item.date),
  datasets: [
    {
      label: 'Cолесодержание ppm',
      data: temperature.map(() => faker.datatype.number({ min: 100, max: 10000 })),
      borderColor: 'rgb(29,53,87)',
      backgroundColor: 'rgba(241,250,238)',
    },
  ],
};

export const ehData = {
  labels: temperature.map((item: any) => item.date),
  datasets: [
    {
      label: 'Окислительно-восстановительный потенциал',
      data: temperature.map(() => faker.datatype.number({ min: -300, max: 300 })),
      borderColor: 'rgb(29,53,87)',
      backgroundColor: 'rgba(241,250,238)',
    },
  ],
};


console.log(data);


const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const menuEl = useRef<HTMLDivElement>(null);



  return (
    <div className='Dashboard'>
      <div className="container">
        <div className='Dashboard__item'>
          <div className='Dashboard__line'>
            <Line
              options={options}
              data={data}
            />
          </div>
          {/* <div ref={menuEl}>
            <Doughnut data={DiagramConfig} />
          </div> */}
          <div className='Dashboard__line'>
            <Line
              options={options}
              data={phData}
            />
          </div>
        </div>

        <div className='Dashboard__item'>
          <div className='Dashboard__line'>
            <Line
              options={options}
              data={ppmData}
            />
          </div>
          {/* <div ref={menuEl}>
            <Doughnut data={DiagramConfig} />
          </div> */}
          <div className='Dashboard__line'>
            <Line
              options={options}
              data={ehData}
            />
          </div>
        </div>

        <div className='Dashboard__item'>
          <div className='Dashboard__line'>
            <Line
              options={options}
              data={ehData}
            />
          </div>
          {/* <div ref={menuEl}>
            <Doughnut data={DiagramConfig} />
          </div> */}
          <div className='Dashboard__line'>
            <Line
              options={options}
              data={phData}
            />
          </div>
        </div>


        {/* <div className='Dashboard__item'>
          <div className='swiper'>
            <Swiper
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
            </Swiper>
          </div>
          <div className='swiper'>
             <Swiper
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
            </Swiper>
          </div>

        </div> */}
      </div>
    </div>
  )
}

export default Dashboard
