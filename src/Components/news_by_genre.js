import React, {
    Component
  } from 'react'
  import './includes/newsByGenre.css';
  import { Link } from "react-router-dom";
  import { getReq } from '../services/httpsRequests';
  import Header from './headers/mainHeader'
  import { checkLogin } from '../services/checkLoggedIn';
  
class newsByGenre extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newArticles: []
      }
      this.add = this.add.bind(this)
      this.nextID = this.nextID.bind(this)
      this.eachArticle = this.eachArticle.bind(this)
      checkLogin();
    }
  
    add(article) {
      this.setState(prevState => ({
        newArticles: [
          ...prevState.newArticles,
          {
            id: this.nextID(),
            article_name: article.article_name,
            picture: article.picture,
            author: article.author
          }
        ]
      }))
    }
  
    nextID() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
    }
  
    componentDidMount() {
      const url = "https://museumisland45623.herokuapp.com/each_genre_article",
      self = this;
      getReq(url).then((dataObj) => {
        if(dataObj) {
          dataObj.map((article) => {
              if(article) {
                  console.log(article)
                self.add(article);
              }
            return true;
          });
        } else {
          //think of an error
        }
      }).catch(err => {
        //think of an error
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
            <Link to={"/article_by_name/"+article.article_name+'/'+article.author} />
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
          { this.state.newArticles.map(this.eachArticle) } 
        </div >
      )
    }
  }
  
  export default newsByGenre