import React, {useState} from 'react';

const DashboardApp = () => {
    const [enableFirstName, setEnableFirstName] = useState(false)
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <>
            <h3> This Page DashboardApp </h3>
            <h1>My name is: {enableFirstName ? name : ''} {lastName}</h1>
            <h2>{`Boolean Value: ${enableFirstName}`}</h2>
            <input type="checkbox" onChange={event => setEnableFirstName(event.target.checked)}/>
            <input type="text" onChange={event => setName(event.target.value)}/>
            <input type="text" onChange={event => setLastName(event.target.value)}/>
        </>
    );
}

export default DashboardApp;
