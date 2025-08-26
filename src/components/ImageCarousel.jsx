import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react"

const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130389/corosal-img-1_jyd7cu.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130388/corosal-img-2_fsmbeu.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130390/corosal-img-3_j8pdnh.png",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // optional auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10  py-8  md:py-16 items-center overflow-hidden">
      {/* Left Side Text */}
      <motion.div className="space-y-5 text-center md:text-left"
       whileInView={{ opacity: [0, 1], x: [-100, 0] }}
       transition={{ duration: 0.5 , delay: 0.2 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
      >
        <p className="text-xs md:text-sm uppercase tracking-wide text-gray-500">
          Sustainable by Design
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Eco–Friendly Designs, <br className="hidden md:block" /> Timeless
          Quality
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
          Crafted with care — our furniture blends elegant design with
          sustainable materials. Made to last for generations, while being kind
          to the planet.
        </p>

        {/* Navigation */}
        <div className="flex gap-4 justify-center md:justify-start">
          <button
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </motion.div>

      {/* Right Side Carousel */}
      <motion.div className="relative flex justify-center items-center h-[360px] sm:h-[420px] md:h-[480px]"
       whileInView={{ opacity: [0, 1], x: [100, 0] }}
       transition={{ duration: 0.5 , delay: 0.2 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
      >
        {images.map((img, index) => {
          const isActive = index === current;
          const isPrev =
            index === (current - 1 + images.length) % images.length;
          const isNext = index === (current + 1) % images.length;

          return (
            <div
              key={img.id}
              className={`absolute transition-all duration-700 ease-in-out rounded-2xl overflow-hidden shadow-lg 
              ${
                isActive
                  ? "w-[180px] sm:w-[220px] md:w-[260px] h-[300px] sm:h-[360px] md:h-[420px] z-20 opacity-100"
                  : isPrev || isNext
                  ? "w-[120px] sm:w-[150px] md:w-[180px] h-[220px] sm:h-[270px] md:h-[320px] z-10 opacity-50 scale-90 blur-[1px]"
                  : "opacity-0"
              }`}
              style={{
                transform: isActive
                  ? "translateX(0)"
                  : isPrev
                  ? "translateX(-130%)"
                  : isNext
                  ? "translateX(130%)"
                  : "translateX(0)",
              }}
            >
              <img
                src={img.src}
                alt={`Slide ${img.id}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
