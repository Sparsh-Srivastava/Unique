import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import img from "../imgs/undraw_authentication_fsn5 (2).svg";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import styles from "../styles/Login.module.css";

function Login () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
    
    return (
        <div className={`${styles.logInDoc}`}> 
            <div className={`row ${styles.row} text-center`}>
            <div className={`col-lg-8 ${styles.colLg8}`}>
              <img alt="..." src={img} className="logImg" />
            </div>
            <div className={`col-lg-4 ${styles.colLg4}`}>
              <div className={`shadow-lg  p-3  ${styles.rounded}`}>
                <h2>Log In</h2>
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                <div className="p-3">
                  <form onSubmit={submit}>
                    <div className={`row ${styles.row} align-items-center`}>
                      <div className={`col-sm-2 ${styles.colSm2}`}>
                        <h6 className="head">
                          <i className="fas fa-envelope fa-lg"></i>
                        </h6>
                      </div>
                      <div className={`col-sm-10 ${styles.colSm10}`}>
                        <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Enter Email"/>
                      </div>
                    </div>
                    <div className={`row ${styles.row} align-items-center`}>
                      <div className={`col-sm-2 ${styles.colSm2}`}>
                        <h6 className="head">
                          <i className="fas fa-key fa-lg"></i>
                        </h6>
                      </div>
                      <div className={`col-sm-10 ${styles.colSm10}`}>
                        <input type="password" id="password"  onChange={e => setPassword(e.target.value)} placeholder="Enter Password"/>
                      </div>
                    </div>
                    <div className="form-group">
                     <button type="submit" value="Login" className={`btn btn-primary btn-block btn-lg ${styles.logInDocBtn}`}>Login</button>
                    </div>
                    <div className="text-center">Don't have an account? <Link to="/register">Register</Link></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
 
export default Login;