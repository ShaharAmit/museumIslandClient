import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap"
import '../../Header.css';

class Header extends Component {
    navSelected = this.props.selected;
    gallery = this.props.gallery;
      
    render() {
        return (
            <div className="headerCont">
            <h1>{this.content}</h1>
            <Nav bsStyle="tabs" activeKey={this.navSelected}>        
                <NavItem eventKey="1" componentClass={Link} href={'/get_artist_by_gallery/'+this.gallery} exact to={'/museum/'+this.gallery}>
                    Exhibition
                </NavItem>
                <NavItem eventKey="2" componentClass={Link} href={"/get_artist_by_gallery/"+this.gallery} to={"/get_artist_by_gallery/"+this.gallery}>
                    Artist
                </NavItem>
                <NavItem eventKey="3" componentClass={Link} href={"/museum/"+this.gallery} to={"/museum/"+this.gallery}>
                    Museum
                </NavItem>
            </Nav>
            </ div>
        );
    }
    
}
export default Header;
