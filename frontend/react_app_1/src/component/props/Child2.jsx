import React from 'react';
import Child3 from './Child3.jsx';

const Child2 = (props)=>{
    return <div>
        <h1>Hello child 2 , {props.name} </h1>
        <Child3 name = "Munnu" />
    </div>
}

export default Child2;