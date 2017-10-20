import React, {Component} from 'react';
import styled from 'styled-components';

const Input = styled.div`
  cursor : ${props =>
  props.disable === true ? 'not-allowed' : 'pointer'
  };
  position: relative;
	width : 50px;
	height : 25px;
	background-color: ${props =>
  props.toggle ? (props.onBackgroundColor ? props.onBackgroundColor : 'blue') : (props.offBackgroundColor ? props.offBackgroundColor : 'blue')
  };
	border-radius : 25px;
	div{
	position : absolute;
	${props =>
  props.toggle === true ? 'right : 0' : 'left : 0'
  };
	height : 23px;
	border-radius : 25px;
	border : 1px solid ${props =>
  props.toggle ? (props.onBackgroundColor ? props.onBackgroundColor : 'blue' ) : (props.offBackgroundColor ? props.offBackgroundColor : 'blue')
  };
	width : 25px;
  background-color: white;
	}
	opacity : ${props =>
  props.disable === true ? '0.6' : '1'
  };
`;

const Div = styled.div`
  padding : 5px;
  display : flex;
  label {
  padding : 3px 5px;
  }
`

class ToggleButton extends Component {
  render() {
    return (
      <Div>
        {this.props.label && <label>{this.props.label}</label>}
      <Input onClick={() => {
        if (!this.props.disable) this.props.onclick(this.props.toggle)
      }} toggle={this.props.toggle} disable={this.props.disable}
        onBackgroundColor={this.props.onBackgroundColor} offBackgroundColor={this.props.offBackgroundColor}>
        <div></div>
      </Input>
      </Div>
    );
  }
}

export default ToggleButton;