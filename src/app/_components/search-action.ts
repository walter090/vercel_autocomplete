"use server";

import {parseTextFile} from "@/app/_utils/parser";

export async function search(searchText: string): Promise<string[]> {
  // CHANGED to fetch word list from server action, avoiding passing it as a prop and arg
  const wordList = parseTextFile();

  if (!searchText) {
    return [];
  }

  return new Promise((resolve) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const results = wordList.filter(word => word.toLowerCase().includes(lowerCaseSearchText));
    resolve(results.slice(0, 10)); // CHANGED Return only the first 10 results
  });
}
