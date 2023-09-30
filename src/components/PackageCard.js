import React from 'react'
import Link from 'next/link'
import styles from '../styles/PackageCard.module.scss'
import { roboto300, roboto700 } from '@/app/fonts'

function PackageCard( { key, name, slug, thumbPic, description, inclusionsCount } ) {
	return (
		<>
			<div
				key={key}
				className={styles.packageCard}
			>
				{/* Image Container */}
				<div className={styles.imgContainer}>
					<img className={styles.image} src={thumbPic} />
				</div>
				{/* Name Description Inclusion-Number and Button Container */}
				<div className={styles.infoContainer}>
					<div className={`${roboto700.className} ${styles.name}`}>
						<p>{ name }</p>
					</div>
					<div className={styles.descContainer}>
						<pre className={`${styles.description} ${roboto300.className}`}>{ description }</pre>
					</div>
					{/* Inclusion Number and Button Container */}
					<div className={styles.btns}>
						<div className={`${styles.totalItems} ${roboto300.className}`}>
							INCLUSIONS: { inclusionsCount }
						</div>
						<Link href={`/pages/Packages/${slug}`} style={{ textDecoration: 'none' }}>
							<div className={`${styles.detailsBtn} ${roboto300.className}`}>
								DETAILS
							</div>
						</Link>
					</div>
				</div>

			</div>
		</>
	)
}

export default PackageCard