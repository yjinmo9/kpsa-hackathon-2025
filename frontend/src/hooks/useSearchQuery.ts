import { useMutation, UseMutationResult } from '@tanstack/react-query'

import axios from "axios";

interface SearchResponse {
  company: string
  technology: string[]
}

interface SearchMutationVariables {
  query: string
}


// Constants and utility functions defined at the top
const SEARCH_API_URL = '/api/search'

const createSearchUrl = (query?: string): string => {
  const url = new URL(SEARCH_API_URL, window.location.origin)
  
  if (query) {
    url.searchParams.set('q', query)
  }
  
  return url.toString()
}

const searchFetcher = async (url: string): Promise<SearchResponse> => {
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error(`Failed to fetch search data: ${response.statusText}`)
  }
  
  return response.json()
}

/**
 * Custom hook to perform search mutation
 */
export function useSearchQuery() {
  return useMutation<SearchResponse, Error, SearchMutationVariables>({
    mutationFn: async ({ query }) => {
      const res = await axios.post("/api/search", { query })
      return res.data
    },
    retry: 1,
  })
}

/**
 * Simple version for basic search without parameters
 */
export function useBasicSearchQuery(): UseMutationResult<SearchResponse, Error, void> {
  return useMutation({
    mutationFn: async (): Promise<SearchResponse> => {
      const url = createSearchUrl()
      return searchFetcher(url)
    },
    retry: 1,
  })
} 
