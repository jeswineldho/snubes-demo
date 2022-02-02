import award from '../assets/award.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className='footerMain'>
        <img src={award} alt='Best of 2018' className='award' />
        <div className='footerColumns'>
          <div className='columns'>
            <Link to='/' className='column is-one-third'>
              About Us
            </Link>
            <Link to='/' className='column is-one-third'>
              Imprints
            </Link>
            <Link to='/' className='column is-one-third'>
              support@snubes.com
            </Link>
          </div>
          <div className='columns'>
            <Link to='/' className='column is-one-third'>
              Become a Partner
            </Link>
            <Link to='/' className='column is-one-third'>
              Terms & Conditions
            </Link>
            <Link to='/' className='column is-one-third'>
              +49 (0) 305 5645327
            </Link>
          </div>
          <div className='columns'>
            <Link to='/' className='column is-one-third'>
              FAQ
            </Link>
            <Link to='/' className='column is-one-third'>
              Privacy Policy
            </Link>
            <div className='column is-one-third'>
              <span className='icon'>
                <a href='https://www.facebook.com/SnubesGlobal/'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </span>
              <span className='icon'>
                <a href='https://twitter.com/snubesglobal'>
                  <i className='fab fa-twitter'></i>
                </a>
              </span>
              <span className='icon'>
                <a href='https://www.linkedin.com/company/snubes-gmbh/'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>© 2019 Snubes GmbH All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
