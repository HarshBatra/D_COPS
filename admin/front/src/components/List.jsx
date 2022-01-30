import React, {useState,useEffect} from 'react';
import DishItem from './DishItem.jsx';

function List(props){
    const [ data, setData] = useState([]);
    
    const getData = () => {
        let url = 'http://localhost:3001'; 
        fetch(url).then((response) => response.json()).then((receivedData) => setData(receivedData));
    }

    
    useEffect( () => getData(), [] );

    return(
        <section className="container">
            <ul>
            { data && data.length>0 && data.map((item)=> (
                <DishItem key = {item._id} id = {item._id} name = {item.name} price = {item.price} />
            ) ) }
            </ul>
        </section>
    );
}

document.querySelectorAll('ul').forEach( (li) => {
    li.addEventListener( "click", () => {

    })
}) 

export default List;
