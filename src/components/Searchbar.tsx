// src/components/SearchBar.tsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Doctor } from '../types';
import { Search, ChevronRight } from 'lucide-react';

interface SearchBarProps {
  doctors: Doctor[];
  onDoctorSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ doctors, onDoctorSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') || '');
  const [suggestions, setSuggestions] = useState<Doctor[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = doctors
      .filter(doctor => 
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 3);
    
    setSuggestions(filtered);
  }, [searchQuery, doctors]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(true);
  };

  const handleSelectSuggestion = (doctorName: string) => {
    setSearchQuery(doctorName);
    setShowSuggestions(false);
    onDoctorSearch(doctorName);
    
    searchParams.set('search', doctorName);
    setSearchParams(searchParams);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDoctorSearch(searchQuery);
    setShowSuggestions(false);
    
    if (searchQuery) {
      searchParams.set('search', searchQuery);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          className="w-full p-3 border rounded-lg pl-4 pr-10"
          placeholder="Search Symptoms, Doctors, Specialties, Clinics"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          data-testid="autocomplete-input"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
        >
          <Search size={24} />
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-1">
          {suggestions.map((doctor) => (
            <div
              key={doctor.id}
              className="p-3 hover:bg-gray-100 cursor-pointer flex items-center border-b last:border-b-0"
              onClick={() => handleSelectSuggestion(doctor.name)}
              data-testid="suggestion-item"
            >
              <div className="w-16 h-16 mr-4 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
                {doctor.photo && (
                  <img 
                    src={doctor.photo} 
                    alt={doctor.name}
                    className="w-10 h-10 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=random`;
                    }}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{doctor.name}</div>
                <div className="text-sm text-gray-500 uppercase">
                  {doctor.specialities && doctor.specialities.length > 0 
                    ? doctor.specialities[0].name 
                    : ''}
                </div>
              </div>
              <div className="ml-auto text-gray-400">
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;