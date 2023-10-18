import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { fetchLogout } from '../../store/registration/userSlice';
import { useNavigate } from 'react-router-dom';
import './Menu.scss'
// import logo from '../../img/logo.png'
import { ReactComponent as HomeSvg } from '../../img/nav/home.svg'
import { ReactComponent as DiversitySvg } from '../../img/nav/diversity.svg'
import { ReactComponent as ContactsSvg } from '../../img/nav/contacts.svg'
import { ReactComponent as LoginSvg } from '../../img/nav/login.svg'
import { ReactComponent as Dashboard } from '../../img/nav/dashboard.svg'


const Menu = () => {
  const isAuth = useAppSelector(state => state.user.isAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const menuEl = useRef<HTMLDivElement>(null);
  const [isActiveLogo, setIsActiveLogo] = useState<boolean>(false);
  let nav;

  const logoutFetch = async () => {
    const data = await dispatch(fetchLogout({ email: '', password: '' }));
    if (data.meta.requestStatus !== 'rejected') navigate('/dashboard')

  }

  const navHendler = (event: React.MouseEvent<HTMLElement>): void => {
    const target = event.target as Element;
    if (target.classList.contains('menu__img')) return;
    setIsActiveLogo(!isActiveLogo);
    menuEl.current?.classList.toggle('menu--active');
  }

  if (isAuth) {
    nav = (
      <>
        <ul className='menu__link-wrapper'>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/'}>
              <HomeSvg className='menu__img' title='ГЛАВНАЯ' />
              <span className='menu__item-text' title='ГЛАВНАЯ'>ГЛАВНАЯ</span>
            </Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/profile'}>
              <span className='menu__item-text' title='ПРОФИЛЬ'>ПРОФИЛЬ</span>
            </Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/dashboard'}>
              <Dashboard className='menu__img' title='DASHBOARD' />
              <span className='menu__item-text' title='DASHBOARD'>DASHBOARD</span>
            </Link>
          </li>
        </ul>
        <ul className='menu__link-wrapper'>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/notifications'}>
            <span className='menu__item-text' title='УВЕДОМЛЕНИЯ'>УВЕДОМЛЕНИЯ</span>
            </Link></li>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/settings'}>
              <span className='menu__item-text'>НАСТРОЙКИ</span>
            </Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__item-link' onClick={() => logoutFetch()} to={'/'}>
              <span className='menu__item-text' title='ВЫЙТИ'>ВЫЙТИ</span>
            </Link>
          </li>
        </ul>
      </>
    )
  } else {
    nav = (
      <>
        <ul className='menu__link-wrapper'>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/'}>
              <HomeSvg className='menu__img' title='ГЛАВНАЯ' />
              <span className='menu__item-text' title='ГЛАВНАЯ'>ГЛАВНАЯ</span>
            </Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/about-us'}>
              <DiversitySvg className='menu__img' title='О НАС' />
              <span className='menu__item-text' title='О НАС'>О НАС</span>
            </Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/contacts'}>
              <ContactsSvg className='menu__img' title='КОНТАКТЫ' />
              <span className='menu__item-text' title='КОНТАКТЫ'>КОНТАКТЫ</span>
            </Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__item-link' to={'/login'}>
              <LoginSvg className='menu__img' title='ВОЙТИ' />
              <span className='menu__item-text' title='ВОЙТИ'>ВОЙТИ</span>
            </Link>
          </li>
        </ul>
      </>
    )
  }

  return (
    <div className='menu' ref={menuEl} onClick={navHendler}>
      <div className='menu__wrapper' >
        <div>
          {nav}
        </div>
        <div className={`logo ${isActiveLogo ? 'logo--active' : ''}`} >
          {/* <img className='logo__img' src={logo} alt="" /> */}
          <span className='logo__title'>&copy; 2023 Все права защищены</span>
          <span className='logo__title'>Центр Прогрессивной Aквакультуры</span>
        </div>
      </div>
      <div className='menu__hover'></div>
    </div>
  )
}

export default Menu