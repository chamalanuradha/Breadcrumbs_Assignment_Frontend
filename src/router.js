import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Registration'
import ProductionList from './pages/ProductList'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'

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
    },
    {
        path: '/addproduct',
        element: <AddProduct/>    
    },
    {
        path: '/updateproduct/:id',
        element: <UpdateProduct/>    
    }

])

export default router