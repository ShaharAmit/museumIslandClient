import React, {
    Component
  } from 'react'
import { getReq } from '../services/httpsRequests'
import Header from './headers/exhibitionHeader'
import SeeMore from './secondery/see_more'
import {checkLogin} from '../services/checkLoggedIn'
  
  class galleryByName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGalleries: []
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.gallery = this.props.match.params.gallery_name;
        this.username = sessionStorage.getItem("username");
        this.update = this.update.bind(this);
        checkLogin();
    }

    add(image) {
        let hasPic = false;
        this.state.newGalleries.forEach(obj => {
            if(obj.picture === image) {
                hasPic = true;
                return;
            }
        });
        if(!hasPic) {
            this.setState(prevState => ({
                newGalleries: [
                    ...prevState.newGalleries,
                    {
                        id: this.nextID(),
                        picture: image,
                    }
                ]
            }))
        }
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
        const url = 'https://museumisland45623.herokuapp.com/pictures/'+this.gallery,
        self = this;
        getReq(url).then(dataObj => {
            if(dataObj) {
                dataObj.map((image) => {
                self.add(image);
                return true;
                });
            } else {
                //think of an error
            }
        }).catch(err => {
            //think of an error
        })
    }

    eachGallery(gallery, i) {
        return (
            <div className={'GalleriesCont'+i}>
                <div style={{
                background: "url("+gallery.picture+") center no-repeat",
                backgroundSize: 'contain',
                border: 'none',
                }}>
                </div>
                <p> 
                    <b>{gallery.gallery_name}</b > 
                </p> 
          </div>
        )
    }

    update(update,data) {
        const self = this;
        data.map((image) => {
            self.add(image);
            return true;
        });
    }
  
    render() {
      return ( 
        <div className='cont'>
            <Header selected='1' gallery={this.gallery} />
            { this.state.newGalleries.map(this.eachGallery) }
            <SeeMore gallery={this.gallery} username={this.username} onChange={this.update} />
        </div >
      )
    }
  }
  export default galleryByName