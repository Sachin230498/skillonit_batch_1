import React from 'react'
import Child1 from './child1'

const child2 = (props) => {
  return (
    <div>
        <Child1 name="rahul" age="22"/>
        <h1>I am child 2 , my props is {props.data}</h1>
    </div>
  )
}

export default child2