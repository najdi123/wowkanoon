import React, {useState} from 'react';
import styles from "./register.module.css";
import axios from 'axios';
import WhiteNavbar from "../../components/WhiteNavbar/WhiteNavbar"
import { useHistory } from "react-router-dom";

let test = `${<i className="r-person"></i>} name"`
const Register = () => {
    let history = useHistory();
    const [input, setInput] = useState({
        Name: "",
        Family: "",
        Username: "",
        Password: "",
        // Password2: "",
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


    const handleChange = ({target: {name, value, checked, type}}) => {

        const inputValue = type === "checkbox" || type === "radio"? checked : value;
        console.log(inputValue)
        setInput((prev) => ({
            ...prev,
            [name]: inputValue,
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        let {Name, Family, Username, Password, CellPhoneNum, Email, Grade,
            CountryCode, State, gradeNoS, MainCode, GroupCode, AreaCode, educationalMaingroups
            , educationalSubgroups, Sex, isStu, mobileVerified
        } = input
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const Url = 'http://wow.kanoon.ir/api/user/phoneregister';
        const config = {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            url: proxyUrl+Url,
            data: {Name,Family, Username, Password, CellPhoneNum, Email, Grade,
                CountryCode, State, gradeNoS, MainCode, GroupCode, AreaCode, educationalMaingroups
                , educationalSubgroups, Sex, isStu, mobileVerified },
        };
        console.log(config)
        try {
            const res = await axios(config)
            console.log("res: ", res);
            localStorage.setItem('Name', res.data.Name);
            localStorage.setItem('Family', res.data.Family);

            // return res
            history.push("/");
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <div>
            <WhiteNavbar/>
            <div className={styles.register}>

                <div className={styles.container}>
                    <p className={`mt-3 mb-3 ${styles.darkBlue}`}>
                        REGISTER
                    </p>
                    <form>

                        {/*<div className="input-group has-validation ">*/}
                        {/*    /!*<span className="input-group-text" id="inputGroupPrepend">@</span>*!/*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        className={`${styles.form} form-control d-inline-block`}*/}
                        {/*        placeholder='&#xf007;   Name'*/}
                        {/*        onChange={handleChange}*/}
                        {/*        value={input.Name}*/}
                        {/*        name="Name"*/}
                        {/*        id="validationCustomUsername"*/}
                        {/*        aria-describedby="inputGroupPrepend"*/}
                        {/*        required*/}
                        {/*    />*/}
                        {/*        <div className="invalid-feedback">*/}
                        {/*            Please choose a username.*/}
                        {/*        </div>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <label htmlFor="validationDefault01" className="form-label">First name</label>*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        className={`${styles.form} form-control d-inline-block`}*/}
                        {/*        placeholder='&#xf007;   Name'*/}
                        {/*        // onChange={(e)=>setInput(prevState=>({...prevState, "name":e.target.value }))}*/}
                        {/*        onChange={handleChange}*/}
                        {/*        value={input.Name}*/}
                        {/*        name="Name"*/}
                        {/*        id="validationDefault01"*/}

                        {/*        required />*/}
                        {/*</div>*/}
                        <input
                            className={`${styles.form} form-control d-inline-block`}
                            placeholder='&#xf007;   Name'
                            // onChange={(e)=>setInput(prevState=>({...prevState, "name":e.target.value }))}
                            onChange={handleChange}
                            value={input.Name}
                            name="Name"
                        />
                        <input
                            className={`${styles.form} form-control d-inline-block`}
                            placeholder='&#xf007;   Family Name'
                            onChange={handleChange}
                            value={input.Family}
                            name="Family"
                        />
                        <input
                            className={`${styles.form} form-control d-inline-block`}
                            placeholder='&#xf023;   Password'
                            onChange={handleChange}
                            value={input.Password}
                            name="Password"
                        />
                        {/*<input*/}
                        {/*    className={`${styles.form} form-control d-inline-block`}*/}
                        {/*    placeholder='&#xf023;   Confirm Password'*/}
                        {/*    onChange={handleChange}*/}
                        {/*    value={input.Password2}*/}
                        {/*    name="Password2"*/}
                        {/*/>*/}
                        <input
                            className={`${styles.form} form-control d-inline-block`}
                            placeholder='&#xf023;   Username'
                            onChange={handleChange}
                            value={input.Username}
                            name="Username"
                        />
                        <input
                            className={`${styles.form} form-control d-inline-block`}
                            placeholder='&#xf10b;   Mobile'
                            onChange={handleChange}
                            value={input.CellPhoneNum}
                            name="CellPhoneNum"
                        />

                        <input
                            className={`${styles.form} form-control d-inline-block`}
                            placeholder='&#xf0e0;   Email Address'
                            onChange={handleChange}
                            value={input.Email}
                            name="Email"
                        />

                        <div className="d-flex justify-content-center mb-1">
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

                        <div className="d-flex justify-content-center mb-1">
                            <div className="d-flex justify-content-center">
                                <select
                                    name='State'
                                    onChange={handleChange}
                                    className="form-select m-1" aria-label="Default select example">
                                    <option selected>State</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>

                                </select>
                            </div>
                            <div className="d-flex justify-content-center">
                                <select
                                    name='AreaCode'
                                    onChange={handleChange}
                                    className="form-select m-1" aria-label="Default select example">
                                    <option selected>City</option>
                                    <option value="1">Tehran</option>
                                    <option value="2">Karaj</option>

                                </select>
                            </div>
                        </div>

                        <div className="d-flex justify-content-around">
                            <p className={styles.darkBlue}>Are you a student?</p>
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

                        <div className="d-flex justify-content-center mb-2">
                            <div className="d-flex justify-content-center">
                                <select
                                    name='educationalMaingroups'
                                    onChange={handleChange}
                                    className="form-select  m-1" aria-label="Default select example">
                                    <option selected>ریاضی نظام جدید</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>

                                </select>
                            </div>
                            <div className="d-flex justify-content-center">
                                <select
                                    name='educationalSubgroups'
                                    onChange={handleChange}
                                    className="form-select m-1" aria-label="Default select example">
                                    <option selected>کنکوری ها</option>
                                    <option value="1">Tehran</option>
                                    <option value="2">Karaj</option>

                                </select>
                            </div>
                        </div>

                        <button onClick={handleRegister} className={`btn text-white mt-4 ${styles.registerBtn}`}>Register
                        </button>
                        <p className={`${styles.darkBlue} pt-1 mb-1`}>or</p>
                        <button className={`btn ${styles.kanoonBtn}`}>Sign in with kanoon.ir</button>
                        <p className={`${styles.darkBlue} pt-5`}>Already have an account?</p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;