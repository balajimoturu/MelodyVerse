import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const Layout: React.FC = () => {
  const location = useLocation();
  
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <header className="sticky top-0 z-10 glassmorphism border-b border-gray-200/20 shadow-sm">
        <div className="container-custom py-4 flex items-center justify-between">
          <Navigation />
          <SearchBar />
        </div>
      </header>
      
      <main className="container-custom py-8">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="min-h-[calc(100vh-10rem)]"
        >
          <Outlet />
        </motion.div>
      </main>
      
      <footer className="py-6 border-t border-gray-200/40 mt-auto">
        <div className="container-custom text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MelodyVerse - Watch and Sing Along
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;