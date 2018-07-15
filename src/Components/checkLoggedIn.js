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
        window.location = "http://localhost:3000/login";
    }
}