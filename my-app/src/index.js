import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//     return (
//     <div>
//         <h3>My First Component</h3>
//     </div>
//     );
// }

// function Greeting() {
//     return React.createElement('h2', {}, 'hello world');
// }

// function Greeting() {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h2',{} ,'Hello World')
//     );
// }

function Greeting() {
    return (
        <div>
            <h3>Hello People</h3>
            <ul>
                <li>
                    <a href="#">Hello World</a>
                </li>
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)

export default Greeting;

