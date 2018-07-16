import React, {
    Component
  } from 'react'
  import { Redirect } from 'react-router-dom'
  import { GoogleLogin } from 'react-google-login';
  import { postReq } from '../services/httpsRequests'; 

  class newGalleries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.responseGoogle = this.responseGoogle.bind(this)
        this.checkLogin(null);
    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkUser(user) {
        const url = 'https://museumisland45623.herokuapp.com/check_user_exist',
                params = new URLSearchParams(),
                self = this;
            params.append('username', user);
            postReq(url,params).then(data => {
                if(data) {
                    const username = data.username;
                    if(username && username !== '') {
                        self.setState({redirect: true});
                    }
                }
            }) 
    }

    checkLogin(user) {
        if(user && user !== '') {
            this.checkUser(user);
        } else {
            user = sessionStorage.getItem("username");
            if(user && user !== '') {
                this.checkUser(user);
            } else {
                user = this.getCookie('username');
                if(user && user !== '') {
                    sessionStorage.setItem("username", user);
                    this.checkUser(user);
                }
            }
        }
    }
  
    responseGoogle (res) {
        if(res) {
            console.log(res);
            const email = res.w3.U3;
            if(email) {
                sessionStorage.setItem("username", email);
                this.setCookie('username',email,30)
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