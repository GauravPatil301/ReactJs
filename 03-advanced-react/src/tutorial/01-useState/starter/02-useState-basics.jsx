import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const [name, setName] = React.useState()

  const handleClick = () => {
    setCount(count + 1)
    // setCount('pants')
  }

  return (
  <div>
    <h4>You Clicked {count}</h4>
    <button type="button" className="btn" onClick={handleClick}>Click Me!</button>
  </div>
  );
};

export default UseStateBasics;

