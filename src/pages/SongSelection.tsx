import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { getSongsByMovie, getMovieById } from '../data/dataService';
import { Song } from '../data/types';
import { Music } from 'lucide-react';

const SongSelection: React.FC = () => {
  const { languageId, movieId } = useParams<{ languageId: string, movieId: string }>();
  const navigate = useNavigate();
  const [songs, setSongs] = useState<Song[]>([]);
  const [movieName, setMovieName] = useState('');
  
  useEffect(() => {
    if (movieId) {
      const movie = getMovieById(movieId);
      setMovieName(movie?.name || '');
      
      const movieSongs = getSongsByMovie(movieId);
      setSongs(movieSongs);
    }
  }, [movieId]);
  
  const handleSongSelect = (songId: string) => {
    navigate(`/languages/${languageId}/movies/${movieId}/songs/${songId}`);
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
        <h1 className="mb-2">Songs from {movieName}</h1>
        <p className="text-gray-600">Select a song to watch and sing along</p>
      </div>
      
      {songs.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {songs.map((song) => (
            <motion.div key={song.id} variants={itemVariants}>
              <Card
                title={song.name}
                imageUrl={song.imageUrl}
                onClick={() => handleSongSelect(song.id)}
              >
                <div className="flex items-center mt-2">
                  <Music size={16} className="text-accent-500 mr-2" />
                  <span className="text-sm text-gray-500">Play song</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="p-8 text-center">
          <p className="text-lg text-gray-500">No songs found for this movie.</p>
        </div>
      )}
    </div>
  );
};

export default SongSelection;