import React, {
    Component
  } from 'react'
import { getReq } from '../services/httpsRequests'
import Header from './headers/museumHeader'
import { checkLogin } from '../services/checkLoggedIn';
import BuyItem from './secondery/buy_item'
  
  class getItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.username = sessionStorage.getItem("username");
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.gallery = this.props.match.params.gallery_name;
        this.eachItems = this.eachItems.bind(this);
        checkLogin()
    }

    add(item) {
        console.log(item);
        this.setState(prevState => ({
            items: [
                ...prevState.items,
                {
                    id: this.nextID(),
                    picture: item.picture,
                    name: item.name,
                    price: item.price,
                    genre: item.genre,
                    description: item.description
                }
            ]            
        }))
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
        const url = 'https://museumisland45623.herokuapp.com/get_items/'+this.gallery,
        self = this;
        getReq(url).then(dataObj => {
            if(dataObj) {
                const items = dataObj.items_for_sale;
                items.map((item) => {
                self.add(item);
                return true;
                });
            } else {
                //think of an error
            }
        }).catch(err => {
            //think of an error
        })
    }

    eachItems(data, i) {
        return (
            <div className={'GalleriesCont'+i}>
            <div style={{
              background: "url("+data.picture+") center no-repeat",
              backgroundSize: 'contain',
              border: 'none',
            }}>
            </div>
            <p> 
              <b>{data.name}</b > 
            </p>
            <BuyItem data={data} username={this.username} /> 
          </div>
        )
    }
  
    render() {
      return ( 
        <div className='cont'>
            <Header selected='3' gallery={this.gallery} />
            { this.state.items.map(this.eachItems) }
        </div >
      )
    }
  }
  export default getItems