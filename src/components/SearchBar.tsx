// src/components/SearchBar.tsx
import { FC } from 'react';

interface Props {
  onChange: (val: string) => void;
}

const SearchBar: FC<Props> = ({ onChange }) => {
  return (
    <div className="fixed top-5 right-5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center z-50 shadow-lg">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-white placeholder-white text-sm outline-none w-32 md:w-64"
        onChange={(e) => onChange(e.target.value)}
      />
      <i className="fas fa-search text-white ml-2"></i>
    </div>
  );
};

export default SearchBar;
