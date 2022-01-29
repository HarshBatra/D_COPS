import React from "react";

import DishItem from './DishItem.jsx';


function List(props){
    console.log("\nList :");
    console.log(props.dishList);

    return(
        <section className="container">
            <ul>
            { props.dishList.map( (dish, index) => (
                <DishItem
                    key= {index}
                    name={dish.name}
                    price={dish.price}
                    onRemove={ () => props.onRemove(index)}
                />
            ) ) }
            </ul>
        </section>
    );
}

export default List;