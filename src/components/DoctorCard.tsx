import React from 'react';
import { Doctor } from '../types';
import { VideoIcon, Building, MapPin } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4" data-testid="doctor-card">
      <div className="flex">
        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
          <img 
            src={doctor.photo} 
            alt={doctor.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/api/placeholder/80/80";
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-blue-800" data-testid="doctor-name">{doctor.name}</h3>
          <p className="text-sm text-gray-600" data-testid="doctor-specialty">
            {doctor.specialities.map(spec => spec.name).join(', ')}
          </p>
          <p className="text-sm text-gray-600 mt-1" data-testid="doctor-experience">
            {doctor.experience}
          </p>
        </div>
      </div>

      <div className="mt-4 flex">
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex items-start">
              <Building className="h-4 w-4 text-gray-500 mt-0.5 mr-1" />
              <div className="text-xs">
                <p>{doctor.clinic.name}</p>
              </div>
            </div>
            <div className="flex items-start ">
              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 mr-1 " />
              <p className="text-xs text-gray-500">{doctor.clinic.address.locality}, {doctor.clinic.address.city}</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold" data-testid="doctor-fee">{doctor.fees}</p>
          <button 
            className="bg-blue-600 text-white text-sm py-1 px-4 rounded mt-2"
            data-testid="book-appointment-button"
          >
            Book Appointment
          </button>
        </div>
      </div>
      
      <div className="mt-3 flex gap-2">
        {doctor.video_consult && (
          <span 
            className="inline-flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
            data-testid="video-consult-badge"
          >
            <VideoIcon className="h-3 w-3 mr-1" />
            Video Consult
          </span>
        )}
        {doctor.in_clinic && (
          <span 
            className="inline-flex items-center text-xs bg-green-50 text-green-700 px-2 py-1 rounded"
            data-testid="in-clinic-badge"
          >
            <MapPin className="h-3 w-3 mr-1 " />
            In-Clinic
          </span>
        )}  
      </div>
    </div>
  );
};

export default DoctorCard;