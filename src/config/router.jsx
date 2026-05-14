import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/pricing',
        element: <Pricing/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
]);

export default router