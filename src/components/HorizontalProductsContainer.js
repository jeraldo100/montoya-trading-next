import React from 'react'
import styles from '@/styles/HorizontalProductsContainer.module.scss'
import ProductCard from './ProductCard'

function HorizontalProductsContainer({ products }) {
	return (
		<div className={styles.container}>
			{products.map((product) => {
				return(
					<ProductCard 
						key={product.key}
						name={product.name}
						thumbPic={product.thumbPic}
						slug={product.slug}
						setWidth={true}
					/>
				)
			})}
		</div>
	)
}

export default HorizontalProductsContainer