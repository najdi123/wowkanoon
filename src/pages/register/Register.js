import React from 'react';
import styles from "./register.module.css";
let test =`${<i className="r-person" ></i>} name"`
const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <h5 className="mt-3 mb-4">
                    REGISTER
                </h5>
                <form>
                    <i className="fas fa-thumbs-up fa-5x"></i>
                    {/*<i className={`r-person`} ></i>*/}
                    <input
                        placeholder={test}
                        // className="r-person"
                    />
                    <input
                        style={{fontFamily: "FontAwesome"}}
                        placeholder='&#xf002 Search...' />
                </form>
            </div>
        </div>
    );
};

export default Register;