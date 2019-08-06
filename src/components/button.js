import React from 'react';
import './Button.css'

const button = (props) => {
    return (
        <React.Fragment>
            <div>{props.label}</div>
        </React.Fragment>
    );
}

export default button;