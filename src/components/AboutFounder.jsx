import founderImage from '../assets/founder.jpg';

export default function AboutFounder() {
    return (
      <section className="bg-[#1f1f1f] text-white px-4 sm:px-8 py-20" id='about'>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Meet The Visionary
            </h2>
            <p className="text-lg text-gray-400 font-semibold mb-3">
              Founder, Arnav Singh
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              With a passion for visual storytelling and strategic design, I craft content that doesn’t just look good—it performs. From designing scroll-stopping creatives to editing videos that convert, every move is backed by intent and insight.
            </p>
            <p className="text-white text-lg font-bold">
              “Design is not just what it looks like. Design is how it works.”
            </p>
          </div>
  
          {/* Right Image */}
          <div className="flex-1 w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-white/10">
            <img
              src={founderImage}
              alt="Founder"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    );
  }