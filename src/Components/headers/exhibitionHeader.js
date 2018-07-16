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
                <Link eventKey="1" componentClass={Link} href={'/get_artist_by_gallery/'+this.gallery} exact to={'/museum/'+this.gallery}>
                    Exhibition
                </Link>
                <Link eventKey="2" componentClass={Link} href={"/get_artist_by_gallery/"+this.gallery} to={"/get_artist_by_gallery/"+this.gallery}>
                    Artist
                </Link>
                <Link eventKey="3" componentClass={Link} href={"/museum/"+this.gallery} to={"/museum/"+this.gallery}>
                    Museum
                </Link>
            </ div>
        );
    }
    
}
export default Header;
