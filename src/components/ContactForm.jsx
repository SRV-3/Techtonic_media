export default function ContactForm() {
    return (
      <section className="bg-black text-white py-20 px-4 sm:px-8" id="contact">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f40006] mb-4">Get In Touch</h2>
          <p className="text-gray-400">Have a project in mind or just want to say hi? Fill out the form below.</p>
        </div>
  
        <form className="max-w-3xl mx-auto space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="peer w-full bg-transparent border border-white/20 px-4 py-3 rounded-md focus:outline-none focus:border-[#f40006] placeholder-transparent"
              placeholder="Your Name"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#f40006]">
              Your Name
            </label>
          </div>
  
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full bg-transparent border border-white/20 px-4 py-3 rounded-md focus:outline-none focus:border-[#f40006] placeholder-transparent"
              placeholder="Your Email"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#f40006]">
              Your Email
            </label>
          </div>
  
          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              required
              rows="5"
              className="peer w-full bg-transparent border border-white/20 px-4 py-3 rounded-md focus:outline-none focus:border-[#f40006] placeholder-transparent"
              placeholder="Your Message"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#f40006]">
              Your Message
            </label>
          </div>
  
          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#f40006] text-white font-semibold rounded-md shadow-[0_0_15px_#f40006] hover:brightness-110 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }