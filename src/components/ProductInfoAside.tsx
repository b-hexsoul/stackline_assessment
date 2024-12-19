import { Product } from "../interfaces/products";
import Pill from "./Pill";

function ProductInfoAside({ product }: { product: Product }) {
  return (
    <aside className='flex-col gap-4 max-w-[320px] bg-white rounded-md'>
      <div className='flex-col justify-items-center border-b border-gray-200 mt-5'>
        <img src={product.image} className='w-48 h-48 mb-4'/>
        <h2 className='font-bold text-xl mb-2'>{product.title}</h2>
        <p className="text-sm text-center text-gray-400 mb-4 mx-10">{product.subtitle}</p>
      </div>
      <div className='flex flex-wrap gap-3 p-4 border-b border-gray-200'>
        {product.tags.map(tag => {
          return (
            <Pill key={tag} text={tag} />
          )
        })}
      </div>
    </aside>
  )
}

export default ProductInfoAside;