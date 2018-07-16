import React, {
    Component
  } from 'react'
  import './includes/newsByGenre.css';
  import { Link } from "react-router-dom";
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
        url = "https://museumisland45623.herokuapp.com/get_user_data";

        params.append('username', this.username);
        postReq(url,params).then(dataObj => {
          if(dataObj) {
              console.log(dataObj);
            // dataObj.map((user) => {
              
            // });
          } else {
            //think of an error
          }
        })
    }
  
    eachArticle(article, i) {
      return ( 
        <div className='articlesCont'>
          <div style={{
            background: "url("+article.picture+") center no-repeat",
            backgroundSize: 'contain',
            border: 'none',
          }}>
            {/* <Link to={"/article_by_name/"+article.article_name+'/'+article.author} /> */}
          </div>
          <p> 
            <b>{article.article_name}</b > 
          </p> 
        </div>
      )
    }
  
    render() {
      return ( 
        <div className = "cont" > 
          <Header />
          {/* { this.state.newArticles.map(this.eachArticle) }  */}
        </div >
      )
    }
  }
  
  export default Profile