import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react"; // nice loader icon

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black text-white">
      {/* Logo / Brand */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="urbanist text-3xl font-bold mb-6"
      >
        Furniture<span className="text-gray-400">Spot</span>
      </motion.h1>

      {/* Spinning Icon */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="mb-6"
      >
        <Loader2 className="w-12 h-12 text-white" />
      </motion.div>

      {/* Loading Bar */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        className="h-1 bg-white/70 rounded-full w-full max-w-sm"
      />

      {/* Small text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mt-6 text-gray-400 text-sm tracking-widest"
      >
        Loading your experience...
      </motion.p>
    </div>
  );
};

export default Loading;
