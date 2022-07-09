import React from 'react'
import '../../css/nav.css'
import { Outlet } from 'react-router-dom';
import BurgerMenu from '../../components/Navigation/index.jsx';

export default function HeaderLayout() {

  return (
    <>
        <header>
          <h1>Richard <span>Sigl</span></h1>
          <BurgerMenu />
        </header>
        {/* <Outlet /> */}
    </>
  )
}

