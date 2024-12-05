import React, {useState} from 'react'

export default function Body() {
    const handleClick = ()=>{
        let uppercaseText = text.toUpperCase();
        setText(uppercaseText)
        // console.log("button clicked" + text)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
        // console.log("text change")
    }
    const handleFocus = ()=>{
        if (text === "Enter text here" || text === "ENTER TEXT HERE"){
            setText("")
        }
    }

    const [text, setText] = useState("Enter text here");

    return (
        <div>
            <h1>
            Enter text here
            </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onFocus={handleFocus} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button type="button" className="btn btn-primary my-3" onClick={handleClick}>Convert to uppercase</button>
            </div>
        </div>
    )
}
