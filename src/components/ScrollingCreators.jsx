import CreatorCard from './CreatorsCard';
import './Scroll.css';

const creators = [
  { name: "Sahil Rana", image: "/sahil.png" },
  { name: "Akshay Rana", image: "/akshay.jpg" },
  { name: "Downtect", image: "/downtech.jpg" },
  { name: "Official Ben", image: "/ben.jpg" },
  { name: "Pallavi Joshi", image: "/palvi.jpg" },
  { name: "Akash Galexy ", image: "/akash.jpg" },
  { name: "Harsh Bhagat", image: "/harsh.jpg" },
  { name: "TSG Legend", image: "/legend.jpg" },
  { name: "Titanium Gamer", image: "/bharat.jpg" },
  { name: "Bin Zaid Gaming", image: "/zaid.jpg" },
];

export default function ScrollingCreators() {
  const repeatedCreators = [...creators, ...creators]; // repeat for loop

  return (
    <div className="relative overflow-hidden w-full bg-black py-6">
      <h6 className='text-white plus-jakarta-sans-thin tracking-[.2rem] md:tracking-[.5rem] text-center p-6 mb-8 text-[1rem]'>Creators We've Helped Scale to New Heights</h6>
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black z-10 pointer-events-none" />

      <div className="scroll-touch overflow-x-hidden" style={{ touchAction: 'pan-x' }}>
        <div className="flex w-max animate-scroll hover:pause-scroll whitespace-nowrap">
          {repeatedCreators.map((creator, index) => (
            <CreatorCard key={index} name={creator.name} image={creator.image} />
          ))}
        </div>
      </div>
    </div>
  );
}