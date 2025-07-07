import ValueCard from './ValueCard';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Crown alternative
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';export default function ValueSection() {
  return (
    <section className="bg-black py-16 px-4 sm:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
        Find Your Style. &nbsp;
        <span className="text-[#3AFE79] border p-1">Go Viral</span> 
      </h2>
      <p className="text-[.8rem] font-normal sm:text-[.8rem] md:[1rem] lg:text-[1rem] text-gray-300 leading-[1] sm:leading-[1] max-w-[100%] mx-auto px-2 text-center mb-10">
        The creators I work with aren't average. They're elite. And so are you — if you're ready for the change.
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        <ValueCard
          icon={<YouTubeIcon />}
          title="Content Creators"
          desc="You're already grinding hard. Now let's turn those hours into massive viral growth and profit."
        />
        <ValueCard
          icon={<EmojiEventsIcon />}
          title="Personal Brands"
          desc="You're an expert, and you deserve a platform that powers your voice and boosts your income."
        />
        <ValueCard
          icon={<AttachMoneyIcon />}
          title="Finance Educators"
          desc="Make finance simple! Money is your expertise. Let's turn your content into a profitable business."
        />
      </div>
    </section>
  );
}