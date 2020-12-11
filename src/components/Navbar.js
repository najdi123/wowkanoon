import React from 'react';
import "../styles/Navbar.css";
import NavLogo from "../images/menuLogoWhite.png"
import IranFlag from "../images/iran-flag-400.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="nav-logo" src={NavLogo}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Star</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Top User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Wowmagazine</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Wow stories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rules</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <div className="right-items d-flex">
                        <div className="userName">Ashkan Pb</div>
                        <div className="userAvatar">
                            '
                        </div>
                        <div className="langBox d-flex">
                            <div >FA</div>
                            <img className="flag" src={IranFlag} alt=""/>
                        </div>
                    </div>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;