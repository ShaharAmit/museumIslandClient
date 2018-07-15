import React, {
    Component
} from 'react'
import './includes/newGalleries.css';
import { Link } from "react-router-dom";
import { postReq } from './httpsRequests';
import Header from './mainHeader'


class forYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGalleries: []
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.username = sessionStorage.getItem("username");
    }

    add(gallery) {
        this.setState(prevState => ({
            newGalleries: [
                ...prevState.newGalleries,
                {
                    id: this.nextID(),
                    picture: gallery.picture,
                    gallery_name: gallery.gallery,

                }
            ]
        }))
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
        const params = new URLSearchParams(),
        url = 'https://museumisland45623.herokuapp.com/preferences',
        self = this;
        params.append('username', this.username);
        postReq(url,params).then(dataObj => {
          if(dataObj) {
            dataObj.map((gallery) => {
              self.add(gallery);
              console.log(gallery)
              return true;
            });
          } else {
            //think of an error
          }
        })
    }

    eachGallery(gallery, i) {
        return (
            <div className='GalleriesCont'>
            <div style={{
              background: "url("+gallery.picture+") center no-repeat",
              backgroundSize: 'contain',
              border: 'none',
            }}>
              <Link to={"/gallery_by_name/"+gallery.gallery_name} />
            </div>
            <p> 
              <b>{gallery.gallery_name}</b > 
            </p> 
          </div>
        )
    }

    render() {
        return (
            <div className = "cont" >
              <Header />
                { this.state.newGalleries.map(this.eachGallery) }
            </div >
        )
    }
}

export default forYou