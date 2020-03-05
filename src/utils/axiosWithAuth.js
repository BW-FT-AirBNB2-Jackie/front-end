import axios from 'axios'

export const axiosWithAuth = () => {
    return axios
    .create({
        baseURL: 'https://rvbnb2.herokuapp.com/api',
        headers: { authorization: localStorage.getItem("token") }
    })
}
