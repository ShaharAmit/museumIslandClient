import React, {
    Component
  } from 'react'
import { getReq, postReq } from './httpsRequests'
import Header from './exhibitionHeader'
  
  class galleryByName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGalleries: []
        }
        this.add = this.add.bind(this)
        this.checkPaid = this.checkPaid.bind(this)
        this.nextID = this.nextID.bind(this)
        this.gallery = this.props.match.params.gallery_name;
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
            <div className='GalleriesCont'>
                <div style={{
                background: "url("+gallery.picture+") center no-repeat",
                backgroundSize: 'contain',
                border: 'none',
                }}>
                {/* <Link to={"/gallery_by_name/"+gallery.gallery_name} /> */}
                </div>
                <p> 
                <b>{gallery.gallery_name}</b > 
                </p> 
          </div>
        )
    }

    checkPaid() {
        const params = new URLSearchParams(),
        url = 'https://museumisland45623.herokuapp.com/check_paid_galleries',
        self = this;
        params.append('username', 'darkboyd');
        params.append('gallery', this.gallery)
        postReq(url, params).then(dataObj => {
            if(dataObj) {
                const secUrl = 'https://museumisland45623.herokuapp.com/get_all_gallery_pictures/'+this.gallery;
                getReq(secUrl).then(data => {
                    if(data) {
                        const picturesObj = data.pictures;
                        picturesObj.map((image) => {
                            self.add(image);
                            return true;
                        });
                    }
                })
            } else {
               console.log('pay now :)'); 
            }
        }).catch(err => {
            //think of an error
        })
    }
  
    render() {
      return ( 
        <div className='cont'>
            <Header selected='1' gallery={this.gallery} />
            { this.state.newGalleries.map(this.eachGallery) }
            <button onClick={this.checkPaid} className='watchFullGal'></button>
        </div >
      )
    }
  }
  export default galleryByName