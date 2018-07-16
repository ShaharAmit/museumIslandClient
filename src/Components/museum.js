import React from 'react';
import './includes/museum.css';
import { Link } from "react-router-dom";
import { getReq } from '../services/httpsRequests';
import Header from './headers/museumHeader'
import { checkLogin } from '../services/checkLoggedIn';


export default class museum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exhibitions: []
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.gallery = this.props.match.params.gallery;
        checkLogin();
    }

    add(exhibition, pic) {
        this.setState(prevState => ({
            exhibitions: [
                ...prevState.exhibitions,
                {
                    id: this.nextID(),
                    picture: pic,
                    gallery_name: exhibition,

                }
            ]
        }))
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
        const url = `https://museumisland45623.herokuapp.com/galleries_by_gallery/`+this.gallery,
        self = this;

        getReq(url).then(dataObj => {
            if(dataObj) {
                const data = dataObj.galleries;
                data.map((gallery) => {
                    const galUrl = `https://museumisland45623.herokuapp.com/get_gallery_pic/`+gallery;
                    getReq(galUrl).then(galleryPic => {
                        if(galleryPic) {
                            self.add(gallery,galleryPic.picture);
                        }
                    })
                    return true;
                });
            } else {
              //think of an error
            }
          })
    }

    exhibitions(exhibition,i) {
        return (
            <div className='ExhibitionsCont'>
                <div style={{
                    background: "url("+exhibition.picture+") center no-repeat",
                    backgroundSize: 'contain',
                    border: 'none',
                    }}>
                    <Link to={"/gallery_by_name/"+exhibition.gallery_name} />
                </div>
                <p> 
                    <b>{exhibition.gallery_name}</b > 
                </p> 
            </div>
        )
    }

    render() {
        return (
            <div className='cont'> 
                <Header selected='1' gallery={this.gallery} />
                <div className="museumItems">
                    {
                        this.state.exhibitions.map((this.exhibitions))
                    }
                </div>
            </div>
        )
    }
}