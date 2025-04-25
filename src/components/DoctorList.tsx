// src/components/DoctorList.tsx
import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import DoctorCard from './DoctorCard';
import { Doctor } from '../types';

interface DoctorListProps {
  doctors: Doctor[];
}

// Helper functions to improve readability
const extractNumber = (str: string): number => {
  const matched = str.match(/\d+/);
  return matched ? parseInt(matched[0], 10) : 0;
};

const DoctorList: React.FC<DoctorListProps> = ({ doctors }) => {
  const [searchParams] = useSearchParams();
  
  const filteredDoctors = useMemo(() => {
    // Apply filters in a more functional programming style
    return doctors
      .filter(doctor => {
        // Search filter
        const searchQuery = searchParams.get('search');
        if (searchQuery && !doctor.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
        
        // Consultation type filter
        const consultation = searchParams.get('consultation');
        if (consultation === 'video' && !doctor.video_consult) {
          return false;
        }
        if (consultation === 'clinic' && !doctor.in_clinic) {
          return false;
        }
        
        // Specialties filter
        const specialtiesParam = searchParams.get('specialties');
        if (specialtiesParam) {
          const specialties = specialtiesParam.split(',');
          const hasMatchingSpecialty = specialties.some(specialty => 
            doctor.specialities.some(spec => spec.name === specialty)
          );
          if (!hasMatchingSpecialty) {
            return false;
          }
        }
        
        return true;
      })
      .sort((a, b) => {
       
        const sort = searchParams.get('sort');
        if (sort === 'fees') {
          return extractNumber(a.fees) - extractNumber(b.fees);
        } 
        if (sort === 'experience') {
          return extractNumber(b.experience) - extractNumber(a.experience);
        }
        return 0; // Default no sorting
      });
  }, [doctors, searchParams]);

  if (filteredDoctors.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <p>No doctors found matching your criteria. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredDoctors.map(doctor => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;