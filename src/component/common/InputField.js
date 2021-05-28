import React from 'react';
const InputField = (props) => {
    return(
    <input
        type={props.type}
        value={props.value}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder} 
        onChange={props.handleOnChange}   
        />
    );
}
export default InputField;
