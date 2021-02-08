import React, { useContext } from 'react';
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import styles from "../styles/RegisterST.module.css";

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    return (
        <nav className="auth-options text-center">
            <Navbar.Collapse id="basic-navbar-nav">
            {userData.user ? (
                <Nav.Link onClick={logout}><i class="fas fa-sign-out-alt fa-lg"></i></Nav.Link>
            ) : (
                <>
                <NavDropdown title="Register as" id="nav-dropdown">
                    <NavDropdown.Item href="/register/teacher">Teacher</NavDropdown.Item>
                    <NavDropdown.Item href="/register/student">Student</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/login" className={styles.a}>Log-In</Nav.Link>
                </>
            )}
            </Navbar.Collapse>
        </nav>
    )
}

export default AuthOptions;