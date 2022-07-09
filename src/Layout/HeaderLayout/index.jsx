import React from 'react'
import '../../css/nav.css'
import { NavLink, Outlet } from 'react-router-dom';
import { Body } from '../Body/index.jsx';
import BurgerMenu from '../../components/Navigation/index.jsx';

export default function Layout() {

  return (
    <>
        <header>
        <h1>Richard <span>Sigl</span></h1>
        <BurgerMenu />
        </header>
        <Body />
        <Outlet />
    </>
  )
}

