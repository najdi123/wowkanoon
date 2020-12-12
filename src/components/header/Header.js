import React from 'react';
import styles from './header.module.css'
import logo from "../../images/headerLogo.png";
import kanoon from "../../images/kanoondl.png";
import mob1 from "../../images/mockHome.png";
import mob2 from "../../images/mockTest.png";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={logo}/>
                <h1 className={styles.topHeader}>WORLD OF WORDS</h1>
                <div className='d-flex align-items-center'>
                    <h2 className={styles.secondText}>Compete with </h2>
                    <h1 className={styles.number}>81600</h1>
                </div>
                <h2 className={styles.bottomHeader}>English learners Of Worlds</h2>
                <div className='d-flex'>
                    <img src={kanoon} className={styles.btn}/>
                    <img src={kanoon} className={styles.btn}/>
                </div>
            </div>
            <div>
                <img src={mob1}/>
                <img src={mob2}/>
            </div>
        </div>
    );
};

export default Header;
