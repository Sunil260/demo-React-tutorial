import React, {useState} from "react";
import "./SearchBar.css"


const SearchBar = (props) =>{

    const [searchVal, setSearchVal] = useState("")
    const handleInputChange = (event) =>{
        setSearchVal(event.target.value)
    }
    const handleClearClick = () =>{
        setSearchVal("")
    }

    const shouldDisplayBtn = searchVal.length > 0

    const filteredProdcuts = props.products.filter((product) => {
        return product.includes(searchVal.trim())
    })

    return <div>
        <input type='text' value={searchVal} onChange={handleInputChange}/>
        {shouldDisplayBtn && <button onClick={handleClearClick}>clear </button>}
        
        <ul>
            {filteredProdcuts.map((product) =>{
                return <li key={product}>{product}</li>
            })}
        </ul> 
        
    </div>
}

export default SearchBar