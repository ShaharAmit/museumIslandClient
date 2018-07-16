import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.content = this.props.content;
        this.gallery = this.props.gallery
    }  
      
    render() {
        return (
            <div className="headerCont2">
            <h1>{this.content}</h1>
                <Link to={'/museum/'+this.gallery}>
                    Exhibition
                </Link>
                <Link to={"/get_artist_by_gallery/"+this.gallery}>
                    Artist
                </Link>
                <Link to={"/museum/"+this.gallery}>
                    Museum
                </Link>
            </ div>
        );
    }
    
}
export default Header;
