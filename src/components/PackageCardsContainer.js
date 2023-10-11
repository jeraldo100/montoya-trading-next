import React from 'react'
import styles from '@/styles/PackageCardsContainer.module.scss'
import PackageCard from './PackageCard'

function PackageCardsContainer({ packageLists }) {
	return (
		<div className={styles.PackageCardsContainer}>
			{packageLists.map((packageList) => { 
				return(
					<>
						<PackageCard
							key={packageList.key}
							name={packageList.name}
							slug={packageList.slug}
							thumbPic={packageList.thumbPic}
							description={packageList.description}
							inclusionsCount={packageList.inclusionsCount}
						/>
					</>
				)
			})}
		</div>
	)
}

export default PackageCardsContainer