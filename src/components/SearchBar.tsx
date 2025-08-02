import React from "react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <div className="my-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search doctors..."
        className="w-full px-4 py-2 text-sm rounded-lg border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
