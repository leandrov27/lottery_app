//& images
import HeroShape from '../assets/images/elements/inner-hero-shape.png';

//* =================================================================

const Hero = () => {
  return (
    <div className="inner-hero-section" style={{marginTop: -200}}>
      <div className="bg-shape">
        <img src={HeroShape} alt="hero-shape" />
      </div>
    </div>
  );
};

export default Hero;
