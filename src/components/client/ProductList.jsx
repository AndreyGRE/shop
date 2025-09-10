import React from "react";
import Product from '@/components/client/Product'

const ProductList = ({products}) => {
    return (
        <div className="flex flex-wrap gap-5 mt-6 max-w-7xl mx-auto px-3 md:px-0">
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductList;
