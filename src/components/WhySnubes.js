import background from '../assets/whysnubes.png';
import backgroundMobile from '../assets/whysnubesmob.png';

function WhySnubes({ tablet }) {
  return (
    <div className='whySnubesContainer'>
      {!tablet && (
        <img src={background} alt='Why Snubes' className='whySnubesBg' />
      )}
      {tablet && (
        <img src={backgroundMobile} alt='Why Snubes' className='whySnubesBg' />
      )}
      <div className='textContainer'>
        <h3 className='divHeading'>Why Snubes?</h3>
        <h3 className='subHeading'>Trusted Know-How</h3>
        <p className='paragraph'>
          We have more than 20 years of experience and continuously check call
          centers for their quality and capabilities. Customers like Allianz
          trust Snubes industry knowledge.
        </p>
        <h3 className='subHeading'>Time and cost savings</h3>
        <p className='paragraph'>
          With Snubes you can easily compare prices, quality and availability,
          and find more potential suppliers. Reach your goal faster and save
          resources.
        </p>
        <h3 className='subHeading'>Satisfaction guaranteed</h3>
        <p className='paragraph'>
          We offer a validated data-based approach to procurement, rather than
          awarding contracts only based on the lowest price, an existing
          relationship or "gut feeling".
        </p>
      </div>
    </div>
  );
}

export default WhySnubes;
