import { Component } from 'react'
import Home from '~/pages/Home'
import Upload from '~/pages/Upload'
import Tools from '~/pages/Tools'
const publicRoutes=[
    // route cho cac duong dan, thay doi body
    {path : '/', component: Home},
    {path : '/upload', component: Upload},
    {path : '/pdf-tools', component: Tools}
]
const privateRoutes=[
    
]
export {
    publicRoutes,
    privateRoutes
}