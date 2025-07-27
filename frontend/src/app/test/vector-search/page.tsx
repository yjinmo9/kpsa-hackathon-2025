'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SearchResult {
  companyName: string;
  score: number;
  industry: string;
  technologies: string[];
  description: string;
}

export default function VectorSearchTestPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/company-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          topK: 5
        }),
      });
      
      if (!response.ok) {
        throw new Error('검색 실패');
      }
      
      const data = await response.json();
      setResults(data.results);
    } catch (err) {
      setError('검색 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">벡터 검색 테스트</h1>
      
      <div className="flex gap-4 mb-8">
        <Input
          placeholder="검색어를 입력하세요 (예: ADC 치료제, CAR-T, 바이오시밀러)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-1"
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? '검색 중...' : '검색'}
        </Button>
      </div>
      
      {error && (
        <div className="text-red-600 mb-4">{error}</div>
      )}
      
      <div className="space-y-4">
        {results.map((result, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{result.companyName}</CardTitle>
                  <CardDescription>{result.industry}</CardDescription>
                </div>
                <Badge variant="secondary">
                  유사도: {(result.score * 100).toFixed(1)}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">{result.description}</p>
              <div className="flex flex-wrap gap-2">
                {result.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {results.length === 0 && !loading && query && (
        <div className="text-center text-gray-500 mt-8">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
} 