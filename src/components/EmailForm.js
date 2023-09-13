import React from 'react'
import styles from '../styles/EmailForm.module.scss'

function EmailForm() {
  return (
    <>
        <form>
            <div className={styles.form}>
                <div className={styles.nameContainer}>
                    <div className={styles.fnameContainer}>
                        <label for="fnameText" className={styles.labels}>First name:</label>
                        <input className={styles.text} type="text" name="fnameText" />
                    </div>
                    <div className={styles.lnameContainer}>
                        <label for="lnameText" className={styles.labels}>Last name:</label>
                        <input className={styles.text} type="text" name="lnameText" />
                    </div>
                </div>
                <div className={styles.emailContainer}>
                    <label for="emailText" className={styles.labels}>Email:</label>
                    <input className={styles.text} type="email" name="emailText" />
                </div>
                <div className={styles.categoryContainer}>
                    <label for="category" className={styles.labels}>Category:</label>
                    <select className={styles.category}>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                    </select>
                </div>
                <div className={styles.questionContainer}>
                    <label for="question" className={styles.labels}>Question:</label>
                    <textarea className={styles.question} />
                </div>
                <div className={styles.submitContainer}>
                    <div className={styles.submitButon}>
                        Submit
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default EmailForm