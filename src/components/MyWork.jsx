import './MyWork.css';
import thumb1 from '../assets/work/thumbs/thumb1.jpg';
import thumb2 from '../assets/work/thumbs/thumb2.jpg';
import thumb3 from '../assets/work/thumbs/thumb3.jpg';
import thumb4 from '../assets/work/thumbs/thumb4.jpg';
import thumb5 from '../assets/work/thumbs/thumb5.jpg';
import thumb6 from '../assets/work/thumbs/thumb6.jpg';
import thumb7 from '../assets/work/thumbs/thumb7.jpg';
import thumb8 from '../assets/work/thumbs/thumb8.png';
import thumb9 from '../assets/work/thumbs/thumb9.png';

const images = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb9];

export default function MyWork() {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-8" id='work'>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12"> Our Work In &nbsp;
        <span className="text-[#6B54BC]">Action !</span>
      </h2>

      {/* Top Row - Scroll Left */}
      <div className="scroll-container mb-10">
        <div className="scroll-blur left"></div>
        <div className="scroll-blur right"></div>

        <div className="scroll-track">
          {[...images, ...images].map((img, idx) => (
            <div className="scroll-item" key={`row1-${idx}`}>
              <img src={img} alt={`work-${idx}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scroll Right */}
      <div className="scroll-container p-10">
        <div className="scroll-blur left"></div>
        <div className="scroll-blur right"></div>

        <div className="scroll-track reverse">
          {[...images, ...images].map((img, idx) => (
            <div className="scroll-item" key={`row2-${idx}`}>
              <img src={img} alt={`work-rev-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}