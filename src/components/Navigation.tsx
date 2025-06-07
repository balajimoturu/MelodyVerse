import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Music, ChevronLeft, Home } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="flex items-center space-x-4">
      {location.pathname !== '/languages' && (
        <button 
          onClick={handleBack}
          className="btn btn-ghost p-2 rounded-full"
          aria-label="Go back"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      
      <Link to="/" className="flex items-center space-x-2">
        <Music size={24} className="text-primary-600" />
        <span className="font-semibold text-lg text-primary-700">MelodyVerse</span>
      </Link>
      
      {pathSegments.length > 0 && (
        <div className="hidden md:flex items-center text-sm text-gray-500">
          <Link to="/languages" className="hover:text-primary-600">
            <Home size={16} className="inline mr-1" />
            Languages
          </Link>
          
          {pathSegments.length > 1 && pathSegments[0] === 'languages' && (
            <>
              <span className="mx-2">/</span>
              <Link 
                to={`/languages/${pathSegments[1]}`}
                className="hover:text-primary-600 capitalize"
              >
                {decodeURIComponent(pathSegments[1])}
              </Link>
            </>
          )}
          
          {pathSegments.length > 3 && pathSegments[2] === 'movies' && (
            <>
              <span className="mx-2">/</span>
              <Link 
                to={`/languages/${pathSegments[1]}/movies/${pathSegments[3]}`}
                className="hover:text-primary-600 capitalize"
              >
                {decodeURIComponent(pathSegments[3])}
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;