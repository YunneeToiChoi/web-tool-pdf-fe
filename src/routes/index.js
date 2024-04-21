import { Component } from 'react'
import Home from '~/pages/Home'
import Tools from '~/pages/Tools'
import Tools_Split from '~/pages/Tools/split'
import { DefaultLayout } from '~/components/Layouts'
import Options from '~/pages/Options/options'
const publicRoutes=[
    // route cho cac duong dan, thay doi body
    {path : '/', component: Home},
    {path : '/pdf-tools', component: Tools},
    {path : '/pdf-tools/pdf-split', component: Tools_Split},
    {path : '/pdf-tools/pdf-split/option', component: Options},
]
const privateRoutes=[
    
]
export {
    publicRoutes,
    privateRoutes
}