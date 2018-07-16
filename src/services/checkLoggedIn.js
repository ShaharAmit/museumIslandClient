import { postReq } from './httpsRequests'

export function checkLogin() {
    const email = sessionStorage.getItem("username");
    console.log(email);
    if(email) {
        const url = 'https://museumisland45623.herokuapp.com/check_user_exist',
            params = new URLSearchParams();
        params.append('username', 'shahar.amit111@gmail.com');
        console.log(email);
        postReq(url,params).then(data => {
            if(data) {
                const username = data.username;
                if(username && username !== '') {
                    return true;
                } else {
                    window.location = "http://localhost:3000/login";
                }
            }
        }) 
    } else {
        checkCookie();
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    const username = getCookie("username");
    console.log(username);
    if (username && username!= '') {
        sessionStorage.setItem("username", username);
    } else {
        window.location = "http://localhost:3000/login";
    }
}