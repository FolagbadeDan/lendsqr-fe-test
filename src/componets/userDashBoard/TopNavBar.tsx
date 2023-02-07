import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

const TopNavBar: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className="top-nav">
      <div className="top-nav-main">
        <img src="/images/logo.svg" alt="logo" className="logo" />
        <div className="search-input">
          <input type="search" placeholder="Search for anything" />
          <button>
            <img src="/images/icons/search-icon.svg" alt="search" />
          </button>
        </div>
        <div className="top-nav-right">
		<Link target={'_blank'} to="https://drive.google.com/file/d/19m2cIaz3mGpSz-Hre5d2kfB5mZD6U4SD/view?usp=share_link">Docs</Link>        
		  <img src="/images/icons/bell-icon.svg" alt="notification" />
          <div className="top-nav-profile">
            <img src="/images/avatar.svg" alt="avatar" />
            <p>Adedeji</p>
            <img src="/images/icons/dropdown-icon.svg" alt="Avatar" />
          </div>
        </div>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-icon">
          <img
            src={`/images/icons/${isMenuOpen ? 'close-icon' : 'menu'}.svg`}
            alt="menu icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
export {}