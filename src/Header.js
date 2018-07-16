import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.home = '/';
    }
    logout() {
        sessionStorage.setItem("username", "");
        sessionStorage.clear();
        var d = new Date();
        d.setTime(d.getTime() + (-2 * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = 'username' + "=" + '' + ";" + expires + ";path=/";
            window.location = "/login"; 
    }
    render() {
        return (
            <div className="headerCont">
            <Link className="appIcon" to={this.home} />
            <Link to={'/profile'} className={'profile'}></Link>
            <button onClick={this.logout}>Logout</button>
            </ div>
        );
    }
    
}
export default Header;