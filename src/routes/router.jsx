import {lazy,Suspense} from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Path from './path'
import {Page} from '../components/Page'
import {Loading } from '../components/Loading'
import path from './path'


const Home=lazy(()=>import('../pages/Home'))
const PageNotFound=lazy(()=>import('../pages/PageNotFound'))
const Login=lazy(()=>import('../pages/Login'))

const getRouteElement=(Component)=>(
    <Suspense fallback={<Loading />}>
        <Component />
    </Suspense>
)


const Routes=[
    {path:path.HOME,element:getRouteElement(Home)},
    {path:path.NOT_FOUND,element:getRouteElement(PageNotFound)},
    {path:path.HOME,element:getRouteElement(Login)}
]

export default createBrowserRouter(Routes)