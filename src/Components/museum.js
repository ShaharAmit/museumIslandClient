import React from 'react';
import axios from 'axios';
import Header from "./museumHeader";
import './includes/museum.css';

export default class museum extends React.Component {
    state = {
        gallery: [],
    }
    componentDidMount() {
        axios.get(`https://museumisland45623.herokuapp.com/museum/`+this.props.match.params.gallery)
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
                            <Header />
                        </div>
                    )
                })
            }
        </div>;
    }
}