import React from 'react'
import styles from '@/styles/Brands.module.scss'
import Image from 'next/image'

function Brands() {
	return (
		<>
			<div className={styles.brandsContainer}>
				<h3 className={styles.header}>
					Features Trusted Brands
				</h3>
				<div className={styles.brands}>
					<a href='https://www.epson.com.ph/' target="_blank">
						<div className={styles.logoContainer}>
							<Image
								src='/brands/epson-png.png'
								alt='epson logo'
								fill={true}
								style={{objectFit: "contain"}}
								quality={40}
							/>
						</div>
					</a>
					<a href='https://www.hidglobal.com/' target="_blank">
						<div className={styles.logoContainer}>
							<Image
								src='/brands/hid-png.png'
								alt='HID logo'
								fill={true}
								style={{objectFit: "contain"}}
								quality={40}
							/>
						</div>
					</a>
					<a href='https://www.anviz.com/' target="_blank">
						<div className={styles.logoContainer}>
							<Image
								src='/brands/anviz-png.png'
								alt='anviz logo'
								fill={true}
								style={{objectFit: "contain"}}
								quality={40}
							/>
						</div>
					</a>
					<a href='https://www.xprintertech.com/' target="_blank">
						<div className={styles.logoContainer}>
							<Image
								src='/brands/xprinter-png.png'
								alt='xprinter logo'
								fill={true}
								style={{objectFit: "contain"}}
								quality={40}
							/>
						</div>
					</a>
				</div>
			</div>
		</>
	)
}

export default Brands