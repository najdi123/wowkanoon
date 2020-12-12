import {useState} from 'react';
import styles from "./register.module.css";
let test =`${<i className="r-person" ></i>} name"`
const Register = () => {
    const [input, setInput]= useState({
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

    const handleChange=(e)=>{
        setInput(prevState=>({...prevState, [e.target.name]:e.target.value }))
    }
    return (
        <div className={styles.register}>
            <div className={styles.container}>
                <h5 className="mt-3 mb-4">
                    REGISTER
                </h5>
                <form >
                    <input
                        className={styles.form}
                        placeholder='    &#xf007;   Name'
                        // onChange={(e)=>setInput(prevState=>({...prevState, "name":e.target.value }))}
                        onChange={handleChange}
                        value={input.Name}
                        name="Name"
                    />
                    <input
                        className={styles.form}
                        placeholder='    &#xf007;   Family Name'
                        onChange={handleChange}
                        value={input.Family}
                        name="Family"
                    />
                    <input
                        className={styles.form}
                        placeholder='    &#xf023;   Password'
                        onChange={handleChange}
                        value={input.Password}
                        name="Password"
                    />
                    <input
                        className={styles.form}
                        placeholder='    &#xf023;   Confirm Password'
                        onChange={handleChange}
                        value={input.Password2}
                        name="Password2"
                    />
                    <input
                        className={styles.form}
                        placeholder='    &#xf10b;   Mobile'
                        onChange={handleChange}
                        value={input.CellPhoneNum}
                        name="CellPhoneNum"
                    />
                    <input
                        className={styles.form}
                        placeholder='    &#xf0e0;   Email Address'
                        onChange={handleChange}
                        value={input.Email}
                        name="Email"
                    />


                </form>
            </div>
        </div>
    );
};

export default Register;