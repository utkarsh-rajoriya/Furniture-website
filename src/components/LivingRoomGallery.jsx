import { motion } from "motion/react"

const LivingRoomGallery = ({ category }) => {
  const images = {
    "Living Room": [
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130390/livingroom-1_vh0fv7.jpg",
        alt: "livingroom-1",
        id: 1,
        title: "Contemporary Luxe Sofa",
      },
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130390/livingroom-2_vmuraq.jpg",
        alt: "livingroom-2",
        id: 2,
        title: "Elegant Velvet Lounge",
      },
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130390/livingroom-3_rekmie.jpg",
        alt: "livingroom-3",
        id: 3,
        title: "Minimalist Designer Seating",
      },
    ],
    Bedroom: [
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130387/bedroom-1_yqihk9.jpg",
        alt: "bedroom-1",
        id: 4,
        title: "Royal Comfort Bed",
      },
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130387/bedroom-3_pxntkt.jpg",
        alt: "bedroom-2",
        id: 5,
        title: "Luxury Suite Ambience",
      },
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130388/bedroom-2_el6csv.jpg",
        alt: "bedroom-3",
        id: 6,
        title: "Modern Serenity Retreat",
      },
    ],
    Dining: [
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130389/dining-1_bhuxsv.jpg",
        alt: "dining-1",
        id: 7,
        title: "Premium Marble Dining",
      },
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130388/dining-2_nw2cek.jpg",
        alt: "dining-2",
        id: 8,
        title: "Classic Wooden Feast Table",
      },
      {
        src: "https://res.cloudinary.com/dtf1quyas/image/upload/v1756130387/dining-3_bc1v1z.jpg",
        alt: "dining-3",
        id: 9,
        title: "Modern Chic Dining Set",
      },
    ],
  };

  const activeImages = images[category] || images["Living Room"];

  return (
    <motion.div className="my-[4rem] overflow-x-auto scrollbar-hide"
     whileInView={{ opacity: [0, 1], y: [100, 0] }}
     transition={{ duration: 0.5 , delay: 0.2 , ease: "easeInOut" , type: "spring"  , stiffness: 100  , damping: 10}}
    >
      {/* Use group to trigger child hover effects */}
      <div className="flex gap-4 min-w-[50rem] group">
        {activeImages.map((img) => (
          <div
            key={img.id}
            className="relative flex-1 rounded-xl shadow-md overflow-hidden cursor-pointer 
                       transition-all duration-500 ease-in-out hover:flex-[2]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[22rem] object-cover rounded-xl 
                         transition-transform duration-500 ease-in-out hover:scale-105"
            />

            {/* title */}
            <div
              className="urbanist text-white font-normal absolute bottom-4 left-4 text-xl text-shadow-lg
             transition-all duration-300 group-hover:text-2xl"
            >
              {img.title}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LivingRoomGallery;
