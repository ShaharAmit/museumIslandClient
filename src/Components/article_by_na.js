import React, {
    Component
  } from 'react'
import { postReq } from '../services/httpsRequests'
import Header from './headers/exhibitionHeader'

  
class ArticleByNA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.username = sessionStorage.getItem("username");
        this.article = this.props.match.params.name;
        this.author = this.props.match.params.author;
    }

    add(article) {
        this.setState(prevState => ({
            artists: [
                ...prevState.artists,
                {
                    id: this.nextID(),
                    picture: article.picture,
                    article_name: article.article_name,
                    author: article.author,
                    content: article.content
                }
            ]            
        }))
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
        console.log('imhere')
        const url = 'https://museumisland45623.herokuapp.com/article',
        params = new URLSearchParams(),
        self = this;
        params.append('username', this.username);
        params.append('article', this.article);
        params.append('author', this.author);
        console.log(this.username,this.article,this.author)
        postReq(url,params).then(dataObj => {
            if(dataObj) {
                dataObj.map((data) => {
                    if(data)
                        self.add(data);
                    return true;
                });
            } else {
            }
        })
    }

    eachGallery(data, i) {
        return (
            <div className='GalleriesCont'>
            <div style={{
              background: "url("+data.picture+") center no-repeat",
              backgroundSize: 'contain',
              border: 'none',
            }}>
            </div>
            <p> 
              <b>{data.name}</b > 
            </p> 
          </div>
        )
    }
  
    render() {
      return ( 
        <div className='cont'>
            { this.state.articles.map(this.eachGallery) }
        </div >
      )
    }
  }
  export default ArticleByNA