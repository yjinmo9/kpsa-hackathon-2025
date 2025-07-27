import { useMutation, UseMutationResult } from '@tanstack/react-query'

import axios from "axios";

// 새로운 API 응답 타입
interface SearchResponse {
  type: 'abouttech'
  data: {
    company: string
    industry: string
    pipeline: string
    products: string
    tech_codes: string
    advantage: string
    summary: string
    abouttech: string[]
  }
}

interface SearchMutationVariables {
  query: string
}

// Constants and utility functions updated for new API
const SEARCH_API_URL = '/api/search'

const createSearchUrl = (query?: string): string => {
  const url = new URL(SEARCH_API_URL, window.location.origin)
  return url.toString()
}

const searchFetcher = async (url: string, query: string): Promise<SearchResponse> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
  
  if (!response.ok) {
    throw new Error(`Failed to fetch search data: ${response.statusText}`)
  }
  
  return response.json()
}

/**
 * Custom hook to perform search mutation using the new API
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
      throw new Error('Basic search requires a query parameter')
    },
    retry: 1,
  })
} 
