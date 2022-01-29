import React from "react";

// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function DishItem(props){
    return(
        <li>
            <div className="dish">
                <span>{props.name}</span>
                <span><i className="fal fa-rupee-sign"></i>{props.price}</span>
                <i onClick={props.onRemove} className="fal fa-times"></i>
                {/* <CurrencyRupeeIcon /> */}
            </div>
        </li>
    );
}

export default DishItem;