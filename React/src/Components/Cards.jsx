import React from 'react'
import { useState, useEffect } from 'react';

export default function Slider() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        (async () => {
            let DatainJson = await fetch('https://jsonplaceholder.typicode.com/posts');
            let DatainJsonText = await DatainJson.json();
            setInitialState(DatainJsonText)
        })();
    }, [])

    return (
        <>
            {initialState && initialState.map((phone, index) => {
                return (
                    <div key={index} className="card my-3 mx-2" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{phone.title}</h5>
                            <p className="card-text">{phone.body}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                );
            })}

        </>
    )
}
