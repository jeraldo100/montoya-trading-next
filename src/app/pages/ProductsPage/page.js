import React from 'react'
import styles from '@/styles/PagesCSS/ProductsPage.module.scss'
import ProductsContainer from '@/components/ProductsContainer'
import client from '@/components/sanity.client';


async function ProductsPage() {
  const products = await GetProducts();

  return (
    <>
		<div className={styles.ProductsPageContainer}>
			<ProductsContainer
				products = {products}
			/>
		</div>
    </>
  )
}

//Getting product list Query
export async function GetProducts(){
  const products = await client.fetch(`*[_type == "products"]{
		_id,
		name,
		"slug": slug.current,
		"thumbPic": thumbPic.asset->url,
    }`);
  return products
}

export default ProductsPage