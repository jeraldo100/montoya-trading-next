import React from 'react'
import styles from '../../../styles/PagesCSS/ContactUs.module.scss';
import EmailForm from '@/components/EmailForm';
import { BiSolidEnvelope } from "react-icons/bi";
import { FaViber } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiSolidMap } from "react-icons/bi";


function ContactUs() {
  return (
    <>
        <h1 className={styles.contactH1}>Contact Us</h1>
        <div className={styles.contacts}>
            <p>
              <BiSolidEnvelope className={styles.icons} /> 
              <span className={styles.bold}>Email Us</span>: montoya_trading@yahoo.com
            </p>
            <p>
              <FaViber className={styles.icons} /> 
              <span className={styles.bold}>Viber</span>: +639195956096
            </p>
            <p>
              <BiLogoFacebookCircle className={styles.icons} /> 
              <span className={styles.bold}>Facebook</span>: <a href='https://www.facebook.com/montoyatrading/' target="_blank">
                https://www.facebook.com/montoyatrading/
              </a>
            </p>
            <p>
              <BiSolidMap className={styles.icons} /> 
              <span className={styles.bold}>Location</span>: Marulas, Valenzuela City, Philippines
            </p>
        </div>
        <div className={styles.formContainer}>
            <h1 className={styles.requestH1}>Send a Request</h1>
            <EmailForm />
        </div>
    </>
  )
}

export default ContactUs