import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Registration'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>    
    }
])

export default router