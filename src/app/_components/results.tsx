import {search} from "@/app/_components/search-action";
import {useEffect, useState} from "react";

export default function SearchResultList({searchQuery}: { searchQuery: string }) {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (searchQuery) {
      search(searchQuery).then(setResults);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="flex items-center justify-center w-full max-h-30">
      <div className="w-full max-w-md p-4 border border-gray-300 rounded bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
        {results.length > 0 ? (
          <ul className="list-disc pl-5">
            {results.map((result, index) => (
              <li onClick={() => console.log(result)} key={index} className="mb-2 text-gray-700">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}