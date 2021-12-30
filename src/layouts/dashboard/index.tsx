import { Outlet } from 'react-router-dom';

const DashboardLayout=()=>{
    return(
        <>
        <h1>Dashboard Main </h1>
        <Outlet/>
        </>
    );
};

export default DashboardLayout;
