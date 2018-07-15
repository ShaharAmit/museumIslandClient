import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap"
import '../Header.css';

class Header extends Component {
    navSelected = this.props.selected;
    gallery = this.props.gallery;
      
    render() {
        return (
            <div className="headerCont">
            <a className="appIcon" componentClass={Link} href={this.home} exact to={this.home} eventKey="1"></a>
            <h1>{this.content}</h1>
            <Nav bsStyle="tabs" activeKey={this.navSelected}>        
                <NavItem eventKey="1" componentClass={Link} href={'/museum/'+this.gallery} to={'/museum/'+this.gallery}>
                    Exhibitions
                </NavItem>
                <NavItem eventKey="2" componentClass={Link} href={"/museum_artists/"+this.gallery} to={"/museum_artists/"+this.gallery}>
                    artists
                </NavItem>
                <NavItem eventKey="3" componentClass={Link} href={"/get_items_by_gallery/"+this.gallery} to={"/get_items_by_gallery/"+this.gallery}>
                    store
                </NavItem>
            </Nav>
            </ div>
        );
    }
    
}
export default Header;
