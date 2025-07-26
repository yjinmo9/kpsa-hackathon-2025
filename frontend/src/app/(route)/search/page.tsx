import { MobileLayout } from '@/components/layout/MobileLayout';
import { StockChart } from '@/components/StockChart';

export default function SearchPage() {
  return (
    <MobileLayout type="back-search">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">주식 검색</h1>
        <StockChart stockCode="005930" />
      </div>
    </MobileLayout>
  );
}
