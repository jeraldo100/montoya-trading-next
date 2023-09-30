'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

function SearchBar() {
	const searchParams = useSearchParams()
 
  	const search = searchParams.get('search')
	return (
	<>
		<input type='text' name='search' ></input>
	</>
	)
}

export default SearchBar