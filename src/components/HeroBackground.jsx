import background from '../assets/background.png';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
        <img src={background} alt="" />
    </div>
  );
};

export default HeroBackground;




