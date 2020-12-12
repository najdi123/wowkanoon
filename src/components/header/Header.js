import React from 'react';
import styles from './header.module.css'
import logo from "../../images/headerLogo.png";
import kanoon from "../../images/kanoondl.png";
import mobs from "../../images/mobs.png";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img style={{width: 300}} src={logo}/>
                <h1 className={styles.topHeader}>WORLD OF WORDS</h1>
                <div className='d-flex align-items-center'>
                    <h2 className={styles.secondText}>Compete with </h2>
                    <h1 className={styles.number}>81600</h1>
                </div>
                <h2 className={styles.bottomHeader}>English learners Of Worlds</h2>
                <div className={styles.btnWrapper} style={{width: 320, overflow: 'hidden'}}>
                    <img src={kanoon} className={`${styles.btn}`}/>
                    <div className={styles.space}/>
                    <img src={kanoon} className={styles.btn}/>
                </div>
            </div>
            <div>
                <img className={styles.mobs} src={mobs}/>
            </div>
        </div>
    );
};

export default Header;
