import React, {Component} from 'react'
import { postReq } from '../../services/httpsRequests'


class SeeMore extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.genre = this.props.data.genre;
    this.item = this.props.data.name;
    this.username = this.props.username;
    this.price = this.props.data.price;
    this.buy = this.buy.bind(this);
  }

    buy() {
        const url = 'https://museumisland45623.herokuapp.com/add_paid_object',
        params = new URLSearchParams();
        params.append('username',this.username);
        params.append('item',this.item);
        params.append('genre',this.genre);
        console.log(this.username,this.item,this.genre);
        postReq(url,params).then(dataObj => {
            console.log(dataObj);
            if(dataObj) {
                alert(`bougth: ${this.item}`)
            } else {
                return;
            }
        });
    }

    render() {
        return (
            <button onClick={this.buy}>buy item for {this.price}$</button>
        )
    }
}
export default SeeMore