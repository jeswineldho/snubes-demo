import signup from '../assets/group-37.svg';
import sourcing from '../assets/group-11.svg';
import offers from '../assets/group-27.svg';
import landingImage from '../assets/landingImage.jpg';
import Form from './Form';

function LandingPage() {
  return (
    <div>
      <div className='landingGraphic'>
        <Form />
        <div className='imageText'>
          <p className='mainText'>
            Welcome to Europe’s largest call center database{' '}
          </p>
          <div className='textTable'>
            <div className='firstColumns'>
              <div className='firstColumn'>500+</div>
              <div className='firstColumn'>200+</div>
              <div className='firstColumn'>375.000</div>
              <div className='firstColumn'>85%</div>
            </div>
            <div className='secondColumns'>
              <div className='secondColumn'>Tenders</div>
              <div className='secondColumn'>Callcenter</div>
              <div className='secondColumn'>Agents available</div>
              <div className='secondColumn'>Faster sourcing</div>
            </div>
          </div>
        </div>
        <img src={landingImage} alt='landing page' className='landingImage' />
      </div>
      <div className='featuresDiv'>
        <div className='features columns'>
          <div className='column'>
            <img src={signup} alt='Free Signup' className='featuresIcon' />
            <h4 className='featuresHeading'>Sign up for free</h4>
            <p>
              Signing up and setting up your project takes less than 5 minutes
            </p>
          </div>
          <div className='column'>
            <img src={sourcing} alt='Source smarter' />
            <h4 className='featuresHeading'>Source smarter</h4>
            <p>
              Our data-based AI and our experts will help you find exactly what
              you are looking for
            </p>
          </div>
          <div className='column'>
            <img src={offers} alt='Receive Offers' />
            <h4 className='featuresHeading'>Receive offers</h4>
            <p>
              With our insights you always receive high-quality proposals at the
              best price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
