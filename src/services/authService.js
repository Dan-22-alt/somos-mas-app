import React from 'react'
import axios from 'axios'


const login = (values) => {
    axios.post(`${process.env.REACT_APP_API_LOGIN}`, values)
        .then(res => {
            console.log(res)
            const token = res.data.token
            localStorage.setItem('token', token)
            return true
        })
        .catch(err => {
            console.log(err)
            return true
        })
}


export {login}
