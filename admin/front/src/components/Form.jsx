import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form(props){

    return( 
        <form action="/" method="post" className="row">
            <Input labeling="Item" align="col-lg-8 col-md-12" />
            <Input labeling="Price" align="col-lg-2 col-md-8" />
            <Button /> 
        </form>
    );
}

export default Form;