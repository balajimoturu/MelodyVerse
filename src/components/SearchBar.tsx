import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchSongs } from '../data/dataService';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  name: string;
  type: 'language' | 'movie' | 'song';
  languageId?: string;
  movieId?: string;
  path: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length >= 2) {
      const searchResults = searchSongs(value);
      setResults(searchResults);
      setIsSearching(true);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  };
  
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsSearching(false);
  };
  
  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    clearSearch();
  };
  
  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search songs, movies, languages..."
          value={query}
          onChange={handleSearch}
          className="pl-10 pr-10 py-2 w-100 rounded-full border border-gray-300 focus:ring-2 focus:ring-primary-400 focus:border-transparent"
        />
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        />
        {query && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
      </div>
      
      <AnimatePresence>
        {isSearching && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white rounded-lg shadow-lg z-20"
          >
            <div className="p-2">
              {results.map((result) => (
                <div
                  key={`${result.type}-${result.id}`}
                  className="p-3 hover:bg-gray-100 rounded-md cursor-pointer transition-colors"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="flex items-center">
                    <div className="mr-3">
                      {result.type === 'language' && (
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-primary-700">{result.name.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}
                      {result.type === 'movie' && (
                        <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-secondary-700">{result.name.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}
                      {result.type === 'song' && (
                        <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-accent-700">{result.name.substring(0, 2).toUpperCase()}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{result.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{result.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;