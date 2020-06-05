import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className = "UserOutput">
           <p> Profession: {props.profession} </p>
           <p> Country: Armenia</p> 
        </div>
    );
};

export default userOutput;