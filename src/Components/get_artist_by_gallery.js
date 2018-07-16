import React, {
    Component
  } from 'react'
import { getReq } from '../services/httpsRequests'
import Header from './headers/exhibitionHeader'
import {checkLogin} from '../services/checkLoggedIn'
import './includes/allSolo.css';


  
  class ArtistByGal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.gallery = this.props.match.params.gallery_name;
        checkLogin();
    }

    add(data) {
        this.setState({
            picture: data.picture,
            about: data.about[0],
            name: data.name,
            museums: data.museums,
            galleries: data.galleries
        })
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
        const url = 'https://museumisland45623.herokuapp.com/get_artist/'+this.gallery,
        self = this;
        getReq(url).then(dataObj => {
            if(dataObj) {
                dataObj.map((data) => {
                    console.log(data);
                self.add(data);
                return true;
                });
            } else {
                //think of an error
            }
        }).catch(err => {
            //think of an error
        })
    }

    eachGallery(data, i) {
        return (
            <div className={'GalleriesCont'+i}>
            </div>
        )
    }
  
    render() {
      return ( 
        <div className='cont'>
            <Header selected='2' gallery={this.gallery} />
            <div className='contai'>
                <div style={{
                    background: "url("+this.state.picture+") center no-repeat",
                    backgroundSize: 'contain',
                    border: 'none',
                }}>
                </div>
                <p> 
                <b>{this.state.name}</b > 
                </p> 
                <p> 
                <b>{this.state.about}</b > 
                </p> 
            </div>
        </div >
      )
    }
  }
  export default ArtistByGal