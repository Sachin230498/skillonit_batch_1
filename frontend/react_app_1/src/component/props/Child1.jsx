import React from 'react';
import Child2 from './Child2.jsx';

const Child1 = (props )=>{
    return <div>
        <h1>Hello child 1 , {props.name}</h1>
        <Child2 name = "Chunnu"/>
    </div>
}

export default Child1;