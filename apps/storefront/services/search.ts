import { envVars } from "@/lib/env-vars";

const endpoint = `${envVars.STORE_PATH}/search/ajax/suggest/`;

export type SearchSuggestion = {
  title: string;
  num_results: string;
};

export async function getSearchSuggestions(query: string) {
  try {
    const url = new URL(endpoint, envVars.SHOWPO_URL);
    url.searchParams.set("q", query);

    const response = await fetch(url.toString(), {
      mode: "cors",
    });
    const result = await response.json();
    return result as SearchSuggestion[];
  } catch (error) {
    return [];
  }
}
