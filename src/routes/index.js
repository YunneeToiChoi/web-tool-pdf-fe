import { Component } from 'react'
import Home from '~/pages/Home'
import Upload from '~/pages/Upload'
import Tools from '~/pages/Tools'
import Tools_Split from '~/pages/Tools/split'

const publicRoutes=[
    // route cho cac duong dan, thay doi body
    {path : '/', component: Home},
    {path : '/upload', component: Upload},
    {path : '/pdf-tools', component: Tools},
    {path : '/pdf-tools/pdf-split', component: Tools_Split}
]
const privateRoutes=[
    
]
export {
    publicRoutes,
    privateRoutes
}