import React from "react";
import Form from "./Form";
import Heading from "./Heading";

function InsertDish(props){
    return(
        <section className="add-dish container">
            <Heading />
            <Form />
        </section>
    );
}

export default InsertDish;
