import React from 'react';
import './Button.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.el.focus();
    }
    render() {
      return (
        <React.Fragment>
            <div 
            ref={ (el) => {this.el = el}}
            tabIndex='-1'
            >{this.props.label}</div>
        </React.Fragment>
        );
    }
  }

export default Button;