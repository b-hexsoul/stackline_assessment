import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Product } from '../interfaces/products';
import { useMemo } from 'react';
import dayjs from 'dayjs';

function SalesChart({ product }: { product: Product }) {
  const formattedProduct = useMemo(() => {
    const dates = {} as Record<string, boolean>;
    return product.sales.map(sale => {
      const month = dayjs(sale.weekEnding).format('MMM')
      const dateToUse = !dates[month] ? month : '';
      dates[month] = true;
      return {
        ...sale,
        date: dateToUse,
      }
    });
  }, [product])

  return (
    <div className="bg-white p-6 w-full rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Retail Sales</h2>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={600}>
          <LineChart data={formattedProduct}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickFormatter={(tick: string) => tick.toUpperCase()}
            />
            <YAxis hide/>
            <Tooltip />
            <Line
              dot={false}
              dataKey="retailSales"
              stroke="#00bcd4"
              strokeWidth={2}
            />
            <Line
              dot={false}
              dataKey="retailerMargin"
              stroke="#9e9e9e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;