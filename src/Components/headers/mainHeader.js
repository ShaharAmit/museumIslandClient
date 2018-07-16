import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.content = this.props.content;
    }      
    render() {
        return (
            <div className="headerCont2">
            <h1>{this.content}</h1>
                <Link to="/news_by_genre">
                    News
                </Link>
                <Link to="/for_you">
                    For You
                </Link>
            </ div>
        );
    }
    
}
export default Header;
