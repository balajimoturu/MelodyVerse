import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import EntryPage from './pages/EntryPage';
import LanguageSelection from './pages/LanguageSelection';
import MovieSelection from './pages/MovieSelection';
import SongSelection from './pages/SongSelection';
import SongPlayer from './pages/SongPlayer';

// Layout
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route element={<Layout />}>
            <Route path="/languages" element={<LanguageSelection />} />
            <Route path="/languages/:languageId" element={<MovieSelection />} />
            <Route path="/languages/:languageId/movies/:movieId" element={<SongSelection />} />
            <Route path="/languages/:languageId/movies/:movieId/songs/:songId" element={<SongPlayer />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;