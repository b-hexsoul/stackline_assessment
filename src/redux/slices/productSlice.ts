import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product, ProductState } from '../../interfaces/products';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (): Promise<Product[]> => {
    const response = await fetch('/stackline_frontend_assessment_data_2021.json?url');
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    return response.json() as Promise<Product[]>;
  }
);

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
        state.error = 'An error occurred';
      });
  }
});

export default productSlice.reducer;