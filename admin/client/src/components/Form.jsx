import React from "react";

import Button from "./Button";
import Input from "./Input";


function Form(props){

    return( 
        <form 
        onSubmit={ (event) =>{
                let DishName = event.target[0].value;
                let DishPrice = event.target[1].value;
                let newItem = { name : DishName, price : DishPrice};
                props.onAdd(newItem);
                event.preventDefault();  
            } 
        } 
        className="row">
            <Input labeling="Item" align="col-lg-8 col-md-12" />
            <Input labeling="Price" align="col-lg-2 col-md-8" />
            <Button /> 
        </form>
    );
}

export default Form;
