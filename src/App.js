import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import WhySnubes from './components/WhySnubes';

function App() {
  //Checking for device width to ensure responsive design
  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setTablet(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setTablet(true);
      } else {
        setTablet(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='App'>
      <Navbar
        tablet={tablet}
        navbarItemList={[
          { label: 'About Us', url: '/' },
          { label: 'How it works', url: '/' },
          { label: 'Become a Partner', url: '/' },
          { label: 'EUR', url: '/' },
          { label: 'EN', url: '/' },
          { label: 'Sign In', url: '/' },
          { label: 'Get Access', url: '/' },
        ]}
      />
      <LandingPage />
      <WhySnubes tablet={tablet} />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
