import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { getMoviesByLanguage, getLanguageById } from '../data/dataService';
import { Movie } from '../data/types';

const MovieSelection: React.FC = () => {
  const { languageId } = useParams<{ languageId: string }>();
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [languageName, setLanguageName] = useState('');
  
  useEffect(() => {
    if (languageId) {
      const language = getLanguageById(languageId);
      setLanguageName(language?.name || '');
      
      const languageMovies = getMoviesByLanguage(languageId);
      setMovies(languageMovies);
    }
  }, [languageId]);
  
  const handleMovieSelect = (movieId: string) => {
    navigate(`/languages/${languageId}/movies/${movieId}`);
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
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2">{languageName} Movies</h1>
        <p className="text-gray-600">Select an album to browse songs</p>
      </div>
      
      {movies.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {movies.map((movie) => (
            <motion.div key={movie.id} variants={itemVariants}>
              <Card
                title={movie.name}
                imageUrl={movie.imageUrl}
                onClick={() => handleMovieSelect(movie.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="p-8 text-center">
          <p className="text-lg text-gray-500">No movies found for this language.</p>
        </div>
      )}
    </div>
  );
};

export default MovieSelection;