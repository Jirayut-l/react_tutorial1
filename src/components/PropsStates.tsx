import React, {useState} from 'react';

interface Message {
    title:string,
    message: string
}
// props & States
const PropsStates = (props: Message) => {
    const [count,setCount] = useState(0);
    const [value,setValues] = useState(false);
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>

            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <button onClick={() => setValues(true)}>
                Click True
            </button>

            <button onClick={() => setValues(false)}>
                Click False
            </button>
            <p>{value?'true':'false'} </p>
        </div>
    );
};

export default PropsStates;
