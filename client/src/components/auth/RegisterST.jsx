import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import ErrorNotice from "../misc/ErrorNotice";
import {Col,Row,Container} from 'react-bootstrap';
import img from "../imgs/undraw_exams_g4ow.svg";
import styles from "../styles/RegisterST.module.css";

function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, passwordCheck, displayName};
            await axios.post("http://localhost:5000/users/register", newUser);
            const loginResponse = await axios.post("http://localhost:5000/users/login", {
                email, password
            });
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
        <Container fluid className={styles.signupDoc}>
            <Row className="">
                <Col lg={8} className={styles.imgCol}>
                    <img alt="..." src={img} />
                </Col>
                <Col lg={4} className={styles.formCol}>
                        <div className="form-box ">
                
                        <form className={`signup-form ${styles.rounded} shadow-lg`}  onSubmit={submit}>
                            <h2 className="text-center">Register as Student</h2>
                            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" dataInterval="false" style={{height:"100%"}}>
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="form-group">
                                    <Row  className="align-items-center">
                                        <Col xs={2} className={`text-center ${styles.col}`}>
                                        <i className="fas fa-signature fa-lg"></i>
                                        </Col>
                                        <Col xs={10} className={styles.col}>
                                            <input type="text" id="dsplay-name" onChange={e => setDisplayName(e.target.value)} placeholder="Enter Name"/>
                                        </Col>
                                    </Row>
                                    </div>

                                    <div className="form-group">
                                    <Row  className="align-items-center">
                                        <Col xs={2} className={`text-center ${styles.col}`}>
                                        <i className="fas fa-envelope fa-lg"></i>
                                        </Col>
                                        <Col xs={10} className={styles.col}>
                                            <input type="email" id="email" onChange={e => setEmail(e.target.value)}  placeholder="Enter Email"/>
                                        </Col>
                                    </Row>  
                                    </div>

                                    <div className="form-group">
                                    <Row  className="align-items-center">
                                        <Col xs={2} className={`text-center ${styles.col}`}>
                                        <i className="fas fa-key fa-lg"></i>
                                        </Col>
                                        <Col xs={10} className={styles.col}>
                                            <input type="password" id="password" onChange={e => setPassword(e.target.value)}  placeholder="Enter Password"/>
                                        </Col>
                                    </Row>  
                                    </div>

                                    <div className="form-group">
                                    <Row  className="align-items-center">
                                        <Col xs={2} className={`text-center ${styles.col}`}>
                                        <i className="fas fa-check-circle fa-lg"></i>
                                        </Col>
                                        <Col xs={10} className={styles.col}>
                                            <input type="password" placeholder="Confirm password" onChange={e => setPasswordCheck(e.target.value)}/>
                                        </Col>
                                    </Row>  
                                    </div>
                                </div>
                                <div className="carousel-item" style={{height:"100%"}}>
                                    <div className="form-group">
                                    <Row  className="align-items-center">
                                        <Col xs={2} className={`text-center ${styles.col}`}>
                                        <i class="fas fa-venus-mars fa-lg"></i>
                                        </Col>
                                        <Col xs={10} className={styles.col}>
                                            <select placeholder="Enter Gender" id="gender">
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    </div>
                                    <div className="form-group">
                                    <Row  className="align-items-center">
                                        <Col xs={2} className={`text-center ${styles.col}`}>
                                        <i class="fas fa-chalkboard-teacher fa-lg"></i>
                                        </Col>
                                        <Col xs={10} className={styles.col}>
                                                <input type="tel" 
                                                id="class"
                                                placeholder="Enter Class" 
                                                 />
                                        </Col>
                                    </Row>
                                    </div>
                                    
                                    <div className="form-group">
                                    <Row  className="align-items-center">
                                        <Col xs={2} className={`text-center ${styles.col}`}>
                                        <i class="fas fa-phone-alt fa-lg"></i>
                                        </Col>
                                        <Col xs={10} className={styles.col}>
                                        <input type="tel" 
                                                id="phNo"
                                                placeholder="Mob No ( Ex: 999888XXXX)" 
                                                 />
                                        </Col>
                                    </Row> 
                                    </div>
                                    <div className="form-group">
                                    <Row  className="align-items-center">
                                        <Col xs={2} className={`text-center ${styles.col}`}>
                                        <i class="fas fa-user-clock fa-lg"></i>
                                        </Col>
                                        <Col xs={10} className={styles.col}>
                                        <input type="text" 
                                                id="age"
                                                placeholder="Enter Age" 
                                                 />
                                        </Col>
                                    </Row>
                                    </div>
                                    
                                </div>
                                </div>
                                <a className={`${styles.prev} carousel-control-prev`} href="#carouselExampleControls" role="button" data-bs-slide="prev">
                                <span className={`${styles.prevIcon}  carousel-control-prev-icon`} aria-hidden="true"></span>
                                </a>
                                <a className={`${styles.next} carousel-control-next`} href="#carouselExampleControls" role="button" data-bs-slide="next">
                                <span className={`${styles.nextIcon}  carousel-control-next-icon`} aria-hidden="true"></span>
                                </a>

                            </div>

                            <div className="form-group text-center">
                                <button type="submit" value="Register" className={`btn btn-primary btn-lg ${styles.signInDocBtn}`}>Sign Up</button>
                            </div>
                            <div className="text-center">Already have an account? <Link to="/login">Login here</Link></div>
                            

                        </form>
                    </div>
                </Col>
            </Row>
        </Container> 
        // <div className="register">
        //     <h2>Register</h2>
        //     {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
        //     <form onSubmit={submit}>
        //         <label>Email: </label>
        //         <input type="email" id="email" onChange={e => setEmail(e.target.value)}/>
        //         <label>Password: </label>
        //         <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
        //         <input type="password" placeholder="Confirm password" onChange={e => setPasswordCheck(e.target.value)}/>
        //         <label>Display name </label>
        //         <input type="text" id="dsplay-name" onChange={e => setDisplayName(e.target.value)}/>
        //         <input type="submit" value="Register" className="btn btn-primary" />
        //     </form>
        // </div>
        );
}
 
export default Register;