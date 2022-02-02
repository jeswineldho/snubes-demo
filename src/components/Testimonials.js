import talixoLogo from '../assets/talixo.png';
import carouselDots from '../assets/group-3.svg';
import allianz from '../assets/allianz.png';
import userCentrics from '../assets/userCentrics.png';
import laserHub from '../assets/laserHub.png';
import talixoGrey from '../assets/talixoGrey.png';
import creditShelf from '../assets/creditShelf.png';

function Testimonials() {
  return (
    <div className='testimonials'>
      <img src={talixoLogo} alt='talixo' className='talixoLogo' />
      <p className='testimonialPara'>
        “Finding a suitable outsourcing service provider through Snubes was very
        easy and our personal consultant helped us every step of the way. After
        a short time we had good offers on the table. An on-site visit confirmed
        the positive impression and we have now found a matching partner. Thank
        you for your great support, which has helped us a lot in the selection
        process.”
      </p>
      <p>
        <strong>Jan Brenneke</strong>, VP Operations
      </p>
      <img src={carouselDots} alt='carousel' className='carouselDots' />
      <div className='clients columns'>
        <div className='column'>
          <img src={allianz} alt='allianz' />
        </div>
        <div className='column'>
          <img src={creditShelf} alt='creditShelf' />
        </div>
        <div className='column'>
          <img src={userCentrics} alt='userCentrics' />
        </div>
        <div className='column'>
          <img src={laserHub} alt='laserHub' />
        </div>
        <div className='column'>
          <img src={talixoGrey} alt='talixo' />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
