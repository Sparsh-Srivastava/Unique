import React,{Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <>
            <nav className="navbar bg-dark justify-content-center">
                <Link className="navbar-brand text-light font-weight-bold" to="/">Home</Link>
            </nav>
            </>
        ) 
    }
}

export default Navbar;