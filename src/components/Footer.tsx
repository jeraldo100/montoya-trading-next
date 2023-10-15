import React from 'react'
import styles from '../styles/Footer.module.scss';
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { roboto300 } from '@/app/fonts';

function Footer() {
  return (
    <>
        <div className={styles.Footer}>
            <h1 className={roboto300.className}>© Montoya Trading. All rights reserved.</h1>
            <div>
                <a href = "https://www.facebook.com/montoyatrading/" target="_blank" style={{textDecoration: 'none'}}><BsFacebook className={styles.Socials} /></a>
                <BsTwitter className={styles.Socials} /> 
                <BsInstagram className={styles.Socials} /> 
            </div>
        </div>
    </>
  );
}

export default Footer;