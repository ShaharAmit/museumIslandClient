import React from 'react';
import axios from 'axios';
import './includes/museum.css';
import { Link } from "react-router-dom";
import { getReq } from './httpsRequests';

export default class museum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exhibitions: []
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.gallery = this.props.match.params.gallery;
    }

    add(exhibition) {
        this.setState(prevState => ({
            exhibitions: [
                ...prevState.exhibitions,
                {
                    id: this.nextID(),
                    picture: exhibition.picture,
                    gallery_name: exhibition.gallery,

                }
            ]
        }))
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
        const url = `https://museumisland45623.herokuapp.com/museum/`+this.gallery,
        self = this;

        getReq(url).then(dataObj => {
            if(dataObj) {
              dataObj.map((museum) => {
                self.add(museum);
                console.log(museum)
                return true;
              });
            } else {
              //think of an error
            }
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
                <Link to={'/museum/'+this.gallery}>Exhibitions</Link>
                <Link to="/galleries">artists</Link>
                <Link to="/articles">store</Link>
                </div>
                <div className="museumItems">
                    {
                        this.state.exhibitions.map((this.exhibitions))
                    }
                </div>
            </div>
        )
    }
}