import React, {
  Component
} from 'react'
import './includes/newGalleries.css';
import { Link, Router } from "react-router-dom";

class newGalleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGalleries: []
    }
    this.add = this.add.bind(this)
    this.moveToGallery = this.moveToGallery.bind(this)
    this.nextID = this.nextID.bind(this)
    this.eachGallery = this.eachGallery.bind(this)
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
    const url =
      "https://museumisland45623.herokuapp.com/get_galleries";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        var self = this;
        if(data.err) {

        } else {
          const dataObj = data.docs;
          dataObj.map((gallery) => {
            console.log(gallery);
            self.add(gallery);
            return true;
          });
        }
      })
  }

  moveToGallery(gallerieName) {
    // browserHistory.push('/gallery_by_name/'+gallerieName)
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
        { this.state.newGalleries.map(this.eachGallery) } 
      </div >
    )
  }
}

export default newGalleries