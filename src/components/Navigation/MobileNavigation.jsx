import React, {useState} from "react";
import NavLinks from "./NavLinks";
import {HiMenuAlt3} from "react-icons/hi";
import {GrClose} from "react-icons/gr";

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const hamburgerIconClose = <GrClose className="hamburger" size='40px' color="white" onClick={handleBurgerClose}/>;

    const hamburgerIconOpen = <HiMenuAlt3 className='hamburger' size='40px' color="white" onClick={handleBurgerClick}/>;

    function handleBurgerClose() {
        setIsOpen(!isOpen);
    }

    function handleBurgerClick() {
        setIsOpen(!isOpen);
    }

    const closeMobileMenu = () => {
        setIsOpen(false);
    }

  return (

    <nav className='MobileNavigation'>
        {isOpen ? hamburgerIconClose : hamburgerIconOpen}
        {isOpen && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </nav>
  );
}
