import React from 'react'
import styles from '../styles/ProductCard.module.scss';
import Link from 'next/link'
import { roboto300 } from '@/app/fonts';

function ProductCard({key, name, thumbPic, slug}) {
    return (
      <>
        <Link href={`/pages/ProductsPage/${slug}`} style={{ textDecoration: 'none' }}>
          <div key={key} className={styles.ProductCard}>
            <div className={`${styles.ProductCardTop} ${roboto300.className}`}>
                <p>{name}</p>
            </div>
            <div className={styles.ProductCardBody}>
                <img className={styles.productImg} src={`${thumbPic}${'?q=25'}`} />
            </div>
          </div>
        </Link>
      </>
    );
  
}

export default ProductCard;