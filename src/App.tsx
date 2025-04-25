import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { Doctor } from './types';
import SearchBar from './components/Searchbar';
import FilterPanel from './components/FilterPanel';
import DoctorList from './components/DoctorList';

const Main: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<Doctor[]>('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json'); // Replace with actual API URL
        setDoctors(response.data);
      } catch (err) {
        setError('Failed to fetch doctors. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);
  
  const handleDoctorSearch = (_query: string) => {
    // Function implementation is elsewhere
    // Using underscore prefix to indicate parameter is intentionally unused
  };

  return (
    <div className="min-h-screen bg-gray-100">
     
      <header className="bg-blue-600 p-4">
        <SearchBar doctors={doctors} onDoctorSearch={handleDoctorSearch} />
      </header>

      <main className="flex p-4 max-w-7xl mx-auto">
        {loading && (
          <div className="w-full text-center py-4">
            <p>Loading doctors...</p>
          </div>
        )}
        
        {error && (
          <div className="w-full text-center py-4 text-red-600">
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <>
            <aside className="w-1/4 mr-4">
              <FilterPanel doctors={doctors} />
            </aside>
            <section className="w-3/4">
              <DoctorList doctors={doctors} />
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Main;