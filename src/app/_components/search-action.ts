"use server";

import {parseTextFile} from "@/app/_utils/parser";

export async function search(searchText: string): Promise<string[]> {
  // changed to fetch word list from server action, avoiding passing it as a prop and arg
  const wordList = parseTextFile();

  if (!searchText) {
    return [];
  }

  const lowerCaseSearchText = searchText.toLowerCase();
  const results = wordList.filter(word => word.toLowerCase().includes(lowerCaseSearchText));
  return new Promise((resolve) => {
      resolve(results);
  });
}
