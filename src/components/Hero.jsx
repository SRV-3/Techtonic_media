import './Hero.css';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section className="relative h-[50vh] sm:h-[100vh] w-full overflow-hidden flex items-center justify-center bg-black text-white"  id="home">
      <HeroBackground />

      <div className="relative z-10 text-center px-4 pointer-events-auto">
        <h1 className=" text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-black leading-tight w-[90%] sm:w-[80%] md:w-[60%] mx-auto pb-4">
          Disrupting the ordinary
        </h1>

        <p className="text-[0.7rem] sm:text-[0.9rem] md:text-sm font-thin max-w-xl mx-auto leading-relaxed text-gray-200">
          If you're here, you're in the right place! But only a few ever get to access this.
          There's a hidden black magic in the world of content creation. It's not about luck.
          It's about mastering a formula so powerful that only a select few know how to make it work.
        </p>

        <div className="mt-6 flex justify-center flex-wrap gap-4">
        <button className="ml-4 px-5 py-2 bg-[#f40006] text-white font-semibold rounded-md shadow-[0_0_20px_#f40006,0_0_40px_#f40006] hover:brightness-110 transition duration-200"   onClick={() => {
               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });}}>
                Get Started
            </button>
          <button className="px-6 py-2 border text-white font-semibold rounded-md hover:bg-white hover:text-black transition duration-200"
            onClick={()=> {document.getElementById("work")?.scrollIntoView({behavior:"smooth"});}}>
            Our Work
          </button>
        </div>
      </div>
    </section>
  );
}