
import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../core/data';
import { useNavigate } from 'react-router-dom';

interface Props {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

const SideBar: FC<Props> = ({ isMenuOpen }) => {
  const [activeRoute, setActiveRoute] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  const isRouteActive = (route: string) => activeRoute === route;

  return (
    <div className={`side-nav ${isMenuOpen && 'nav-active'}`}>
      <div className="side-nav-header">
        <img src="/images/logo.svg" alt="logo" className="logo" />
      </div>
      <ul className="side-nav-menu">
        {navItems.map((item) => {
          return (
            <div key={item.id}>
              {!item.header ? (
                <Link to={`${item.link}`}>
                  <li
                    className={`side-nav-menu-item ${
                      isRouteActive(item.link) && 'active'
                    }`}
                  >
                    {!item.header && <img src={item.icon} alt={item.title} />}
                    <span>{item.title}</span>
                    {item.id === 1 && (
                      <span>
                        <img src="/images/icons/down-arrow.svg" alt="" />
                      </span>
                    )}
                  </li>
                </Link>
              ) : (
                <li className="nav-item-header">
                  <span>{item.title}</span>
                </li>
              )}
            </div>
          );
        })}
      </ul>

      <div className="logout" onClick={() => navigate('/')}>
        <div>
          <img src="/images/icons/logout-icon.svg" alt="logout icon" />
          <span>Logout</span>
        </div>
        <span className="version">v1.2.0</span>
      </div>
    </div>
  );
};

export default SideBar;

export {}