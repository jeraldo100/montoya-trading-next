import './globals.scss'
import styles from '@/styles/PagesCSS/Home.module.scss'
import client from '@/components/sanity.client';
import Link from 'next/link'
import HomeCarousel from '@/components/HomeCarousel'
import HorizontalProductsContainer from '@/components/HorizontalProductsContainer';
import PackageCardsContainer from '@/components/PackageCardsContainer';
import { roboto300, roboto500, roboto700 } from './fonts';
import { BiSolidChevronsRight } from "react-icons/bi";

async function Home() {
	const homeQuery = await getHomeQuery()

	return (
		<main>
			<HomeCarousel 
				homeCarouselPics={homeQuery.homeCarouselPics}
			/>
			{/* Headline Conatainer */}
			<div className={styles.headline}>
				<div className={`${styles.headlineHeader} ${roboto700.className}`}>
					The Best Provider for POS system goods in the Philippines
				</div>
				<br />
				<div className={`${styles.headlineBody} ${roboto300.className}`}>
					<div className={styles.headlineBodyText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl sem, congue vel lacus sit amet, cursus imperdiet ligula. Vestibulum id augue vel augue vestibulum dignissim. Mauris interdum justo in augue lacinia, a finibus metus porta. Phasellus sem felis, porttitor sit amet arcu vel, luctus finibus nibh. Phasellus ultrices congue congue. Proin hendrerit fringilla libero eu pharetra. Aliquam turpis tellus, tincidunt sed velit non, suscipit elementum est. Sed iaculis, ligula vitae lobortis feugiat, magna elit bibendum turpis, quis tincidunt augue justo sed lorem. Integer sit amet nunc malesuada, aliquam nulla sed, placerat ante. Pellentesque vestibulum sit amet nibh sit amet congue. Aliquam laoreet, magna sit amet accumsan consequat, lacus nulla ornare dui, et molestie enim mi non augue. In mollis ante auctor ex feugiat, sed dapibus neque finibus. Mauris varius tincidunt purus, sed semper erat. Donec malesuada nunc sed felis suscipit molestie.
					</div>
					<div className={styles.headlineBodyImgContiainer}>
						<img className={styles.headlineBodyImg} src='/close-up-baker-bakery-shop.jpg' alt='POS system setup' />
					</div>
				</div>
			</div>
			{/* New Arrivals of products Container only displays 10 newest items  */}
			<div className={styles.newArrivalsContainer}>
				<div className={styles.selectionHeader}>
					<h1 className={`${styles.selectionHeaderText} ${roboto500.className}`}>New Arrivals</h1>
					<Link 
						href="/pages/ProductsPage" 
						className={`${styles.viewMore} ${roboto300.className}`}>
							View More <BiSolidChevronsRight className={styles.icons} />
					</Link>
				</div>
				
				<HorizontalProductsContainer 
					products={homeQuery.products}
				/>
			</div>
			{/* Preview of packages Container only displays 6 newest items  */}
			<div className={styles.packagesContainer}>
				<div className={styles.selectionHeader}>
					<h1 className={`${styles.selectionHeaderText} ${roboto500.className}`}>Check out our Packages</h1>
					<Link 
						href="/pages/Packages" 
						className={`${styles.viewMore} ${roboto300.className}`}>
							View More <BiSolidChevronsRight className={styles.icons} />
					</Link>
				</div>
				
				<PackageCardsContainer 
					packageLists={homeQuery.packageLists}
				/>
			</div>
		</main>
	)
}

//All Queries from Sanity
export async function getHomeQuery(){
	const homeQuery = await client.fetch(
		`{
			"products": *[_type == "products"] | order(_createdAt desc){
				_id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
			}[0...10],
			"homeCarouselPics": *[_type == "homeCarouselPics"]{
				_id,
				name,
				"pics": pic.asset->url,
			},
			"packageLists": *[_type == "packages"] | order(_createdAt desc){
				"key": _id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
				description,
				"inclusionsCount": count(inclusions),
			}[0...6]
		}`
	);
	return homeQuery
}

export default Home
