import React, {
    Component
  } from 'react'
import { postReq } from '../services/httpsRequests'
import './includes/solo.css';
  
class ArticleByNA extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
        this.username = sessionStorage.getItem("username");
        this.article = this.props.match.params.name;
        this.author = this.props.match.params.author;
    }

    add(article) {
        this.setState({
                    id: this.nextID(),
                    picture: article.picture,
                    article_name: article.article_name,
                    author: article.author,
                    content: article.content       
        })
    }

    nextID() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    componentDidMount() {
        const url = 'https://museumisland45623.herokuapp.com/article',
        params = new URLSearchParams(),
        self = this;
        params.append('username', this.username);
        params.append('article', this.article);
        params.append('author', this.author);
        postReq(url,params).then(dataObj => {
            if(dataObj) {
                console.log(dataObj)
                self.add(dataObj);
            }
        })
    }
  
    render() {
      return ( 
        <div className='conti'>
            <div style={{
              background: "url("+this.state.picture+") center no-repeat",
              backgroundSize: 'contain',
              border: 'none',
            }}>
            </div>
            <p> 
                <b>{this.state.article_name}</b > 
            </p> 
            <p> 
                <b>{this.state.author}</b > 
            </p> 
            <p> 
                {this.state.content} 
            </p> 
        </div >
      )
    }
  }
  export default ArticleByNA