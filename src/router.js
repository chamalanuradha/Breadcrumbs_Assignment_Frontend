import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Registration'
import ProductionList from './pages/ProductList'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>    
    },
    {
        path: '/productlist',
        element: <ProductionList/>    
    }

])

export default router