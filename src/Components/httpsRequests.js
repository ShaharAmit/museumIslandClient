import axios from 'axios';

export function getReq(url) {
    return fetch(url).then((res) => {
        return res.json();
    }).then(data => {
        if (data.err) {
            return null;
        } else {
            const dataObj = data.docs;
            return dataObj;
        }
    })
}

export function postReq(url, params) {
    return axios.post(url, params).then(res => {
            const data = res.data;
        if (data.err) {
            return null;
        } else {
            const dataObj = data.docs;
            return dataObj;
        }
    })
}
