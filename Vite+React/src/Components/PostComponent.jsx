import React, { useEffect } from 'react'

export default function PostComponent() { 
  useEffect(()=>{
    (async ()=>{
        let postdata = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'My custom title',
              body: 'I am the body',
              userId: 1,
            })});
        let postDataText = await postdata.json();
            console.log(postDataText);
    })();
  },[])
    return (
    <div>  
    </div>
  )
}
