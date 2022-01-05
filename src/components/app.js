import React, {useState,useEffect} from "react"
import CountBtn from "./countBTN/CountBTN"
import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"



const App = ()=>{
    const [productsState,setProductsState]= useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) =>{
                const newProductsState = productsArray.map((product)=>{
                    return product.title
                })
                setProductsState(newProductsState)
            })
    },[])

    const hasProduct=productsState.length>0
    return (
      <div>

          {hasProduct? <SearchBar products ={productsState} /> :"LOADING... " }

          <SearchBar products ={productsState} />
          <SearchBar products ={["bike rack","soccer ball","mountain bike","disc brake","mud guard"]} />
          <CountBtn incrementBy = {1} btnColor={'blue'}/>
          <CountBtn incrementBy = {5} btnColor={'orange'}/>
          <Button buttonText="Le boutton" />
          <Button>HelloWorld</Button>
      </div>
    )
  }

export default App