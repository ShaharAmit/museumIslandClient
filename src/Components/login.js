import React, {
    Component
  } from 'react'
  import './includes/newGalleries.css';
  import { Redirect } from 'react-router-dom'
  import { GoogleLogin } from 'react-google-login';
  import { postReq } from './httpsRequests'; 

  
  class newGalleries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.responseGoogle = this.responseGoogle.bind(this)
        this.checkLogin(null);
    }

    checkLogin(em) {
        console.log('imhere')
        const email = sessionStorage.getItem("username"),
        self = this;
        if(em || email) {
            if(email) 
                em=email;
            console.log('imhere2',email)
            const url = 'https://museumisland45623.herokuapp.com/check_user_exist',
                params = new URLSearchParams();
            params.append('username', em);
            postReq(url,params).then(data => {
                if(data) {
                    console.log('imhere3')
                    const username = data.username;
                    console.log(username)
                    if(username && username !== '') {
                        self.setState({redirect: true});
                        console.log(self.state.redirect)
                    }
                }
            }) 
        }
    }
  
    responseGoogle (res) {
        if(res) {
            const email = res.w3.U3;
            if(email) {
                sessionStorage.setItem("username", email);
                this.checkLogin(email);
            }
        }
    }
    

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/"/>);
        }

        return ( 
            <div className = "cont" > 
                <GoogleLogin
                    clientId="937053336005-lsrv8qmolfp010k9f1uudqngc3c0b8n7.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />        
            </div >
        )
    }
  }
  
  export default newGalleries