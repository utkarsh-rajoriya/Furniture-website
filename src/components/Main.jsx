import { useState } from "react";
import LivingRoomGallery from "./LivingRoomGallery";
import ImageCarousel from "./ImageCarousel";
import { motion } from "motion/react"


const Main = () => {
  const [category, setCategory] = useState("Living Room");

  return (
    <div className="md:p-[4rem] max-md:p-[1rem] overflow-x-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="flex flex-col gap-3 justify-between items-start w-[20rem] lg:w-[30rem]"
        whileInView={{ opacity: [0, 1], x: [-100, 0] }}
        transition={{ duration: 0.5 , delay: 0.2 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
        >
          <p className="text-sm uppercase tracking-wide text-gray-600">
            Feature Collections
          </p>
          <p className="text-2xl lg:text-3xl text-gray-500 font-bold">
            Our Most <span className="text-black">popular furniture</span>,
            trusted by thousands of happy homes.
          </p>
        </motion.div>

        <motion.div className="max-md:hidden md:pl-[1rem] flex flex-col justify-end lg:justify-center"
        animate={{ opacity: [0, 1], x: [100, 0] }}
        transition={{ duration: 0.5 , delay: 0.2 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
        >
          <p className="text-sm text-gray-600 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            accusamus sapiente aspernatur id, dolore inventore
          </p>
        </motion.div>
      </div>

      {/* Images with Floating Button */}
      <div className="relative mt-[4rem] flex max-md:flex-col justify-center items-center gap-4">
        <motion.img
        whileInView={{ opacity: [0, 1], x: [-100, 0] }}
        transition={{ duration: 0.5 , delay: 0.3 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
          src="https://res.cloudinary.com/dtf1quyas/image/upload/v1756130391/furniture-img-1_cce50c.jpg"
          alt="furniture-img-1"
          className="w-full md:w-[50%] aspect-[16/9] rounded-xl shadow-md object-cover"
        />

        <motion.img
        whileInView={{ opacity: [0, 1], x: [100, 0] }}
        transition={{ duration: 0.5 , delay: 0.3 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
          src="https://res.cloudinary.com/dtf1quyas/image/upload/v1756130389/furniture-img-2_vt7mil.jpg"
          alt="furniture-img-2"
          className="w-full md:w-[50%] aspect-[16/9] rounded-xl shadow-md object-cover"
        />

        {/* Floating Button */}
        <motion.div className="flex justify-center mt-4 md:mt-0 absolute top- md:-top-6 md:left-1/2 md:-translate-x-1/2"
        whileInView={{ opacity: [0, 1], y: [-70, 0] }}
        transition={{ duration: 0.5 , delay: 0.3 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
        >
          <button className="relative overflow-hidden rounded-full bg-white text-black font-semibold px-8 py-3 group transition-all duration-500">
            <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10 group-hover:text-white">
              Learn More
            </span>
          </button>
        </motion.div>
      </div>

      {/* Signature Collection Section */}
      <div className="my-[2rem] mt-[4rem] grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
        whileInView={{ opacity: [0, 1], x: [-100, 0] }}
        transition={{ duration: 0.5 , delay: 0.4 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
        >
          <p className="urbanist text-3xl text-black font-bold w-[20rem] lg:w-[30rem]">
            Explore Our Signature Collections
          </p>
        </motion.div>

        <motion.div className="max-md:hidden md:pl-[1rem] md:pt-[2rem] flex flex-col justify-end"
        whileInView={{ opacity: [0, 1], x: [100, 0] }}
        transition={{ duration: 0.5 , delay: 0.4 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
        >
          <p className="text-sm text-gray-600 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            accusamus sapiente aspernatur id, dolore inventore?
          </p>

          <button className="my-3 w-[10rem] relative overflow-hidden rounded-full bg-white text-black font-semibold px-5 py-2 border border-gray-400 group transition-all duration-500">
            <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10 group-hover:text-white">
              Key features
            </span>
          </button>
        </motion.div>
      </div>

      {/* Categories Section */}
      <motion.div className="my-[2rem] flex justify-evenly items-center gap-4 overflow-x-auto p-2 scrollbar-hide border border-gray-300 rounded-full"
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5 , delay: 0.4 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
      >
        {["Living Room", "Bedroom", "Dining", "Office", "Outdoor", "Decor"].map(
          (category, idx) => (
            <button
              key={idx}
              className="flex-shrink-0 w-[10rem] relative overflow-hidden rounded-full bg-white text-black font-semibold px-5 py-2 border border-gray-400 group transition-all duration-500"
              onClick={() => setCategory(category)}
            >
              <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10 group-hover:text-white">
                {category}
              </span>
            </button>
          )
        )}
      </motion.div>

      {/* Living Room Images */}
      <LivingRoomGallery category={category} />

      {/* Running Tap */}
      <div className="relative overflow-hidden bg-gray-200 p-3 mt-10">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-4xl md:text-5xl text-black font-[serif] tracking-widest mx-8">
            FURNITURE / INTERIOR / DESIGN
          </span>
          <span className="text-4xl md:text-5xl text-black font-[serif] tracking-widest mx-8">
            FURNITURE / INTERIOR / DESIGN
          </span>
          <span className="text-4xl md:text-5xl text-black font-[serif] tracking-widest mx-8">
            FURNITURE / INTERIOR / DESIGN
          </span>
        </div>
      </div>

      <ImageCarousel />
    </div>
  );
};

export default Main;
