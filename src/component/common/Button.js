import React from 'react';

const ButtonComponent = (props) => {
    return(
    <button
        onClick={props.onClick}>
        {props.value}
    </button>
    );
}


export default ButtonComponent;