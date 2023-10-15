import React from 'react'
import styles from '@/styles/ProductsContainer.module.scss';
import ProductCard from './ProductCard';

function ProductsContainer({ products }) {
    return(
        <>
            <div className={styles.ProductsContainer}>
                {products.map((product) => {
                    return(
                        <>
                            <ProductCard 
                                key={product._id}
                                name={product.name}
                                thumbPic={product.thumbPic}
                                slug={product.slug}
                                setWidth={false}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default ProductsContainer