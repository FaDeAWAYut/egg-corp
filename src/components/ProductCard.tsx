import React from 'react';
import Image from 'next/image';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;

}

const ProductCard: React.FC<ProductCardProps> = ({ product}) => {
  return (
      <div className="flex flex-col md:flex-row bg-[#E1DDD5] bg-opacity-30 rounded-3xl shadow-md overflow-hidden mb-10 min-h-80 mx-auto w-[95%]">
      {/* Image container - full width on mobile, 1/3 on larger screens */}
      <div className="flex w-full md:w-1/3 h-full relative items-center justify-center">
        <div className="w-2/3 md:w-full"> {/* Container for responsive width control */}
          <Image 
            src={product.imageUrl} 
            alt={product.name}
            width={400}
            height={300}
            className="object-contain w-full h-full mx-auto" /* mx-auto for horizontal centering */
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>
      </div>
      
      {/* Content container - full width on mobile, 2/3 on larger screens */}
      <div className="w-full md:w-2/3 p-4 sm:p-6 flex flex-col h-full justify-center"> {/* Added flex layout */}
        <div>
          <h3 className="font-kanit text-xl sm:text-2xl font-semibold text-[#005844] mb-2">
            {product.name}
          </h3>
          <p className="font-kanit text-gray-700 mb-4 whitespace-pre-line">
            {product.briefDescription}
          </p>
        </div>
        <div className="mb-4">
          <h4 className="font-kanit font-medium text-gray-900">ขนาด:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.sizes.map((size, index) => (
              <span 
                key={index}
                className="font-kanit bg-[#005844] text-white px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;