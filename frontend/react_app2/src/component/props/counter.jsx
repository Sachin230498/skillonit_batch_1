import React, {useState} from 'react'
import Child1 from './child1'


const counter = () => {
        // let data = "Hello";
        // console.log(data)
        const [data, setData] = useState("Hello")

    function changefun(){
         setData("Bye")

    }

   

  return (
    <div>
        {/* <h1>State - State is a specail kind of data that a React component owns and manage, <br />
        It is used to store dynamic values that can change over time and update the UI </h1> */}

       <h1>{data}</h1>
       <Child1 age = "20" />
       <button onClick={changefun}>Change the Data</button>

    </div>
  )
}

export default counter


// Props = read , passed data from parent to child