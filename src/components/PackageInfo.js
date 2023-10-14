import React from 'react'
import styles from '@/styles/PackageInfo.module.scss'
import HorizontalProductsContainer from './HorizontalProductsContainer'
import ShareBtn from './ShareBtn'
import { roboto300, roboto500, roboto700 } from '@/app/fonts'

function PackageInfo({ name, thumbPic, description, inclusions }) {
  return (
	<>
		{/* Overall Container as flex collumn */}
		<div className={styles.packageInfoContainer}>
			{/* Container for image, name, and description as flex row */}
			<div className={styles.imgAndInfo}>
				{/* image and share button Container */}
				<div className={styles.imgContainer}>
					<img className={styles.image} src={ thumbPic }/>
				</div>
				{/* Name and Description Container as flex collumn */}
				<div className={styles.infoContainer}>
					<div className={`${styles.name} ${roboto700.className}`}>
						<h1>{ name }</h1>
					</div>
					<h2 className={`${styles.descH2} ${roboto500.className}`}>Description: </h2>
					<pre className={`${styles.description} ${roboto300.className}`}>
						{ description }
					</pre>
					<ShareBtn />
				</div>
			</div>
			{/* Inclusions */}
			<p className={`${styles.inclusionsHeader} ${roboto700.className}`}>
				Inclusions:
			</p>
			<HorizontalProductsContainer 
				products={ inclusions }
			/>
		</div>
	</>
  )
}

export default PackageInfo