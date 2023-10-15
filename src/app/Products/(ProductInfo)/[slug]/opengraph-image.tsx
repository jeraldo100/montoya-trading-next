import { ImageResponse } from 'next/server'
import client from '@/components/sanity.client'

export const runtime = 'edge'
export const alt = 'Montoya Trading product'
export const contentType = 'image/png'
 
export default async function Image({ params }) {
  const image = await client.fetch(
		`*[_type == "products" && slug.current == '${ params.slug }']{
			"thumbPic": thumbPic.asset->url,
		}[0]`
	);
  
	return new ImageResponse(
		(
			<div
				style={{
				backgroundColor: '#62A388',
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				}}
			>
				<img 
					height={600}
					width={600}
					src={`${image.thumbPic}?q=25`}
				/>
				<h1></h1>
			</div>
		),
		{
			width: 1200,
			height: 600,
		}
  )
}