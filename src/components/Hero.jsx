const Hero = () => {
  return (
    <div className="my-3">
      <div className="flex justify-center items-center">
        {/* Container with rounded corners */}
        <div className="hero-vid relative w-[95%] h-[500px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
          {/* Background video */}
          <video
            src="https://res.cloudinary.com/dtf1quyas/video/upload/v1756130409/furniture_rbirp6.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

          {/* Overlay content */}
          <div className="p-5 relative z-20 flex flex-col justify-center items-center h-full text-white">
            {/* Title */}
            <p
              className="urbanist font-normal text-center drop-shadow-lg tracking-wider 
                          text-4xl leading-tight
                          sm:text-5xl sm:leading-snug
                          md:text-6xl md:leading-snug
                          lg:text-8xl lg:leading-[7rem]"
            >
              Urban <br /> Furnish
            </p>

            {/* Subtitle */}
            <p className="mt-5 text-center text-md  max-w-[90%] md:max-w-3xl lg:max-w-4xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae dolorem deserunt neque? Veritatis ad rerum aliquam at
              voluptates facere
            </p>

            {/* Swipy Button */}
            <button
              className="mt-8 relative overflow-hidden rounded-full bg-white text-black font-semibold px-8 py-3 
                               group transition-all duration-500"
            >
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10 group-hover:text-white">
                Join Our Team
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
