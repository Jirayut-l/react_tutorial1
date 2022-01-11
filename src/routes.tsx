import {Navigate, useRoutes,} from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import AppBar from './pages/AppBar';


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
                // {path: 'login', element: <Login/>},
                {path: '404', element: <NotFound/>},
                {path: 'appbar', element: <AppBar/> },
                {path: '/', element: <Navigate to="/dashboard"/>},
                {path: '*', element: <Navigate to="/404"/>}
            ]
        },
        {path: '*', element: <Navigate to="/404" replace={true}/>}
    ])
}

