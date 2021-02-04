import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import {Col,Row,Container} from 'react-bootstrap';
import img from "../imgs/undraw_sign_in_e6hj.svg";
import styles from "../styles/Register.module.css";

class Register extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            password:"",
            password2:"",
            errors:{},
            checked:"",
            subject:"",
            sclass:"",
            school:""
        }   
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChange = e => {
        this.setState({[e.target.id]:e.target.value})
    }
    
    handleCheck = e =>{
      this.setState({checked:!this.state.checked});
    }

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2
        }

        this.props.registerUser(newUser, this.props.history); 
    }

    showSub(){
    }



    render(){
        const {name, email, password, password2 ,errors ,checked ,sclass ,school} = this.state;
        const change = this.onChange;
        function msg(a){
          if(a){
            return(
              <div className="form-group">
                <Row  className="align-items-center">
                  <Col sm={2} className={`text-center ${styles.col}`}>
                    <i className="fas fa-book fa-lg"></i>
                  </Col>
                  <Col sm={10} className={styles.col}>
                    <input type="text" 
                          id="subject" 
                          placeholder="Enter Subject" 
                          value={name}
                          error={errors.subject} 
                          onChange={change} 
                          className={classnames("form-control", {
                            invalid: errors.subject
                          })}/> 
                    <span className="red-text">{errors.subject}</span>
                  </Col>
                </Row>
              </div>
            );
          }
        }
        return(
          <Container fluid className={styles.signupDoc}>
            <Row className="">
              <Col lg={8} className={styles.imgCol}>
                <img alt="..." src={img} />
              </Col>
              <Col lg={4} className={styles.formCol}>
                      <div className="form-box ">
            
                      <form className={`signup-form ${styles.rounded} shadow-lg`}  onSubmit={this.onSubmit}>
                          <h2 className="text-center">Register</h2>
                          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" dataInterval="false" style={{height:"100%"}}>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <div className="form-group">
                                  <Row  className="align-items-center">
                                    <Col sm={2} className={`text-center ${styles.col}`}>
                                      <i className="fas fa-signature fa-lg"></i>
                                    </Col>
                                    <Col sm={10} className={styles.col}>
                                      <input type="text" 
                                            id="name" 
                                            placeholder="Name" 
                                            value={name}
                                            error={errors.name} 
                                            onChange={this.onChange} 
                                            className={classnames("form-control", {
                                              invalid: errors.name
                                            })}/> 
                                      <span className="red-text">{errors.name}</span>
                                    </Col>
                                  </Row>
                                </div>

                                <div className="form-group">
                                  <Row  className="align-items-center">
                                    <Col sm={2} className={`text-center ${styles.col}`}>
                                      <i className="fas fa-envelope fa-lg"></i>
                                    </Col>
                                    <Col sm={10} className={styles.col}>
                                      <input type="email" 
                                            id="email" 
                                            placeholder="Email Address" 
                                            value={email}
                                            error={errors.email}
                                            onChange={this.onChange} 
                                            className={classnames("form-control", {
                                              invalid: errors.email
                                            })}/>
                                      <span className="red-text">{errors.email}</span>
                                    </Col>
                                  </Row>  
                                </div>

                                <div className="form-group">
                                  <Row  className="align-items-center">
                                    <Col sm={2} className={`text-center ${styles.col}`}>
                                      <i className="fas fa-key fa-lg"></i>
                                    </Col>
                                    <Col sm={10} className={styles.col}>
                                      <input type="password" 
                                            id="password" 
                                            placeholder="Password" 
                                            value={password}
                                            error= {errors.password} 
                                            onChange={this.onChange}
                                            className={classnames("form-control", {
                                              invalid: errors.password
                                            })} />
                                      <span className="red-text">{errors.password}</span>   
                                    </Col>
                                  </Row>  
                                </div>

                                <div className="form-group">
                                  <Row  className="align-items-center">
                                    <Col sm={2} className={`text-center ${styles.col}`}>
                                      <i className="fas fa-check-circle fa-lg"></i>
                                    </Col>
                                    <Col sm={10} className={styles.col}>
                                      <input type="password" 
                                            id="password2"
                                            placeholder="Confirm Password" 
                                            value={password2} 
                                            error={errors.password}
                                            onChange={this.onChange}
                                            className={classnames("form-control", {
                                              invalid: errors.password2
                                            })} />
                                      <span className="red-text">{errors.password2}</span>   
                                    </Col>
                                  </Row>  
                                </div>
                              </div>
                              <div className="carousel-item" style={{height:"100%"}}>
                                  <Row style={{marginTop:"5%"}}>
                                      <Col sm={2} className={`text-center ${styles.col}`}>
                                        <input type="checkbox" onChange={this.handleCheck} id="checked" />
                                      </Col>
                                      <Col sm={10} className={`${styles.col} text-left`}>
                                        <p>Are you a Teacher?</p>
                                      </Col>
                                  </Row>
                                {msg(this.state.checked)}
                                <div className="form-group">
                                  <Row  className="align-items-center">
                                    <Col sm={2} className={`text-center ${styles.col}`}>
                                      <i className="fas fa-chalkboard-teacher fa-lg"></i>
                                    </Col>
                                    <Col sm={10} className={styles.col}>
                                      <input type="text" 
                                            id="sclass"
                                            placeholder="Enter Class" 
                                            value={sclass} 
                                            error={errors.sclass}
                                            onChange={this.onChange}
                                            className={classnames("form-control", {
                                              invalid: errors.sclass
                                            })} />
                                      <span className="red-text">{errors.sclass}</span>   
                                    </Col>
                                  </Row> 
                                </div>
                                <div className="form-group">
                                  <Row  className="align-items-center">
                                    <Col sm={2} className={`text-center ${styles.col}`}>
                                      <i className="fas fa-school fa-lg"></i>
                                    </Col>
                                    <Col sm={10} className={styles.col}>
                                      <input type="text" 
                                            id="school"
                                            placeholder="Enter School Name" 
                                            value={school} 
                                            error={errors.school}
                                            onChange={this.onChange}
                                            className={classnames("form-control", {
                                              invalid: errors.school
                                            })} />
                                      <span className="red-text">{errors.school}</span>   
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
                            <button type="submit" className={`btn btn-primary btn-lg ${styles.signInDocBtn}`}>Sign Up</button>
                          </div>
                          <div className="text-center">Already have an account? <Link to="/login">Login here</Link></div>
                          

                      </form>
                  </div>
              </Col>
            </Row>
        </Container>
        )
    }
}


Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(mapStateToProps,{registerUser})(withRouter(Register));