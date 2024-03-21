import './LandingPageHeader.css';
import React, { useState } from "react";
import { Logo } from '../Logo/logo.jsx';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import HeaderNavigation from './HeaderNavigation';
  
export const LandingPageHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }

    return (
      <header className="header">
        <div className="logo">
          <Logo useWhite={true} />
        </div>
        
        <div className="menu" onClick={toggleMenu}>
          <MenuIcon fill='white'/>
        </div>

        
          
<MenuIcon className='menu-icon'onClick/>
           
<div className="menu">
   <HeaderNavigation className={showMenu? 'mobile':''} />
          </div>
        
      </header>
      
    );
    
}