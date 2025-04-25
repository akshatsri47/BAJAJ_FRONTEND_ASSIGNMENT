import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const SortFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort');

  const handleSortChange = (value: string) => {
    if (value) {
      searchParams.set('sort', value);
    } else {
      searchParams.delete('sort');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium" data-testid="filter-header-sort">Sort by</h3>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
      <div className="space-y-2 mt-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="price-low-high"
            className="mr-2"
            checked={sort === 'fees'}
            onChange={() => handleSortChange('fees')}
            data-testid="sort-fees"
          />
          <label htmlFor="price-low-high" className="text-sm">Price - Low-High</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="experience-high-low"
            className="mr-2"
            checked={sort === 'experience'}
            onChange={() => handleSortChange('experience')}
            data-testid="sort-experience"
          />
          <label htmlFor="experience-high-low" className="text-sm">Experience - Most Experience first</label>
        </div>
      </div>
    </div>
  );
};

export default SortFilter;