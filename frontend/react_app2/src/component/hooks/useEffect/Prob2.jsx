import React,{useEffect,useState} from 'react'



const Prob2 = () => {

    const [count,setCount] = useState(0);
    const [acount,setCounta] = useState(0);

    useEffect(()=>{
    //    console.log(document.title)
    document.title = `Clicked ${acount} times`
      console.log(`Ui is render ${acount}`)
    },[acount] ) 

  return (
    <div>

   <h1>{acount}</h1>
   <button onClick={()=>{setCounta(acount+1)}}>Increase</button>



    </div>
  )
}

export default Prob2