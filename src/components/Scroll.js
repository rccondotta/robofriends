import React from "react";

// Wraps Components
const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '5px solid black', height: '1000px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;