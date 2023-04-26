import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

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

// root.render(<Greeting />)
const books = [
    {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: './images/book-1.jpg',
        id: 1,
    },
    {
        author: 'Morgan Housel',
        title: 'The Psychology of Money',
        img: 'https://m.media-amazon.com/images/I/417KWv-EtEL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        id: 2,
    },
]

function BookList(){
    const someValue = 'shakeAndBake'
    const displayValue = () => {
        console.log(someValue);
    }
    return (
    <section className="booklist">
        {books.map((book) => {
            return (
                <Book {...book} key={book.id} displayValue={displayValue} />
            )
        })}
    </section>
    );
}

const Book = (props) => {
    const {img, title, author, displayValue} = props;
    // console.log(props);
    // const  = props
    
    return (
        <article className="book">
        <img src= {img} alt={title}/>
        <h2>{title}</h2>
        <button onClick={displayValue}>display title</button>
        <h4>{author}</h4>
    </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)

// export default Greeting; 

