import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductState } from '../../interfaces/products';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    const data = await import('../../../public/stackline_frontend_assessment_data_2021.json')
    return data.default;
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
        console.log('fulfilled?');
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        console.log('error?');
        state.loading = false;
        state.error = 'An error occurred';
      });
  }
});

export default productSlice.reducer;