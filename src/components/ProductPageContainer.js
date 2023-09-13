import React from 'react'
import styles from '../styles/ProductPageContainer.module.scss'

function ProductPageContainer() {

    const product = {id: 1, name:"name1", pic:"https://picsum.photos/220/200?random=1", brand: "brand"};
    const productSpecs =[
        {specType: "Processor Type", specVal: "box"},
        {specType: "Series", specVal: "Ryzen 5 5600G"},
        {specType: "CPU Socket Type", specVal: "Socket AM4"}
    ];

    return (
        <>
            <div className={styles.productContainer}>
                <div className={styles.layer1}>
                    <img className={styles.image} src={product.pic} />
                    <div className={styles.layer2}>
                        <h1 className={styles.prodName}>{product.name}</h1>
                        <h2 className={styles.prodBrand}>{product.brand}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageContainer