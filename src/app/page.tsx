import './globals.scss'
import styles from '@/styles/PagesCSS/Home.module.scss'
import client from '@/components/sanity.client';
import Link from 'next/link'
import Image from 'next/image';
import HomeCarousel from '@/components/HomeCarousel'
import HorizontalProductsContainer from '@/components/HorizontalProductsContainer';
import PackageCardsContainer from '@/components/PackageCardsContainer';
import { roboto300, roboto500, roboto700 } from './fonts';
import { BiSolidChevronsRight } from "react-icons/bi";

interface Products{
	_id: string
	name: string
	slug: string
	thumbPic: string
}
interface HomeCarouselPics{
	_id: string
	name: string
	pics: string
}
interface PackageLists{
	_id: string
	name: string
	slug: string
	thumbPic: string
	description: string
	inclusionsCount: number
}

async function Home() {
	const homeQuery = await getHomeQuery()
	const products: Products = homeQuery.products;
	const homeCarouselPics: HomeCarouselPics = homeQuery.homeCarouselPics;
	const packageLists: PackageLists = homeQuery.packageLists;

	return (
		<main>
			<HomeCarousel 
				homeCarouselPics={ homeCarouselPics }
			/>
			{/* Headline Conatainer */}
			<div className={styles.headline}>
				<h1 className={`${styles.headlineHeader} ${roboto700.className}`}>
					The Best Retailer for POS System goods in the Philippines
				</h1>
				<br />
				<div className={`${styles.headlineBody} ${roboto300.className}`}>
					<div className={styles.headlineBodyText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl sem, congue vel lacus sit amet, cursus imperdiet ligula. Vestibulum id augue vel augue vestibulum dignissim. Mauris interdum justo in augue lacinia, a finibus metus porta. Phasellus sem felis, porttitor sit amet arcu vel, luctus finibus nibh. Phasellus ultrices congue congue. Proin hendrerit fringilla libero eu pharetra. Aliquam turpis tellus, tincidunt sed velit non, suscipit elementum est. Sed iaculis, ligula vitae lobortis feugiat, magna elit bibendum turpis, quis tincidunt augue justo sed lorem. Integer sit amet nunc malesuada, aliquam nulla sed, placerat ante. Pellentesque vestibulum sit amet nibh sit amet congue. Aliquam laoreet, magna sit amet accumsan consequat, lacus nulla ornare dui, et molestie enim mi non augue. In mollis ante auctor ex feugiat, sed dapibus neque finibus. Mauris varius tincidunt purus, sed semper erat. Donec malesuada nunc sed felis suscipit molestie.
					</div>
					<div className={styles.headlineBodyImgContiainer}>
						<Image 
							className={styles.headlineBodyImg} 
							fill={true}
							src='/close-up-baker-bakery-shop.jpg' 
							style={{objectFit: "contain", borderRadius: '1rem'}}
							quality={50}
							alt='POS system setup Image by Freepik' 
						/>
					</div>
				</div>
			</div>
			{/* New Arrivals of products Container only displays 10 newest items  */}
			<div className={styles.newArrivalsContainer}>
				<div className={styles.selectionHeader}>
					<h2 className={`${styles.selectionHeaderText} ${roboto500.className}`}>New Arrivals</h2>
					<Link 
						href="/Products" 
						className={`${styles.viewMore} ${roboto300.className}`}>
							View More <BiSolidChevronsRight className={styles.icons} />
					</Link>
				</div>
				
				<HorizontalProductsContainer 
					products={ products }
				/>
			</div>
			{/* Preview of packages Container only displays 6 newest items  */}
			<div className={styles.packagesContainer}>
				<div className={styles.selectionHeader}>
					<h2 className={`${styles.selectionHeaderText} ${roboto500.className}`}>Check out our Packages</h2>
					<Link 
						href="/Packages" 
						className={`${styles.viewMore} ${roboto300.className}`}>
							View More <BiSolidChevronsRight className={styles.icons} />
					</Link>
				</div>
				
				<PackageCardsContainer 
					packageLists={ packageLists }
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
				_id,
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
