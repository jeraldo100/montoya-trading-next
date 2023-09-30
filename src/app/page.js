// import styles from './page.module.css'
import './globals.scss'
import client from '@/components/sanity.client';
import ProductsContainer from '@/components/ProductsContainer'
import HomeCarousel from '@/components/HomeCarousel'
import { GetHomeCarouselPics } from "@/components/GetHomeCarouselPics.query";

async function Home() {
	const products = await GetProducts()

	return (
		<main>
			<HomeCarousel 
				homeCarouselPics={homeCarouselPics}
			/>
			<div style={{margin: '24px'}}>
				<ProductsContainer
					products={products}
				/>
			</div>
		</main>
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

const homeCarouselPics = await GetHomeCarouselPics();

export default Home
