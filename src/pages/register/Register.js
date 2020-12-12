import React, {useState} from 'react';
import styles from "./register.module.css";

let test = `${<i className="r-person"></i>} name"`
const Register = () => {
    const [input, setInput] = useState({
        Name: "",
        Family: "",
        Username: "بیسبیس",
        Password: "",
        Password2: "",
        CellPhoneNum: "",
        Email: "",
        Grade: 0,
        CountryCode: "IR",
        State: "3",
        gradeNoS: null,
        MainCode: 0,
        GroupCode: 0,
        AreaCode: 0,
        educationalMaingroups: null,
        educationalSubgroups: null,
        Sex: 1,
        isStu: 0,
        mobileVerified: 1
    })
    console.log(input)

    const handleChange = ({target: {name, value, checked, type}}) => {

        const inputValue = type === "checkbox" || type === "radio"? checked : value;
        console.log(inputValue)
        setInput((prev) => ({
            ...prev,
            [name]: inputValue,
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();

        console.log(input)
    }
    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <h5 className="mt-3 mb-4">
                    REGISTER
                </h5>
                <form>
                    <input
                        className={`${styles.form} form-control d-inline-block`}
                        placeholder='    &#xf007;   Name'
                        // onChange={(e)=>setInput(prevState=>({...prevState, "name":e.target.value }))}
                        onChange={handleChange}
                        value={input.Name}
                        name="Name"
                    />
                    <input
                        className={`${styles.form} form-control d-inline-block`}
                        placeholder='    &#xf007;   Family Name'
                        onChange={handleChange}
                        value={input.Family}
                        name="Family"
                    />
                    <input
                        className={`${styles.form} form-control d-inline-block`}
                        placeholder='    &#xf023;   Password'
                        onChange={handleChange}
                        value={input.Password}
                        name="Password"
                    />
                    <input
                        className={`${styles.form} form-control d-inline-block`}
                        placeholder='    &#xf023;   Confirm Password'
                        onChange={handleChange}
                        value={input.Password2}
                        name="Password2"
                    />
                    <input
                        className={`${styles.form} form-control d-inline-block`}
                        placeholder='    &#xf10b;   Mobile'
                        onChange={handleChange}
                        value={input.CellPhoneNum}
                        name="CellPhoneNum"
                    />

                    <input
                        className={`${styles.form} form-control d-inline-block`}
                        placeholder='    &#xf0e0;   Email Address'
                        onChange={handleChange}
                        value={input.Email}
                        name="Email"
                    />

                    <div className="d-flex justify-content-center mb-3">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name='Sex'
                            onChange={handleChange}
                        >
                            <option selected>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>

                        </select>
                    </div>

                    <div className="d-flex justify-content-around mb-3">
                        <div className="d-flex justify-content-center">
                            <select
                                name='State'
                                onChange={handleChange}
                                className="form-select" aria-label="Default select example">
                                <option selected>State</option>
                                <option value="1">1</option>
                                <option value="2">2</option>

                            </select>
                        </div>
                        <div className="d-flex justify-content-center">
                            <select
                                name='AreaCode'
                                onChange={handleChange}
                                className="form-select" aria-label="Default select example">
                                <option selected>City</option>
                                <option value="1">Tehran</option>
                                <option value="2">Karaj</option>

                            </select>
                        </div>
                    </div>

                    <div className="d-flex justify-content-around">
                        <p>Are you a student?</p>
                        <div className="form-check">

                            <label className="form-check-label" >
                                Yes
                            </label>
                            <input
                                onChange={handleChange}
                                className="form-check-input" type="radio" name="isStu"
                                   id="flexRadioDefault1"/>

                        </div>
                        <div className="form-check">
                            <label className="form-check-label" >
                                No
                            </label>
                            <input
                                onChange={handleChange}
                                className="form-check-input" type="radio" name="isStu"
                                   id="flexRadioDefault2"
                                   checked/>

                        </div>
                    </div>

                    <div className="d-flex justify-content-around mb-3">
                        <div className="d-flex justify-content-center">
                            <select
                                name='educationalMaingroups'
                                onChange={handleChange}
                                className="form-select" aria-label="Default select example">
                                <option selected>ریاضی نظام جدید</option>
                                <option value="1">1</option>
                                <option value="2">2</option>

                            </select>
                        </div>
                        <div className="d-flex justify-content-center">
                            <select
                                name='educationalSubgroups'
                                onChange={handleChange}
                                className="form-select" aria-label="Default select example">
                                <option selected>کنکوری ها</option>
                                <option value="1">Tehran</option>
                                <option value="2">Karaj</option>

                            </select>
                        </div>
                    </div>

                    <button onClick={handleRegister} className={`btn text-white ${styles.registerBtn}`}>Register
                    </button>
                    <p className={styles.darkBlue}>or</p>
                    <button className={`btn ${styles.kanoonBtn}`}>Sign in with kanoon.ir</button>


                </form>
            </div>
        </div>
    );
};

export default Register;