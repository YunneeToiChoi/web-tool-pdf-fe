import { Component } from 'react'
import Home from '~/pages/Home'
import Upload from '~/pages/Upload'
const publicRoutes=[
    // route cho cac duong dan, thay doi body
    {path : '/', component: Home},
    {path : '/upload', component: Upload},
]
const privateRoutes=[
    
]
export {
    publicRoutes,
    privateRoutes
}