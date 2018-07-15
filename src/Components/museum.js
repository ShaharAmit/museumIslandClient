import React from 'react';
import axios from 'axios';
import Header from "./museumHeader";
import './includes/museum.css';
import { Link } from "react-router-dom";

export default class museum extends React.Component {
    state = {
        gallery: [],
    }
    componentDidMount() {
        axios.get(`https://museumisland45623.herokuapp.com/museum/`+this.props.match.params.gallery)
            .then(res => {
                const gallery = res.data.docs;
                this.setState({ gallery });
            })
    }

    exhibitions() {
        return (
            <div className='ExhibitionsCont'>
            
            </div>
        )
    }

    render() {
        return (
            <div className='cont'> 
                <div className='header'>
                <Link to="/galleries">artists</Link>
                <Link to="/articles">store</Link>
                </div>
                <div className="museumItems">
                    {
                        this.state.gallery.map((this.exhibitions))
                    }
                </div>
            </div>
        )
    }
}