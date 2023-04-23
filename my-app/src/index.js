import React from "react";
import ReactDOM from "react-dom/client";


////    Type 1
// function Greeting() {
//     return (
//     <div>
//         <h3>My First Component</h3>
//     </div>
//     );
// }


////    Type 2
// function Greeting() {
//     return React.createElement('h2', {}, 'hello world');
// }

////    Type 3
// function Greeting() {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h2',{} ,'Hello World')
//     );
// }


////    Type 4
// function Greeting() {
//     return (
//         <div>
//             <h3>Hello People</h3>
//             <ul>
//                 <li>
//                     <a href="#">Hello World</a>
//                 </li>
//             </ul>
//         </div>
//     )
// }


////    Type 5
// function Greeting() {
//     return(
//         <>
//             <div>
//             <h3>hello People</h3>
//             <ul>
//                 <li>
//                     <a href="#">Hello World</a>
//                 </li>
//             </ul>
//         </div>
//         </>
//     )
// }

////    Type 6
// function Greeting() {
//     return(
//         <React.Fragment>
//             <div>
//             <h3>hello People</h3>
//             <ul>
//                 <li>
//                     <a href="#">Hello World</a>
//                 </li>
//             </ul>
//         </div>
//         </React.Fragment>
//     )
// }


////    Type 7
// function Greeting() {
//     return (
//     <div>
//         <Person/>
//         <Message/>
//     </div>
//     )
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//     return <p>This is my message.</p>
// }

const BookList = () =>{
    return (<section></section>)
}

const Book = () => {
    return (<article>

    </article>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)

export default Greeting;

