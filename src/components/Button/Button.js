import React from "react";


const Button = (props) => {

    return <div style ={{color:"orange", background: "beige",borderRadius:"10px"} }>
        {props.children}
    </div>

}

export default Button