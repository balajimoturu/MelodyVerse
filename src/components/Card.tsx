import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  imageUrl?: string;
  color?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const getImageForTitle = (title: string) => {
  switch (title.toLowerCase()) {
    case 'telugu': return 'https://i.pinimg.com/736x/02/ff/42/02ff427b34728ec6c62f311c9e914697.jpg';
    case 'tamil': return 'https://i.ytimg.com/vi/IND1tB-qsL0/maxresdefault.jpg';
    case 'hindi': return 'https://i.dawn.com/primary/2025/02/06135837fad5da9.png';
    //case 'hindi': return '/images/hindi.jpg';
    case 'bengali': return 'https://static-gi.asianetnews.com/images/01d5xyn5h8e8qgdqcp9199x2e2/Bengali-actress.jpg';
    case 'kannada': return 'https://images.indianexpress.com/2024/03/Puneeth-Rajkumar-edited.jpg?w=414';
    case 'malayalam': return 'https://www.onmanorama.com/content/dam/mm/en/entertainment/music/images/2015/Dec/21/charlie-dulquer-salmaan-new-song-gopi-sunder.jpg';
    case 'english': return 'https://media.pitchfork.com/photos/5929c5495e6ef95969323a9e/master/pass/c42867cb.jpg';
    case 'french': return 'https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/2/3/8/9782914333832/tsp20121001071405/Fais-comme-l-oiseau.jpg';
    case 'others': return 'https://img.freepik.com/premium-vector/music-note-with-smaller-musical-note-inside-creating-sleek-simple-logo-design-music-streaming-service-sleek-logo-design-modern-business-brand_585735-34615.jpg';
    default: return 'https://img.freepik.com/premium-vector/music-note-with-smaller-musical-note-inside-creating-sleek-simple-logo-design-music-streaming-service-sleek-logo-design-modern-business-brand_585735-34615.jpg';
  }
};

const placeholderImage = 'https://i.pinimg.com/736x/02/ff/42/02ff427b34728ec6c62f311c9e914697.jpg';

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  //color = 'bg-gradient-to-br from-primary-400 to-primary-600',
  onClick,
  children,
}) => {

  const finalImageUrl = imageUrl || getImageForTitle(title);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="h-32 sm:h-40 overflow-hidden">
          <img src={finalImageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1 truncate">{title}</h3>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;