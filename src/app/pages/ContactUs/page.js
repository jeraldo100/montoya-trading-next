import React from 'react'
import styles from '../../../styles/PagesCSS/ContactUs.module.scss';
// import EmailForm from '@/components/EmailForm';
import { roboto300, roboto500 } from '@/app/fonts';
import { BiSolidEnvelope, BiLogoFacebookCircle, BiSolidMap } from "react-icons/bi";
import { FaViber } from "react-icons/fa";

function ContactUs() {
  return (
    <>
        <h1 className={`${styles.contactH1} ${roboto300.className}`}>Contact Us</h1>
        <div className={`${styles.contacts} ${roboto300.className}`}>
            
            <div>
              <BiSolidEnvelope className={styles.icons} /> 
              <span className={roboto500.className}>Email Us</span>: montoya_trading@yahoo.com
            </div>
            <p>
              <FaViber className={styles.icons} /> 
              <span className={roboto500.className}>Viber</span>: +639195956096
            </p>
            <p>
              <BiLogoFacebookCircle className={styles.icons} /> 
              <span className={roboto500.className}>Facebook</span>: <a href='https://www.facebook.com/montoyatrading/' target="_blank">
                https://www.facebook.com/montoyatrading/
              </a>
            </p>
            <p>
              <BiSolidMap className={styles.icons} /> 
              <span className={roboto500.className}>Location</span>: Marulas, Valenzuela City, Philippines
            </p>
        </div>
        {/* <div className={styles.formContainer}>
            <h1 className={`${styles.requestH1} ${roboto300.className}`}>Send a Request</h1>
            Import Email Send a Request
            <EmailForm />
        </div> */}
    </>
  )
}

export default ContactUs