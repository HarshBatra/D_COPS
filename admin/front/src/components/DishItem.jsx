import React from "react";

// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function DishItem(props){
    
    function handleClick(event) {
        fetch(`/menu/deletion?delID=${encodeURIComponent(event)}`)
          .then(response => response.json())
          .then(state => this.setState(state));
        window.location.reload(false);      //to refresh the page
    }

    return(
        <li>
            <div className="dish">
                <span>{props.name}</span>
                <span><i className="fal fa-rupee-sign"></i>{props.price}</span>
                <i onClick={() => handleClick(props.id)} className="fal fa-times"></i>
                {/* <CurrencyRupeeIcon /> */}
            </div>
        </li>
    );
}

export default DishItem;