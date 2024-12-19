export interface ProductState {
  products: Product[];
  currentProduct?: Product;
  loading: boolean;
  error: string | null;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: ProductReview[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: ProductSale[];
}

export interface ProductSale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface ProductReview {
  customer: string;
  review: string;
  score: number;
}
