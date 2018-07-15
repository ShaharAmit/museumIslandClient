import React, {
    Component
  } from 'react'
import { getReq, postReq } from './httpsRequests'
import { Link } from 'react-router-dom'
  
  class ArtistByGal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.gallery = this.props.match.params.gallery_name;
    }

    add(data) {
        this.setState(prevState => ({
            artists: [
                ...prevState.artists,
                {
                    id: this.nextID(),
                    picture: data.picture,
                    about: data.about,
                    name: data.name,
                    museums: data.museums,
                    galleries: data.galleries
                }
            ]            
        }))
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
            <div className='GalleriesCont'>
            <div style={{
              background: "url("+data.picture+") center no-repeat",
              backgroundSize: 'contain',
              border: 'none',
            }}>
              {/* <Link to={"/gallery_by_name/"+gallery.gallery_name} /> */}
            </div>
            <p> 
              <b>{data.name}</b > 
            </p> 
          </div>
        )
    }
  
    render() {
      return ( 
        <div className='cont'>
            { this.state.artists.map(this.eachGallery) }
            <button onClick={this.checkPaid} className='watchFullGal'></button>
            {/* <Link className='seeArtist'></Link>
            <Link className='watchGalMuseum'></Link> */}
            <Link to={"/get_artist_by_gallery/"+this.gallery} className='seeArtist'/>

        </div >
      )
    }
  }
  export default ArtistByGal