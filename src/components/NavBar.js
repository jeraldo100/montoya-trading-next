'use client'
import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.scss'
import { useState } from 'react';
import { roboto300, roboto700 } from '@/app/fonts'
import { BsFillBoxSeamFill } from "react-icons/bs"
import { FaBoxes } from "react-icons/fa"
import { BiSolidShoppingBag, BiSolidEnvelope, BiSolidInfoCircle, BiMenu } from "react-icons/bi"

function NavBar() {
	const [show, setShow] = useState(false);

	return (
		<>
			<div className={styles.NavBar}>
				<div className={styles.NavStart}>
					<Link 
						href="/" 
						className={`${styles.HomeLink} ${roboto700.className}`}>
							Montoya Trading 
					</Link>
					<div className={styles.desktopOptions}>
						<Link 
							href="/pages/ProductsPage" 
							className={`${styles.NavLinks} ${roboto300.className}`}>
								Products <BsFillBoxSeamFill className={styles.NavLinksIcons} />
						</Link>
						<Link 
							href="/pages/Packages" 
							className={`${styles.NavLinks} ${roboto300.className}`}>
								Packages <FaBoxes className={styles.NavLinksIcons} />
						</Link>
						<a 
							href = "https://www.facebook.com/montoyatrading/" 
							target="_blank" style={{textDecoration: 'none'}}
						>
								<div 
									className={`${styles.NavLinks} ${roboto300.className}`}>
										Shop Now <BiSolidShoppingBag className={styles.NavLinksIcons} />
								</div>
						</a>
					</div>
				</div>
				<div className={styles.NavEnd}>
					<div className={styles.desktopOptions}>
						<Link 
							href="/pages/AboutUs" 
							className={`${styles.NavLinks} ${roboto300.className}`}>
								About Us <BiSolidInfoCircle className={styles.NavLinksIcons} />
						</Link>
						<Link 
							href="/pages/ContactUs" 
							className={`${styles.NavLinks} ${roboto300.className}`}>
								Contact Us <BiSolidEnvelope className={styles.NavLinksIcons} />
						</Link>
					</div>
					{/* <BiMenu 
						className={`${styles.offCanvasBtn} ${styles.NavLinksIcons}`} 
						onClick={() => setShow(!show)}
					/> */}
					
				</div>
			</div>
		</>
	);
}

export default NavBar;