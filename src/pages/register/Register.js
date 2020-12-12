import React from 'react';
import styles from "./register.module.css";

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <h5 className="mt-3 mb-4">
                    REGISTER
                </h5>
                <form>
                    <input
                        placeholder="name"
                    />
                </form>
            </div>
        </div>
    );
};

export default Register;