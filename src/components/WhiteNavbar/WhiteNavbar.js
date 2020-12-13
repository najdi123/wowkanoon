import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styles from "./whiteNavbar.module.css"
import NavLogo from "../../images/menuLogoWhite.png"
import IranFlag from "../../images/iran-flag-400.png"


const Navbar = () => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const firstName= localStorage.getItem('Name');
        const lastName= localStorage.getItem('Family');
        setUser(firstName+" "+lastName)
    },[])
    console.log("user: ",user)
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="nav-logo" src={NavLogo}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLinkBlue}`} aria-current="page"
                                  to="/star">Star</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLinkBlue}`} to="/wow-stories">Wow stories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLinkBlue}`} to="/wow-magazine">Wowmagazine</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLinkBlue}`} to="/top-user">Top User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLinkBlue}`} to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLinkBlue}`} to="/rules">Rules</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLinkBlue}`} to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="right-items d-flex">
                        {user ?
                            (
                                <>
                                    <Link to="/user" className="d-flex linkStyle">
                                        <div className={`userName ${styles.userName}`}>{user}</div>
                                        <div className={`userAvatar ${styles.userAvatar}`}>
                                            '
                                        </div>
                                    </Link>
                                    <Link to="#" className="langBox d-flex linkStyle">
                                        <div className={styles.userName}>FA</div>
                                        <img className="flag" src={IranFlag} alt=""/>
                                    </Link>
                                </>
                            )
                            :
                            (
                                <div className={`d-flex ${styles.navLog}`}>
                                    <Link to="/register" className={`p-1 linkStyle ${styles.darkBlue} ${styles.marginLeft}`}>Register</Link>
                                    <div className={`p-1 `}>|</div>
                                    <Link to="/login" className={`p-1 linkStyle ${styles.darkBlue} ${styles.marginRight}`}>Login</Link>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;