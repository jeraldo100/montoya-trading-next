import './globals.scss'
import styles from '@/styles/PagesCSS/Home.module.scss'
import client from '@/components/sanity.client';
import Link from 'next/link'
import HorizontalProductsContainer from '@/components/HorizontalProductsContainer';
import HomeCarousel from '@/components/HomeCarousel'
import { GetHomeCarouselPics } from "@/components/GetHomeCarouselPics.query";
import { roboto300, roboto500, roboto700 } from './fonts';
import { BiSolidChevronsRight } from "react-icons/bi";

async function Home() {
	const products = await GetProducts()

	return (
		<main>
			<HomeCarousel 
				homeCarouselPics={homeCarouselPics}
			/>
			<div className={styles.newArrivalsContainer}>
				<div className={styles.newArrivalsHeader}>
					<h1 className={`${styles.newArrivalsText} ${roboto500.className}`}>New Arrivals</h1>
					<Link 
						href="/pages/ProductsPage" 
						className={`${styles.viewMore} ${roboto300.className}`}>
							View More <BiSolidChevronsRight className={styles.icons} />
					</Link>
				</div>
				
				<HorizontalProductsContainer 
					products={products}
				/>
			</div>
		</main>
	)
}

//Getting product list Query
export async function GetProducts(){
	const products = await client.fetch(`*[_type == "products"] | order(_createdAt desc){
		_id,
		name,
		"slug": slug.current,
		"thumbPic": thumbPic.asset->url,
	}[0...10]`);
	return products
}

const homeCarouselPics = await GetHomeCarouselPics();

export default Home
