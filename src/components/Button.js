import React from "react";

const Button = (props) => {
    return (
        <div onClick={props.onClick} className={`${props.className} button`}>
            {props.children}
        </div>
    );
};

export default Button;
