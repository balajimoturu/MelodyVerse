import { languages, movies, songs } from './mockData';
import { Language, Movie, Song } from './types';

export const getLanguages = (): Language[] => {
  return languages;
};

export const getMoviesByLanguage = (languageId: string): Movie[] => {
  return movies.filter(movie => movie.languageId === languageId);
};

export const getSongsByMovie = (movieId: string): Song[] => {
  return songs.filter(song => song.movieId === movieId);
};

export const getSongById = (songId: string): Song | undefined => {
  return songs.find(song => song.id === songId);
};

export const getLanguageById = (languageId: string): Language | undefined => {
  return languages.find(language => language.id === languageId);
};

export const getMovieById = (movieId: string): Movie | undefined => {
  return movies.find(movie => movie.id === movieId);
};

export const searchSongs = (query: string) => {
  const normalizedQuery = query.toLowerCase();
  const results = [];
  
  // Search languages
  const matchedLanguages = languages.filter(language => 
    language.name.toLowerCase().includes(normalizedQuery)
  );
  
  results.push(
    ...matchedLanguages.map(language => ({
      id: language.id,
      name: language.name,
      type: 'language' as const,
      path: `/languages/${language.id}`
    }))
  );
  
  // Search movies
  const matchedMovies = movies.filter(movie => 
    movie.name.toLowerCase().includes(normalizedQuery)
  );
  
  results.push(
    ...matchedMovies.map(movie => ({
      id: movie.id,
      name: movie.name,
      type: 'movie' as const,
      languageId: movie.languageId,
      path: `/languages/${movie.languageId}/movies/${movie.id}`
    }))
  );
  
  // Search songs
  const matchedSongs = songs.filter(song => 
    song.name.toLowerCase().includes(normalizedQuery) ||
    song.lyrics.toLowerCase().includes(normalizedQuery)
  );
  
  results.push(
    ...matchedSongs.map(song => {
      const movie = movies.find(m => m.id === song.movieId);
      return {
        id: song.id,
        name: song.name,
        type: 'song' as const,
        languageId: movie?.languageId,
        movieId: song.movieId,
        path: `/languages/${movie?.languageId}/movies/${song.movieId}/songs/${song.id}`
      };
    })
  );
  
  return results;
};