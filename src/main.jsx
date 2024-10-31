import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import Contact from './pages/contactMe.jsx';
import Home from './pages/home.jsx'; //about me is the home page
import Portfolio from './pages/portfolio.jsx';
import Resume from './pages/resume.jsx';
// import { element } from 'prop-types'; //It keeps trying to put this here
//I should make an error page

//app routing
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Resume',
                element: <Resume />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);