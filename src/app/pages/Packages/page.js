import React from 'react'
import client from '@/components/sanity.client'
import styles from '../../../styles/PagesCSS/PackageList.module.scss'
import PackageCard from '@/components/PackageCard'

async function PackageList() {
	const packLists = await GetPackagelist()

	return (
		<>
			<div className={styles.packageList}>
				{packLists.map((packList) => { return(
					<>
						<PackageCard
							key={packList.key}
							name={packList.name}
							slug={packList.slug}
							thumbPic={packList.thumbPic}
							description={packList.description}
							inclusionsCount={packList.inclusionsCount}

						/>
					</>
				)})}
				
			</div>
		</>
	)
}

export async function GetPackagelist(){
    const query = `*[_type == "packages"]{
		"key": _id,
		name,
		"slug": slug.current,
		"thumbPic": thumbPic.asset->url,
		description,
		"inclusionsCount": count(inclusions),
    }`;
    
    const packLists = await client.fetch(query);
  
    return packLists
}

export default PackageList