import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../Header.css';

class Header extends Component {
    navSelected = this.props.selected;
    gallery = this.props.gallery;

    handleSelect(selectedKey) {
        this.navSelected = `${selectedKey}`;
        switch(selectedKey) {
            case '2':
                this.content = 'news';
                break;
            case '3':
                this.content = 'for you';
                break;
            default:
                this.content = 'wrong page';
                break;
        }
      } 
      
    render() {
        return (
            <div className="headerCont2">
            <h1>{this.content}</h1>
                <Link eventKey="2" componentClass={Link} href="/news_by_genre" to="/news_by_genre">
                    News
                </Link>
                <Link eventKey="3" componentClass={Link} href="/for_you" to="/for_you">
                    For You
                </Link>
            </ div>
        );
    }
    
}
export default Header;
