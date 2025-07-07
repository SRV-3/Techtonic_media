export default function CreatorCard({ name, image }) {
    return (
      <div className="min-w-[150px] h-[80px] mx-3 sm:mx-20 px-4 py-2 border border-red-600 rounded-xl bg-transparent flex flex-col items-center justify-center shadow-md backdrop-blur-sm hover:scale-105 transition-transform duration-300"
        style={{ boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)' }}
      >
        <img
          src={image}
          alt={name}
          className="w-8 h-8 rounded-full object-cover mb-2 border border-white"
        />
        <p className="text-white font-bold text-xs text-center">{name}</p>
      </div>
    );
  }