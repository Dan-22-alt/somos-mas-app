import React from 'react'
import axios from 'axios'

const login = (values) => {
    axios.post(`${process.env.REACT_APP_API_LOGIN}`, values)
        .then(res => {
            alert('success')
            console.log(res)
        })
        .catch(err => {
            alert('error')
            console.log(err)
        })
}

export {login}
