import React from 'react';

import axios from 'axios';

export default class galleryPictures extends React.Component {
    state = {
        gallery: []
    }

    eachGallerie(gallerie, i) {
        return (
            <div className='GalleriesCont'>
                <button style={{
                    background: "url("+gallerie+") center no-repeat",
                    width: 28+'vw',
                    height: 28+'vw',
                    backgroundSize: 'contain',
                    border: 'none',
                }}></button>
                <p>
                    <b>{gallerie.gallery_name}</b >
                </p>
            </div>
        )
    }


    componentDidMount() {

        axios.get(`https://museumisland45623.herokuapp.com/pictures/`+this.props.match.params.gallery)
            .then(res => {
                const gallery = res.data.docs;
                this.setState({ gallery });
            })
    }
    render() {
        return (
           <ul>
               { this.state.gallery.map(this.eachGallerie) }
            </ul>
    )
    }
}