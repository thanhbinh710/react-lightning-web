import React, { Component } from 'react';
import styled from 'styled-components';
import './Spinner.css';

const Div = styled.div`
    &::after {
        background-color: ${props => props.color};
        animation-duration: ${props => props.speed}ms;
    },
    &::before {
        background-color: ${props => props.color};
        animation-duration: ${props => props.speed}ms;
    },
    
`;  

class Spinner extends Component {
	render(){
		return (
            <Div speed={this.props.speed} color={this.props.color} className={"slds-spinner slds-spinner_" + this.props.size}>
                <span className="slds-assistive-text">Loading</span>
                <Div speed={this.props.speed} color={this.props.color} className="slds-spinner__dot-a"></Div> 
                <Div speed={this.props.speed} color={this.props.color} className="slds-spinner__dot-b"></Div>
            </Div>
        );
	}
}

export default Spinner;