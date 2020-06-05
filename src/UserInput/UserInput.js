import React from 'react'

const userInput = (props) => {
    const inputStyle = {
        border: '1px solid '
    };
    return (
    <div>
        <input 
            type = "text" 
            onChange = {props.switched} 
            value = {props.currentProf} 
            style = {inputStyle}
        />
    </div> 
    );
};

export default userInput;