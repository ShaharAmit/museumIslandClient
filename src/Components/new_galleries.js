import React, {
  Component
} from 'react'
import './includes/all.css';
import { Link } from "react-router-dom";
import { getReq } from '../services/httpsRequests';
import Header from './headers/mainHeader'
import { checkLogin } from '../services/checkLoggedIn';

class newGalleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGalleries: []
    }
    this.add = this.add.bind(this)
    this.nextID = this.nextID.bind(this)
    this.eachGallery = this.eachGallery.bind(this)
    checkLogin();
  }

  add(gallery) {
    this.setState(prevState => ({
      newGalleries: [
        ...prevState.newGalleries,
        {
          id: this.nextID(),
          gallery_name: gallery.gallery_name,
          picture: gallery.picture,
        }
      ]
    }))
  }

  nextID() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  componentDidMount() {
    const url = "https://museumisland45623.herokuapp.com/get_galleries",
    self = this;
    getReq(url).then((dataObj) => {
      if(dataObj) {
        dataObj.map((gallery) => {
          self.add(gallery);
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
      <div>
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

export default newGalleries