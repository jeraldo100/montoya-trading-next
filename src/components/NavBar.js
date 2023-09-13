import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.scss';
import { roboto300, roboto700 } from '@/app/fonts';
import { BiSolidShoppingBag } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { BiSolidInfoCircle } from "react-icons/bi";

function NavBar() {
	return (
		<>
			<div className={styles.NavBar}>
				<div className={styles.NavStart}>
					<Link 
						href="/" 
						className={`${styles.HomeLink} ${roboto700.className}`}>
							Montoya Trading 
					</Link>
					<Link 
						href="/pages/ProductsPage" 
						className={`${styles.NavLinks} ${roboto300.className}`}>
							Products
					</Link>
					<a 
						href = "https://www.facebook.com/montoyatrading/" 
						target="_blank" style={{textDecoration: 'none'}}>
							<div 
								className={`${styles.NavLinks} ${roboto300.className}`}>
									Shop Now <BiSolidShoppingBag 
										className={styles.NavLinksIcons} />
							</div>
					</a>
				</div>
				<div className={styles.NavEnd}>
					<Link 
						href="/pages/AboutUs" 
						className={`${styles.NavLinks} ${roboto300.className}`}>
							About Us <BiSolidInfoCircle 
							className={styles.NavLinksIcons} />
					</Link>
					<Link 
						href="/pages/ContactUs" 
						className={`${styles.NavLinks} ${roboto300.className}`}>
							Contact Us <BiSolidEnvelope className={styles.NavLinksIcons} />
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavBar;