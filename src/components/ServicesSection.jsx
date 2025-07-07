import DesignServicesIcon from '@mui/icons-material/DesignServices';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import CampaignIcon from '@mui/icons-material/Campaign';
import './Service.css';

export default function ServiceSection() {
  return (
    <section className="bg-black py-16 px-4 sm:px-8 text-white" id='service'>
      <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-12">
      You Don't Need <span className="text-[#f45e00] text-4xl sm:text-6xl"><i>Editor.</i></span> You need a Growth Partner.
      </h2>

      <p className="text-[.8rem] font-normal sm:text-[.8rem] md:[1rem] lg:text-[1rem] text-gray-300 leading-[1] sm:leading-[1] max-w-[100%] mx-auto px-2 text-center mb-10">
        Most editors are doing the same old thing. But here's the truth: I don't just edit videos. I craft content that's built to explode.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Video Editing */}
        <div className="relative h-[250px] rounded-xl overflow-hidden bg-[#1a1a1a]">
          {/* Blobs */}
          <div className="absolute w-[150px] h-[150px] bg-[#f40006]/20 blur-2xl rounded-full animate-blob -top-8 -left-8"></div>
          <div className="absolute w-[100px] h-[100px] bg-[#f40006]/20 blur-2xl rounded-full animate-blob delay-2000 top-6 left-20"></div>

          <div className="relative z-10 backdrop-blur-md bg-white/5 p-6 h-full border border-white/20 rounded-xl flex flex-col items-center justify-center text-center">
            <VideoCameraFrontIcon className="text-[#f40006] text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Video Editing</h3>
            <p className="text-sm text-gray-300">
              Every frame is designed for one thing — getting you noticed. I craft the black magic of video that grabs attention and holds it.
            </p>
          </div>
        </div>

        {/* Designing */}
        <div className="relative h-[250px] rounded-xl overflow-hidden bg-[#1a1a1a]">
          <div className="absolute w-[120px] h-[120px] bg-[#f40006]/20 blur-2xl rounded-full animate-blob -bottom-6 -right-6"></div>
          <div className="absolute w-[80px] h-[80px] bg-[#f40006]/20 blur-2xl rounded-full animate-blob delay-3000 top-10 right-16"></div>

          <div className="relative z-10 backdrop-blur-md bg-white/5 p-6 h-full border border-white/20 rounded-xl flex flex-col items-center justify-center text-center">
            <DesignServicesIcon className="text-[#f40006] text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Designing</h3>
            <p className="text-sm text-gray-300">
              Your design is your first impression. I create click magnets that stop scrollers in their tracks.
            </p>
          </div>
        </div>

        {/* Social Media Marketing */}
        <div className="col-span-full relative h-[250px] rounded-xl overflow-hidden bg-[#1a1a1a]">
          <div className="absolute w-[200px] h-[200px] bg-[#f40006]/20 blur-2xl rounded-full animate-blob -top-10 right-1/3"></div>
          <div className="absolute w-[120px] h-[120px] bg-[#f40006]/20 blur-2xl rounded-full animate-blob delay-1000 -bottom-6 left-12"></div>

          <div className="relative z-10 backdrop-blur-md bg-white/5 p-6 h-full border border-white/20 rounded-xl flex flex-col items-center justify-center text-center">
            <CampaignIcon className="text-[#f40006] text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Social Media Marketing</h3>
            <p className="text-sm text-gray-300">
              Content isn't random — it's engineered to convert. I build strategies that grow your brand, get you views, and put you on the path to fame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}