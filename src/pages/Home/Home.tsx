import React from 'react';

import './Home.scss';
import 'swiper/scss'

import river from '../../img/slides/river.png'
import after from '../../img/slides/after.png'
import before from '../../img/slides/before.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__slide">
        <div className="home__slide__wrapper">
          <div className="home__slide__filter"></div>
          <img className='home__slide__background' src={river} alt="river" />
        </div>
        <h1 className='home__tetle'>Центр Прогрессивной Aквакультуры <br />
          современный подход к биологической очистке воды
        </h1>
      </div>
      <div className="home__slide">
        <div className="home__slide__wrapper">
          {/* <div className="home__slide__filter"></div> */}
          <img className='home__slide__background' src={before} alt="river" />
        </div>
        <h1 className='home__tetle'>Цианобактерии или сине-зелёные водоросли <br />
          при массовом цветении вызывают гибель многих гидробионтов. <br />
          У человека они вызывают раздражение кожи, слизистой глаз, носа,<br />
          поэтому купание в «цветущем» водоеме может быть опасно
        </h1>
        <p className='home__slide__description'>Фото водоема до приминения технологии биологическойо очистки</p>
      </div>
      <div className="home__slide">
        <div className="home__slide__wrapper">
          {/* <div className="home__slide__filter"></div> */}
          <img className='home__slide__background' src={after} alt="river" />
        </div>
        <h1 className='home__tetle'>&#171;Центр Прогрессивной Аквакультуры&#187; <br />
          восстанавливает естественный биологический баланс <br />
          очищает воду и многократно увеличивает биопродуктивность водоемов </h1>
        <p className='home__slide__description'>Фото водоема после приминения технологии биологическойо очистки</p>
      </div>
    </div>
  )
}

export default Home;
