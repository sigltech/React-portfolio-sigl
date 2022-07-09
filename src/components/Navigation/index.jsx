import React from "react";
import NavLinks from "./NavLinks";
import { slide as Menu } from 'react-burger-menu'
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function BurgerMenu() {
    return (
        <nav className='Navbar'>
            <MobileNavigation />
            <DesktopNavigation />
        </nav>
    )
}
