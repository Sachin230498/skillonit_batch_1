import React, { useState } from 'react'

const SearchBar = ({setCity}) => {
    const [input,setInput] = useState("")

    const handleSearch = ()=>{
        event.preventDefault()
        setCity(input)
    }
  return (
    <div>

        <form onSubmit={handleSearch}>
            <input type="text" placeholder='Enter City ...'
                  value={input}
                  onChange={(el)=>setInput(el.target.value)}
            />
           <input type="submit" value="Search" />
        </form>


    </div>
  )
}

export default SearchBar