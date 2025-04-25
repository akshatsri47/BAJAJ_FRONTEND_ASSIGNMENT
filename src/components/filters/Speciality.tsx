import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Doctor } from '../../types';
import { ChevronDown, Search } from 'lucide-react';

interface SpecialtyFilterProps {
  doctors: Doctor[];
}

const SpecialtyFilter: React.FC<SpecialtyFilterProps> = ({ doctors }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [searchSpecialty, setSearchSpecialty] = useState<string>('');

  useEffect(() => {
    const allSpecialties = doctors.flatMap(doctor => 
      doctor.specialities.map(spec => spec.name)
    );
    const uniqueSpecialties = Array.from(new Set(allSpecialties)).sort();
    setSpecialties(uniqueSpecialties);
  }, [doctors]);

  const selectedSpecialties = searchParams.get('specialties')?.split(',') || [];

  const handleSpecialtyChange = (specialty: string) => {
    let updatedSpecialties: string[];
    
    if (selectedSpecialties.includes(specialty)) {
      updatedSpecialties = selectedSpecialties.filter(s => s !== specialty);
    } else {
      updatedSpecialties = [...selectedSpecialties, specialty];
    }
    
    if (updatedSpecialties.length > 0) {
      searchParams.set('specialties', updatedSpecialties.join(','));
    } else {
      searchParams.delete('specialties');
    }
    setSearchParams(searchParams);
  };

  const filteredSpecialties = specialties.filter(specialty => 
    specialty.toLowerCase().includes(searchSpecialty.toLowerCase())
  );

  return (
    <div className="p-4 border-b">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium" data-testid="filter-header-speciality">Specialities</h3>
        <ChevronDown size={16} className="text-gray-500" />
      </div>
      <div className="relative mt-2 mb-3">
        <input
          type="text"
          className="w-full pl-8 pr-2 py-1 border rounded-md text-sm"
          placeholder="Search"
          value={searchSpecialty}
          onChange={(e) => setSearchSpecialty(e.target.value)}
          data-testid="filter-specialty-search-input"
        />
        <Search className="h-4 w-4 text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2" />
      </div>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {filteredSpecialties.map((specialty) => {
          const testIdSpecialty = specialty.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
          return (
            <div key={specialty} className="flex items-center">
              <input
                type="checkbox"
                id={`specialty-${testIdSpecialty}`}
                className="mr-2"
                checked={selectedSpecialties.includes(specialty)}
                onChange={() => handleSpecialtyChange(specialty)}
                data-testid={`filter-specialty-${testIdSpecialty}`}
              />
              <label htmlFor={`specialty-${testIdSpecialty}`} className="text-sm">{specialty}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialtyFilter;