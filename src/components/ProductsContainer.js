import React from 'react'
import styles from '../styles/ProductsContainer.module.scss';
import ProductCard from './ProductCard';

function ProductsContainer() {
    let products = [
        {id: 1, name:"name1", pic:"https://picsum.photos/220/200?random=1", isEnabled:true},
        {id: 2, name:"name2", pic:"https://picsum.photos/220/200?random=2", isEnabled:true},
        {id: 3, name:"name3", pic:"https://picsum.photos/220/200?random=3", isEnabled:false},
        {id: 4, name:"name4", pic:"https://picsum.photos/220/200?random=4", isEnabled:true},
        {id: 5, name:"name5", pic:"https://picsum.photos/220/200?random=5", isEnabled:true},
        {id: 6, name:"name6", pic:"https://picsum.photos/220/200?random=6", isEnabled:true},
        {id: 7, name:"name7", pic:"https://picsum.photos/220/200?random=7", isEnabled:true},
    ];
    
    return(
        <>
            <div className={styles.ProductsContainer}>
                {products.map((product) => {
                    return(
                        <>
                            {product.isEnabled ?(
                                <ProductCard 
                                    key={product.id}
                                    name={product.name}
                                    pic={product.pic}
                                    isEnabled={product.isEnabled}
                                />
                            ): null}
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default ProductsContainer