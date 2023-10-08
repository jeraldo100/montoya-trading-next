import React from 'react'
import client from '@/components/sanity.client';
import styles from '@/styles/PagesCSS/ProductsPage.module.scss'
import SearchBar from '@/components/SearchBar';
import ProductsContainer from '@/components/ProductsContainer';
import Pagination from '@/components/Pagination';
import NotFound from '@/components/NotFound';

async function ProductsPage({ searchParams }) {
	const search = searchParams.search ? searchParams.search : '';
	const category = searchParams.category ? searchParams.category : 'any';
	const page = searchParams.page ? Number(searchParams.page) : 1;

	const defaultSlice = 16;
	const itemEnd = page * defaultSlice;
	const itemStart = itemEnd - defaultSlice;
	const pageSlice = `[${itemStart}...${itemEnd}]`;

	const query = (
		search == '' && category == 'any' ?
			`*[_type == "products"]` :
		search !== '' && category == 'any' ?
			`*[_type == "products" && name match '*${search}*']` :
		search == '' && category !== 'any' ?
			`*[_type == "products" && category == '${category}']` :
		`*[_type == 'products' && name match '*${search}*' &&  category == '${category}']`
	);

	// const productNums = await GetProductsNums(query);
	const products = await GetProducts(query, pageSlice);
	
	return (
	<>	
		<div className={styles.ProductsPageContainer}>
			<SearchBar />
			{products.productNums >= 1 ? 
				<div className={styles.list}>
					<ProductsContainer
						products = {products.productsList}
					/>
					{products.productNums >=  defaultSlice?
						<Pagination
							queryNums={products.productNums}
							defaultSlice={defaultSlice}
						/> :
							<></>
					} 
				</div> :
					<NotFound />
			}
		</div>
	</>
	)
}
  
//Getting product list and number of products  Query
export async function GetProducts(query, pageSlice){
	const products = await client.fetch(
		`{
			"productNums": count(${query}),
			"productsList": ${query}{
				_id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
			}${pageSlice}
		}`
	);
	return products
}

export default ProductsPage