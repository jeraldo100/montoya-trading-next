import React from 'react'
import client from '@/components/sanity.client'
import styles from '@/styles/PagesCSS/PackageList.module.scss'
import PackageCard from '@/components/PackageCard'
import SearchBarPackageList from '@/components/SearchBarPackageList'
import Pagination from '@/components/Pagination';
import NotFound from '@/components/NotFound';

async function PackageList({ searchParams }) {
	const search = searchParams.search ? searchParams.search : '';
	const page = searchParams.page ? Number(searchParams.page) : 1;

	const defaultSlice = 8;
	const itemEnd = page * defaultSlice;
	const itemStart = itemEnd - defaultSlice;
	const pageSlice = `[${itemStart}...${itemEnd}]`;

	const query = (
		search == '' ?
			`*[_type == "packages"]` :
				`*[_type == "packages" && name match '*${search}*']`
	);

	const packs = await GetPackagelist(query, pageSlice)

	return (
		<>
			<div className={styles.packageListContainer}>
				<SearchBarPackageList />
				{packs.packNums >= 1 ? 
					<>
						<div className={styles.packageList}>
							{packs.packLists.map((packList) => { return(
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
						{packs.packNums >=  defaultSlice?
							<Pagination
								queryNums={packs.packNums}
								defaultSlice={defaultSlice}
							/> :
								<></>
						}
					</> :
						<NotFound />
				}
			</div>
		</>
	)
}

export async function GetPackagelist(query, pageSlice){
    const packs = await client.fetch( 
		`{
			"packNums": count(${query}),
			"packLists": ${query}{
				"key": _id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
				description,
				"inclusionsCount": count(inclusions),
			}${pageSlice}
		}`
	);
    
    return packs
}

export default PackageList