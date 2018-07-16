import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../Header.css';

class Header extends Component {
    navSelected = this.props.selected;
    gallery = this.props.gallery;
      
    render() {
        return (
            <div className="headerCont2">
            <h1>{this.content}</h1>
                <Link to={'/museum/'+this.gallery}>
                    Exhibitions
                </Link>
                <Link to={"/museum_artists/"+this.gallery}>
                    artists
                </Link>
                <Link to={"/get_items_by_gallery/"+this.gallery}>
                    store
                </Link>
            </ div>
        );
    }
    
}
export default Header;
