import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSongById, getMovieById } from '../data/dataService';
import { Song } from '../data/types';

const SongPlayer: React.FC = () => {
  const { songId } = useParams<{ songId: string }>();
  const [song, setSong] = useState<Song | null>(null);
  const [movieName, setMovieName] = useState('');
  
  useEffect(() => {
    if (songId) {
      const foundSong = getSongById(songId);
      if (foundSong) {
        setSong(foundSong);
        
        const movie = getMovieById(foundSong.movieId);
        setMovieName(movie?.name || '');
      }
    }
  }, [songId]);
  
  if (!song) {
    return (
      <div className="p-8 text-center">
        <p className="text-lg text-gray-500">Loading song...</p>
      </div>
    );
  }
  
  const formatLyrics = (lyrics: string) => {
    return lyrics.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line || <br />}
        <br />
      </React.Fragment>
    ));
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-1">{song.name}</h1>
        <p className="text-gray-600">From {movieName}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="aspect-video relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=0`}
              title={song.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 max-h-[500px] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Lyrics</h3>
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">
              {formatLyrics(song.lyrics)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;