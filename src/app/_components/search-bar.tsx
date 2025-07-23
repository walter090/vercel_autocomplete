'use client';

import React, {useDeferredValue, useState} from "react";
import SearchResultList from "@/app/_components/results";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchTerm(value);
  }

  return (
    <div className="flex items-center justify-center w-full">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchInputChange}
        className="w-full max-w-md p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <SearchResultList searchQuery={deferredSearchTerm} />
    </div>
  );
}