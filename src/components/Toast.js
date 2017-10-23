import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: white;
    display: inline-flex;
    align-items: center;
    position: relative;
    background: #706e6b;
    font-weight: 300;
    border-radius: 0.25rem;
    margin: 0.5rem;
    padding: 0.75rem 3rem 0.75rem 1.5rem;
    text-align: left;
    justify-content: flex-start;
`;


class Toast extends Component {
	render(){
		return (
			<Container>
		        <span>susdfsccess</span>
		        <div>
		            <h2>
		                asdfasfsdafdsafdsafsd
		            </h2>
		        </div>
		        <div>Close</div>
			</Container>
		);
	}
}

export default Toast;