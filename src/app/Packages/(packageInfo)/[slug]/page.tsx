import React from 'react'
import client from '@/components/sanity.client'
import PackageInfo from '@/components/PackageInfo'

async function PackageInfoPage({ params }) {
	const pack = await GetPackageInfo( params )

	return (
		<>
			<PackageInfo
				key={pack.key}
				name={pack.name}
				thumbPic={pack.thumbPic}
				description={pack.description}
				inclusions={pack.inclusions}
			/>
		</>
	)
}

// Generate Metadata for packages
async function generateMetadata({ params }){
	const pack = await client.fetch(
		`*[_type == "packages" && slug.current == '${ params.slug }']{
			name,
			description,
		}[0]`
	);
	const name = `${pack.name}|Montoya Trading`;
	const description = pack.description.slice(0, 160);
	return {
		title: name,
		description: description,
		openGraph: {
			title: name,
			description: description,
			url: `https://montoya-trading-next.vercel.app/Packages/${ params.slug }`,
		}
	}
}

//Statically generate routes at build time instead of on-demand at request time
async function generateStaticParams() {
	const query = `*[_type == "Package"]{
		slug {
			current
		}
	}`;
	const packageLists = await client.fetch(query);

	return packageLists.map((packageList) => ({
		slug: packageList.slug.current,
	}))
}

// Fetching Data of Package from Sanity 
async function GetPackageInfo( params ){
    const query = `*[_type == "packages" && slug.current == '${ params.slug }']{
		"key": _id,
		name,
		"thumbPic": thumbPic.asset->url,
		description,
		"inclusions": inclusions[]->{
			"key": _id,
			name,
			"slug": slug.current,
			"thumbPic": thumbPic.asset->url,
		}
    }[0]`;
    const pack = await client.fetch(query);
  
    return pack
}

export default PackageInfoPage