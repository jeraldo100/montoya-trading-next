import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '',
		},
		sitemap: 'https://montoya-trading-next.vercel.app/sitemap.xml',
	}
}