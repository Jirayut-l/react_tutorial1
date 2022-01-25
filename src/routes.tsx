import {Navigate, useRoutes,} from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import AppBar from './pages/AppBar';
import HomePage from './components/AppBar/HomePage';
import PostPage from './components/AppBar/PostPage';


export default function Routes() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout/>,
            children: [
                {index: true, element: <Navigate to="/dashboard/app" replace={true}/>},
                {path: 'app', element: <DashboardApp/>}
            ]
        },
        {
            path: '/',
            element: <LogoOnlyLayout/>,
            children: [
                {path: 'login', element: <Login/>},
                {path: '404', element: <NotFound/>},
                {path: '/', element: <Navigate to="/dashboard"/>},
                {path: '*', element: <Navigate to="/404"/>}
            ]
        },
        {
            path: '/appbar',
            element: <AppBar/>,
            children: [
                {index: true, element: <HomePage/>},
                {path: '/appbar/view/:id', element: <PostPage/>}
            ]
        },
        {path: '*', element: <Navigate to="/404" replace={true}/>}
    ])
}

