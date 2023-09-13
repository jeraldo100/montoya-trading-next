import React from 'react'
import styles from '../styles/Footer.module.scss';
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
        <div className={styles.Footer}>
            <p>© Montoya Trading. All rights reserved.</p>
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