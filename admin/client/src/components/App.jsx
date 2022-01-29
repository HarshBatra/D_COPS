import { useState } from "react";
import Header from "./Header.jsx"
import InsertDish from './InsertDish.jsx';
import List from './List.jsx';


function App(){
    const [dishList, setItems] = useState([]); //initialising with an empty array

    function handleInsertion(newDish){
        setItems( prevList => [...prevList, newDish] );
    }

    function handleDeletion(delIndex){
        setItems( prevList => prevList.filter( ( item, index) => (index !== delIndex) ) );
    }

    return(
        <div>
            <Header />
            <InsertDish addDish={ handleInsertion } />
            <List dishList={dishList} onRemove={ handleDeletion } />
        </div>
    );
}

export default App;