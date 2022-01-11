import React, {useState} from 'react';
import { Link } from "react-router-dom";

const DashboardApp = () => {
    const [enableFirstName, setEnableFirstName] = useState(false)
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <>
            <h3> This Page DashboardApp </h3>
            <h1>My name is: {enableFirstName ? name : ''} {lastName}</h1>
            <h2>{`Boolean Value: ${enableFirstName}`}</h2>
            <input type="checkbox" onChange={event => setEnableFirstName(event.target.checked)} defaultChecked={true}/>
            <input type="text" onChange={event => setName(event.target.value)}/>
            <input type="text" onChange={event => setLastName(event.target.value)}/>
            <br/>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/appbar">AppBar</Link>
        </>
    );
}

export default DashboardApp;
