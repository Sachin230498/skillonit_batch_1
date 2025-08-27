import React from 'react'

const child1 = (props) => {
  return (
    <div>
      {/* props = props(short of properties) are valuse passed from parents */}
      {/* component to child components in react // props are read only */}
       
       <h1>Hello ,{props.name} , {props.age} </h1>

    </div>
  );
}

export default child1