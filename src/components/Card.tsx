import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  imageUrl?: string;
  color?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  color = 'bg-gradient-to-br from-primary-400 to-primary-600',
  onClick,
  children,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="h-32 sm:h-40 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full ${color} flex items-center justify-center`}>
            <span className="text-3xl font-bold text-white">{title.substring(0, 1).toUpperCase()}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1 truncate">{title}</h3>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;