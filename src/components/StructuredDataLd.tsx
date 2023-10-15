import React from 'react'

function StructuredDataLd({ jsonLd }) {
	return (
		<>
			<section>
				<script type="application/ld+json">{JSON.stringify( jsonLd )}</script>
			</section>
		</>
	)
}

export default StructuredDataLd