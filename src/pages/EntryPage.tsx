import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EntryPage: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate('/languages');
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-400 to-secondary-500 flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatePresence>
        {!clicked ? (
          <motion.div 
            className="text-center relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white/20 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-white/30 transition-colors shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
            >
              <Music size={64} className="text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">MelodyVerse</h1>
            <p className="text-lg md:text-xl text-white/80 mt-4 max-w-md mx-auto">
              Watch and sing along to your favorite songs
            </p>
            <motion.button
              className="mt-8 md:btn btn bg-white text-primary-600 hover:bg-white/90 px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
            >
              <Play size={20} />
              <span>Get Started</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="text-center"
            initial={{ scale: 1 }}
            animate={{ scale: 20, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="bg-white/20 w-32 h-32 rounded-full flex items-center justify-center mx-auto">
              <Music size={64} className="text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/40 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white/20 rounded-full"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-white/40 rounded-full"></div>
      </div>
    </div>
  );
};

export default EntryPage;