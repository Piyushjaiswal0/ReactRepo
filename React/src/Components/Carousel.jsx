import React from 'react'
import { useState, useEffect } from 'react';

export default function Carousel() {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        (async () => {
            let DatainJson = await fetch('https://jsonplaceholder.typicode.com/posts');
            let DatainJsonText = await DatainJson.json();
            setInitialState(DatainJsonText.products)
        })();
    }, [])

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner" style={{ background: "black" }}>
                    <div className="carousel-item active">
                        <img src="https://www.bing.com/images/search?view=detailV2&ccid=wdDSWZrN&id=F61629770770BDA3DF63D339BA745EBED3787469&thid=OIP.wdDSWZrNNPIOlJzpe3b-xgHaCi&mediaurl=https%3a%2f%2fcdn.pixabay.com%2fphoto%2f2014%2f11%2f09%2f08%2f05%2fonline-523234_1280.png&exph=440&expw=1280&q=online+png+photos&simid=607998328741326960&FORM=IRPRST&ck=2DB418C810ECE5C3680641BAE89CDD48&selectedIndex=0&itb=1&idpp=overlayview&ajaxhist=0&ajaxserp=0" className="d-block w-100" alt="..." />
                    </div>
                    {initialState && initialState.map((phone, index) => {
                        return (
                            <div key={index} className="carousel-item">
                                <img src={phone.thumbnail} className="d-block w-100" alt="..." />
                            </div>
                        );
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
