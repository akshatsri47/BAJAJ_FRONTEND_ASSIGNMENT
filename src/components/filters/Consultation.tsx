import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const ConsultationFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const consultation = searchParams.get('consultation');

  const handleConsultationChange = (value: string) => {
    if (value === 'all') {
      searchParams.delete('consultation');
    } else {
      searchParams.set('consultation', value);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="p-4 border-b">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium" data-testid="filter-header-moc">Mode of consultation</h3>
        <ChevronDown size={16} className="text-gray-500" />
      </div>
      <div className="space-y-2 mt-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="video-consult"
            className="mr-2"
            checked={consultation === 'video'}
            onChange={() => handleConsultationChange('video')}
            data-testid="filter-video-consult"
          />
          <label htmlFor="video-consult" className="text-sm">Video Consultation</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="in-clinic"
            className="mr-2"
            checked={consultation === 'clinic'}
            onChange={() => handleConsultationChange('clinic')}
            data-testid="filter-in-clinic"
          />
          <label htmlFor="in-clinic" className="text-sm">In-clinic Consultation</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="all"
            className="mr-2"
            checked={!consultation}
            onChange={() => handleConsultationChange('all')}
            data-testid="filter-all-consult"
          />
          <label htmlFor="all" className="text-sm">All</label>
        </div>
      </div>
    </div>
  );
};

export default ConsultationFilter;