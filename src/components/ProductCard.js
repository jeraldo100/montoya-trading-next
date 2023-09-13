import React from 'react'
import styles from '../styles/ProductCard.module.scss';

function ProductCard({id, name, pic}) {

    return (
      <>
        <div key={id} className={styles.ProductCard}>
          <div className={styles.ProductCardTop}>
              <p>{name}</p>
          </div>
          <div className={styles.ProductCardBody}>
              <img className={styles.productImg} src={pic} />
          </div>
        </div>
      </>
    );
  
}

ProductCard.defaultProps = {
  name: "name",
  pic: "https://picsum.photos/220/200",
}

export default ProductCard;