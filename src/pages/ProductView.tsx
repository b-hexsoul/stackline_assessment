import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store/store';
import { fetchProduct } from '../redux/slices/productSlice';
import Logo from '../assets/stackline_logo.svg?react';
import SalesChart from '../components/SalesChart';
import ProductTable from '../components/ProductTable';
import ProductInfoAside from '../components/ProductInfoAside';

function ProductView() {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    function fetchData() {
      setTimeout(() => {
        dispatch(fetchProduct());
      }, 500)
    }
    if (!products.length) {
      fetchData();
    }
  }, [dispatch, products]);

  if (loading || !products.length) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='h-screen flex-col'>
      <nav className="bg-stackline-navy-blue w-full flex-start p-8 fixed top-0 z">
        <Logo className="h-8 w-auto text-white" />
      </nav>

      <section className='flex flex-grow gap-4 mt-[74px] px-4 pt-10 bg-gray-100 overflow-y-scroll'>
        <ProductInfoAside product={products[0]} />

        <div className='flex-col w-full min-h-[700px]'>
          <SalesChart product={products[0]} />
          <ProductTable product={products[0]} />
        </div>
      </section>
    </div>
  );
}

export default ProductView;