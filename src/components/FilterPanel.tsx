// src/components/Filters/FilterPanel.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SortFilter from './filters/Sort';
import SpecialtyFilter from './filters/Speciality';
import ConsultationFilter from './filters/Consultation';
import { Doctor } from '../types/index';

interface FilterPanelProps {
  doctors: Doctor[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({ doctors }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const clearAllFilters = () => {
    const search = searchParams.get('search');
    setSearchParams(search ? { search } : {});
  };

  const hasActiveFilters = searchParams.has('consultation') || 
                          searchParams.has('specialties') || 
                          searchParams.has('sort');

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <SortFilter />
      
      <div className="mt-4">
        <div className="flex justify-between items-center px-4 py-2">
          <h2 className="font-medium">Filters</h2>
          {hasActiveFilters && (
            <button 
              onClick={clearAllFilters}
              className="text-blue-600 text-sm"
            >
              Clear All
            </button>
          )}
        </div>
        
        <SpecialtyFilter doctors={doctors} />
        <ConsultationFilter />
      </div>
    </div>
  );
};

export default FilterPanel;