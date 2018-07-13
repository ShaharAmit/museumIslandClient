import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap"
import './Header.css';

class Header extends Component {
    navSelected = '1';
    content = 'home';
    home = '/';
    handleSelect(selectedKey) {
        this.navSelected = `${selectedKey}`;
        switch(selectedKey) {
            case '1':
                this.content = 'home';
                break;
            case '2':
                this.content = 'news';
                break;
            case '3':
                this.content = 'for you'
                break;
            default:
                this.content = 'wrong page';
                break;
        }
      } 
      
    render() {
        return (
            <div className="headerCont">
            <a className="appIcon" componentClass={Link} href={this.home} exact to={this.home} eventKey="1"></a>
            <h1>{this.content}</h1>
            <Nav bsStyle="tabs" activeKey={this.navSelected} onSelect={k => this.handleSelect(k)}>        
                <NavItem eventKey="1" componentClass={Link} href={this.home} exact to={this.home}>
                    home
                </NavItem>
                <NavItem eventKey="2" componentClass={Link} href="/news" to="/news">
                    news
                </NavItem>
                <NavItem eventKey="3" componentClass={Link} href="/for_you" to="/for_you">
                    for you
                </NavItem>
            </Nav>
            </ div>
        );
    }
    
}
export default Header;