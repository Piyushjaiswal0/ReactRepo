import React, { useState } from 'react'
import Cards from './Cards';

export default function ButtonClick() {
    const [initialState, setInitialState] = useState([]);
    const handleClick = () => {
        (async () => {
            let DatainJson = await fetch('https://jsonplaceholder.typicode.com/posts');
            let DatainJsonText = await DatainJson.json();
            setInitialState(DatainJsonText)
            console.log(DatainJsonText);
        })();
    }
    const handleUnclick = () => {
        setInitialState([])
    }
    return (
        <div>
            <div className="mb-3">
                <button type="button" className="btn btn-primary mx-3" onClick={handleClick}>Click me to Generate</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleUnclick}>Click me to Degenerate</button>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {initialState && initialState.map((phone) => {
                    return (<Cards key={phone.id} phone={phone}></Cards>);
                })}
            </div>
        </div>
    )
}
