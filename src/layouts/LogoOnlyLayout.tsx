import { Outlet } from 'react-router-dom';

const LogoOnlyLayout=()=>{
    return(
        <>
            <h1>LogoOnlyLayout </h1>
            <Outlet/>
        </>
    );
};

export default LogoOnlyLayout;
