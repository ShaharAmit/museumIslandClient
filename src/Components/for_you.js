import React, {
    Component
} from 'react'
import './includes/newGalleries.css';

class forYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGalleries: []
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
    }

    add(gallerie) {
        this.setState(prevState => ({
            newGalleries: [
                ...prevState.newGalleries,
                {
                    id: this.nextID(),
                    gallery: gallerie.gallery,
                    picture: gallerie.picture,
                }
            ]
        }))
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
       const url = "https://museumisland45623.herokuapp.com/preferences";

        fetch (url, {
            method: 'post',
            headers: {
                "Access-Control-Allow-Origin" : "*",
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/plain, *'
            },
            body: JSON.stringify({
                username: 'darkboyd'
            })
        }).then((res) => {
                return res.json();
            })
            .then((data) => {
                var self = this;
                if(data.err) {

                } else {
                    const dataObj = data.docs;
                    dataObj.map((gallerie) => {
                        console.log(gallerie);
                        self.add(gallerie);
                        return true;
                    });
                }
            })
    }

    eachGallerie(gallerie, i) {
        return (
            <div className='GalleriesCont'>
                <button style={{
                    background: "url("+gallerie.picture+") center no-repeat",
                    width: 28+'vw',
                    height: 28+'vw',
                    backgroundSize: 'contain',
                    border: 'none',
                }}></button>
                <p>
                    <b>{gallerie.gallery}</b >
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className = "cont" >
                { this.state.newGalleries.map(this.eachGallerie) }
            </div >
        )
    }
}

export default forYou