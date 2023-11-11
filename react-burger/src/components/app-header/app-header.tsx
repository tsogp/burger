import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import "./app-header.css";

export default function AppHeader() {
  return(
    <header className='app-header'>
      <div className="menu">
        <a href="#" className="link menu-link left-link"><BurgerIcon type="primary" /><h2 className="link-text text text_type_main-default">Конструктор</h2></a>
        <a href="#" className="link menu-link"><ListIcon type="primary" /><h2 className="link-text text text_type_main-default">Лента заказов</h2></a>
      </div>
      <div className="header-logo">
        <Logo />
      </div>
      <a href="#" className="link profile-link"><ProfileIcon type="primary" /><h2 className="link-text text text_type_main-default">Личный кабинет</h2></a>
    </header>
    )
}