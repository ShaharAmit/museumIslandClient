import React, {
    Component
  } from 'react'
  import './includes/all.css';
  import { postReq } from '../services/httpsRequests';
  import Header from './headers/mainHeader'
  import { checkLogin } from '../services/checkLoggedIn';
  
class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
      this.username = sessionStorage.getItem("username");
      checkLogin();
    }
  
    componentDidMount() {
        const params = new URLSearchParams(),
        url = "https://museumisland45623.herokuapp.com/get_user_data",
        self=this;

        params.append('username', this.username);
        postReq(url,params).then(dataObj => {
          if(dataObj) {
              self.setState({
                paid_galleries: dataObj.paid_galleries,
                preferences: dataObj.preferences,
                purchases: dataObj.purchases,
                discounts_museums: dataObj.discounts_museums
              })
          } else {
            //think of an error
          }
        })
    }
  
    render() {
      return ( 
        <div className = "cont" > 
          <Header />
          
        </div >
      )
    }
  }
  
  export default Profile