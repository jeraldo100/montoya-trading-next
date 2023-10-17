import React from 'react'
import client from '@/components/sanity.client'
import styles from '@/styles/PagesCSS/PackageList.module.scss'
import { Packs } from '../interfaces'
import { groq } from 'next-sanity'
import PackageCardsContainer from '@/components/PackageCardsContainer'
import SearchBarPackageList from '@/components/SearchBarPackageList'
import Pagination from '@/components/Pagination';
import NotFound from '@/components/NotFound';

async function PackageList({ searchParams }) {
	const search = searchParams.search ? searchParams.search : '';
	const page = searchParams.page ? Number(searchParams.page) : 1;

	const defaultSlice = 8;
	const itemEnd= page * defaultSlice;
	const itemStart = itemEnd - defaultSlice;
	const pageSlice = `[${itemStart}...${itemEnd}]`;

	const query: string = (
		search == '' ?
			`*[_type == "packages"]` :
				`*[_type == "packages" && name match '*${search}*']`
	);

	const packs = await GetPackagelist(query, pageSlice)
	const packageLists : Array<Packs> = packs.packageLists;

	return (
		<>
			<div className={styles.packageListContainer}>
				<SearchBarPackageList />
				{packs.packageNums >= 1 ? 
					<>
						<PackageCardsContainer
							packageLists={packageLists}
						/>
						{packs.packageNums >=  defaultSlice?
							<Pagination
								queryNums={packs.packageNums}
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

async function GetPackagelist(query: string, pageSlice: string){
    const packs = await client.fetch( 
		groq`{
			"packageNums": count(${query}),
			"packageLists": ${query}{
				_id,
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