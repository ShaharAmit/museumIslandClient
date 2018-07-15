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
                <NavItem eventKey="1" componentClass={Link} href={'/museum/'+this.gallery} exact to={'/museum/'+this.gallery}>
                    Exhibitions
                </NavItem>
                <NavItem eventKey="2" componentClass={Link} href="/news" to="/news">
                    artists
                </NavItem>
                <NavItem eventKey="3" componentClass={Link} href="/for_you" to="/for_you">
                    store
                </NavItem>
            </Nav>
            </ div>
        );
    }
    
}
export default Header;
