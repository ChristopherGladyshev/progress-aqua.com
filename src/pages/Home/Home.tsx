import React from 'react';

import './Home.scss';
import 'swiper/scss'

import river from '../../img/slides/river.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__slede">
        <div className="home__slide__wrapper">
          <div className="home__slide__filter"></div>
          <img className='home__slide__background' src={river} alt="river" />
        </div>
        <h1 className='home__tetle'>Центр Прогрессивной Aквакультуры <br />
          современный подход к биологической очистке воды
        </h1>
      </div>
    </div>
  )
}

export default Home;
