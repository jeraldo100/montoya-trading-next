import React from 'react'
import client from '@/components/sanity.client';
import ProductInfo from '@/components/ProductInfo';

async function ProductPage({ params }) {
  const product = await GetProductInfo( params )

  return (
      <>
          <ProductInfo 
            product = {product}
          />
      </>
  )
}

//Statically generate routes at build time instead of on-demand at request time
export async function generateStaticParams() {
	const query = `*[_type == "products"]{
		slug {
			current
		}
	}`;
	const productLists = await client.fetch(query);

	return productLists.map((productList) => ({
		slug: productList.slug.current,
	}))
}
 
// Fetching Data of product from Sanity 
export async function GetProductInfo( params ){
    const query = `*[_type == "products" && slug.current == '${ params.slug }']{
		_id,
		name,
		"thumbPic": thumbPic.asset->url,
		brand,
		description,
		"specs": specs[]{specType, specVal}
    }[0]`;
    
    const product = await client.fetch(query);
  
    return product
}

export default ProductPage