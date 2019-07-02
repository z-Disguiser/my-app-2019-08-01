import { useState, useEffect } from 'react';
import React from "react";

export default function Index() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log(count);
        return console.log('结束')
});
    return (
        <div>
        <p> {count}</p>
        <button onClick={() => setCount(count + 1)}>
    Click me
        </button>
        </div>
);
}

// export default class Index extends Component{
//
//
//     render() {
//         return(
//             <h1>index组件</h1>
//         )
//     }
// }
