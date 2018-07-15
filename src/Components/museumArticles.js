import React from 'react';
import axios from 'axios';
import './includes/museum.css';

export default class museumArticles extends React.Component {
    state = {
        gallery: [],
    }
    componentDidMount() {
        axios.get(`https://museumisland45623.herokuapp.com/museum/Power%20Plays`)
            .then(res => {
                const gallery = res.data.docs;
                this.setState({ gallery });
            })
    }
    render() {
        return <div className="museumItems">


            {
                this.state.gallery.map((item, index) => {

                    return (

                        <div key={index}>
                            {item.museum_name}
                            <h5>Museum Galleries:</h5>
                            {
                                item.galleries.map((subitem, i) => {
                                    return (
                                        <ul><li>{subitem}</li></ul>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>;
    }
}