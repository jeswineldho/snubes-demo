import { useState } from 'react';
import brandLogoUrl from '../assets/snubesLogo.svg';
import brandLogoUrlMobile from '../assets/snubesLogoMobile.svg';
import { Link } from 'react-router-dom';

const Navbar = ({ navbarItemList, tablet }) => {
  //Setting the navbar burger icon which opens the navbar on click
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        {!tablet && (
          <Link to='/' className='navbar-item'>
            <img src={brandLogoUrl} alt='brand logo' className='logo' />
          </Link>
        )}
        {tablet && (
          <Link to='/' className='navbar-item'>
            <img src={brandLogoUrlMobile} alt='brand logo' className='logo' />
          </Link>
        )}
        <Link
          role='button'
          className={
            isNavBarVisible ? 'navbar-burger is-active' : 'navbar-burger'
          }
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasic'
          onClick={() => setIsNavBarVisible((open) => !open)}
          to={'#'}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </Link>
      </div>

      <div
        id='navbarBasic'
        className={isNavBarVisible ? 'navbar-menu is-active' : 'navbar-menu'}
      >
        <div className='navbar-end'>
          {navbarItemList.map((navItem, index) => (
            <Link key={index} to={navItem.url} className='navbar-item'>
              {navItem.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
