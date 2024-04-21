import { Component } from 'react'
import Home from '~/pages/Home'
import Tools from '~/pages/Tools'
import Tools_Split from '~/pages/Tools/split'
import { DefaultLayout } from '~/components/Layouts'
import Options from '~/pages/Options/options'
import Tools_Split_Option from '~/pages/Tools/pdf-split_option'
import Tools_Split_Download from '~/pages/Tools/downloadPage'
const publicRoutes=[
    // route cho cac duong dan, thay doi body
    {path : '/', component: Home},
    {path : '/pdf-tools', component: Tools},
    {path : '/pdf-tools/pdf-split', component: Tools_Split},
    {path : '/pdf-tools/pdf-split/option', component: Options},
    {path : '/pdf-tools/pdf-split', component: Tools_Split},
    {path : '/pdf-tools/pdf-split_option', component: Tools_Split_Option},
    {path : '/pdf-tools/downloadPage', component: Tools_Split_Download},
]
const privateRoutes=[
    
]
export {
    publicRoutes,
    privateRoutes
}