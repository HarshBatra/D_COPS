import React from "react";

// import CloseIcon from '/Applications/Sandali/canteen/node_modules/@mui/icons-material/Close';

function Header(){
    return(
        <header>
            <div className="container">
                <h3 className="top-bar-title">D_COPS</h3>
                <i className="top-bar-title fal fa-times"></i>
                {/* <CloseIcon /> */}
            </div>
        </header>
    );
}

export default Header;