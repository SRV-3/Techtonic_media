export default function ValueCard({ title, desc, icon }) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 w-full sm:w-[18rem] flex flex-col items-center text-center">
        
        <div className="text-4xl w-15 text-[#fffff] mb-4 border-b-1 border-r-1 border-[#f40006] bg-[#ff000044] rounded-md p-2">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
      </div>
    );
  }