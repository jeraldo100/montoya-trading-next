import React from 'react'
import client from '@/components/sanity.client';
import ProductInfo from '@/components/ProductInfo';

async function ProductPage({ params }) {
 	const product = await GetProductInfo( params )
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.name,
		image: product.thumbPic,
		description: product.description
	};
  return (
      <>
			<ProductInfo 
				product = {product}
			/>
			<section>
				{/* Structured data for SEO */}
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</section>
      </>
  )
}

// Generate Metadata for products
export async function generateMetadata({ params }){
	const product = await client.fetch(
		`*[_type == "products" && slug.current == '${ params.slug }']{
			name,
			description,
			"thumbPic": thumbPic.asset->url,
		}[0]`
	);
	const productName = `${product.name}|Montoya Trading`;
	const productDescription = product.description.slice(0, 160);
	const productImg = `${product.thumbpic}?q=25`
	return {
		title: productName,
		description: productDescription,
		openGraph: {
			title: productName,
			description: productDescription,
			url: `https://montoya-trading-next.vercel.app/Products/${ params.slug }`,
		}
	}
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
    const product = await client.fetch(
		`*[_type == "products" && slug.current == '${ params.slug }']{
			_id,
			name,
			"thumbPic": thumbPic.asset->url,
			brand,
			description,
			"specs": specs[]{specType, specVal},
			"packagedIn": *[_type=='packages' && references(^._id)] | order(_createdAt desc){
				"key": _id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
				description,
				"inclusionsCount": count(inclusions),
			}[0...5]
		}[0]`
	);
  
    return product
}

export default ProductPage