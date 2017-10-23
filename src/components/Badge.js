import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.span`
	background-color:#636c72;
	display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
`;

class Badge extends Component {
	render(){
		return (
			<Input>
				{this.props.value}
			</Input>
		);
	}
}

export default Badge;