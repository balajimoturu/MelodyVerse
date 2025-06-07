import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { getLanguages } from '../data/dataService';

const LanguageSelection: React.FC = () => {
  const navigate = useNavigate();
  const languages = getLanguages();
  
  const handleLanguageSelect = (languageId: string) => {
    navigate(`/languages/${languageId}`);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  const getGradientColor = (index: number) => {
    const colors = [
      'bg-gradient-to-br from-primary-400 to-primary-600',
      'bg-gradient-to-br from-secondary-400 to-secondary-600',
      'bg-gradient-to-br from-accent-400 to-accent-600',
      'bg-gradient-to-br from-purple-400 to-purple-600',
      'bg-gradient-to-br from-pink-400 to-pink-600',
      'bg-gradient-to-br from-blue-400 to-blue-600',
    ];
    
    return colors[index % colors.length];
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">Select a Language</h1>
        <p className="text-gray-600">Choose a language to browse movies and songs</p>
      </div>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {languages.map((language, index) => (
          <motion.div key={language.id} variants={itemVariants}>
            <Card
              title={language.name}
              color={getGradientColor(index)}
              onClick={() => handleLanguageSelect(language.id)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LanguageSelection;