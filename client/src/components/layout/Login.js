import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import img from "../imgs/undraw_authentication_fsn5 (2).svg";
import styles from "../styles/Login.module.css";
class Login extends Component{
    constructor(){
        super()
        this.state = {
            email:"",
            password:"",
            errors:{}
        }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); 
        }
        
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChange = e => {
        this.setState({[e.target.id]:e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email:this.state.email,
            password:this.state.password,
        }
        this.props.loginUser(userData);
    }
    render(){
        const {email, password, errors} = this.state;
        return(
          <div className={`${styles.logInDoc}`}> 
            <div className={`row ${styles.row} text-center`}>
            <div className={`col-lg-8 ${styles.colLg8}`}>
              <img alt="..." src={img} className="logImg" />
            </div>
            <div className={`col-lg-4 ${styles.colLg4}`}>
              <div className={`shadow-lg  p-3  ${styles.rounded}`}>
                <h2>Log In</h2>
                <div className="p-3">
                  <form onSubmit={this.onSubmit}>
                    <div className={`row ${styles.row}`}>
                      <div className={`col-sm-2 ${styles.colSm2}`}>
                        <h6 className="head">
                          <i className="fas fa-envelope fa-lg"></i>
                        </h6>
                      </div>
                      <div className={`col-sm-10 ${styles.colSm10}`}>
                        <input type="email" 
                           id="email"
                           placeholder="Email Address" 
                           value={email} 
                           error={errors}
                           onChange={this.onChange}
                           className={classnames("form-control", {
                            invalid: errors.email || errors.emailnotfound
                          })}/>
                          <span className={`red-text ${styles.error}`}>
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                      </div>
                    </div>
                    <div className={`row ${styles.row}`}>
                      <div className={`col-sm-2 ${styles.colSm2}`}>
                        <h6 className="head">
                          <i className="fas fa-key fa-lg"></i>
                        </h6>
                      </div>
                      <div className={`col-sm-10 ${styles.colSm10}`}>
                          <input type="password"  
                           id="password" 
                           placeholder="Password" 
                           value={password} 
                           error={errors}
                           onChange={this.onChange}
                           className={classnames("form-control", {
                            invalid: errors.password || errors.passwordincorrect })}
                          />
                          <span className={`para ${styles.error}`}>
                            {errors.password}
                            {errors.passwordincorrect}
                         </span>
                      </div>
                    </div>
                    <div className="form-group">
                     <button type="submit" className={`btn btn-primary btn-block btn-lg ${styles.logInDocBtn}`}>Login</button>
                    </div>
                    <div className="text-center">Don't have an account? <Link to="/register">Register</Link></div>
                  </form>
                  <p className={`para ${styles.error}`}>{this.state.errMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);