import React from 'react';
import './includes/all.css';
import { Link } from "react-router-dom";
import { getReq } from '../services/httpsRequests';
import Header from './headers/museumHeader'
import { checkLogin } from '../services/checkLoggedIn';


export default class museumArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.gallery = this.props.match.params.gallery;
        checkLogin();
    }

    add(gallery, artist) {
        this.setState(prevState => ({
            artists: [
                ...prevState.artists,
                {
                    id: this.nextID(),
                    gallery_name: gallery,
                    picture: artist.picture,
                    artist_name: artist.name,

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
                    const artistUrl = `https://museumisland45623.herokuapp.com/get_artist/`+gallery;
                    getReq(artistUrl).then(artistsObj => {
                        if(artistsObj) {
                            artistsObj.map((artist) => {
                                self.add(gallery,artist);
                                return true;
                            })
                        }
                    
                    })
                    return true;
                });
            } else {
              //think of an error
            }
          })
    }

    artists(artist,i) {
        console.log(artist)
        return (
            <div className='artistCont'>
                <div style={{
                    background: "url("+artist.picture+") center no-repeat",
                    backgroundSize: 'contain',
                    border: 'none',
                    }}>
                    <Link to={"/get_artist_by_gallery/"+artist.gallery_name} />
                </div>
                <p> 
                    <b>{artist.artist_name}</b > 
                </p> 
            </div>
        )
    }

    render() {
        return (
            <div className='cont'> 
                <Header selected='2' gallery={this.gallery} />
                <div className="museumItems">
                    {
                        this.state.artists.map((this.artists))
                    }
                </div>
            </div>
        )
    }
}