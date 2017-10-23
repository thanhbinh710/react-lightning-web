import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './Slider.css';

const colors = {
  fontColor: '#71614E',
  sliderShadow: '#AEAEAE',
  sliderGradientStart: '#ECEBEA',
  sliderGradientEnd: '#D7D6D6',
  markerBorder: '#9C9C9C',
  markerGradientStart: '#F8F8F8',
  markerGradientEnd: '#ECECEC',
};

const Container = styled.div`
  border: 1px solid;
  color: ${colors.fontColor};
  padding: 5px;
  position: relative;
  text-align: left;
`;

const SliderCont = styled.div`
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  background: linear-gradient(${colors.sliderGradientStart}, ${colors.sliderGradientEnd});
  border-bottom: 1px solid ${colors.sliderShadow};
  display: inline-block;
  flex-basis: auto;
  height: 5px;
  opacity: 0.7;
  outline: none;
  transition: opacity .2s;
  width: calc(100% - 35px);
`;
const Value = styled.div`
  display: inline-block;
  flex-basis: auto;
  padding-left: 5px;
  width: 20px;
`;

export default class Slider extends Component {
  static propTypes = {
    range: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    value: PropTypes.number,
    step: PropTypes.number,
    label: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    range: {
      min: 0,
      max: 10,
    },
    value: 0,
    step: 1,
    label: 'Slider Label',
    onChange: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    }, () => this.props.onChange(this.state.value));
  }

  componentWillUpdate(props) {
    let value = props.value;

    if (value === this.state.value) {
      return;
    }

    if (props.range.min > value) {
      value = props.range.min;
    } else if (props.range.max < value) {
      value = props.range.max;
    }
    if (value !== this.state.value) {
      this.setState({
        value,
      });
    }
  }

  render() {
    const {
      step,
      label,
      range: {
        min,
        max,
      },
    } = this.props;
    const {
      value,
    } = this.state;

    return (
      <Container>
        <div>{label}</div>
        <div>{min} - {max}</div>
        <SliderCont
          onDrop={event => {
            console.log(event.target, event.clientX, event.pageX,'+++');
          }}
        >
          <SliderInput
            className='slider'
            type='range'
            min={min}
            max={max}
            value={value}
            step={step > 0 ? step : 1}
            onChange={this.handleChange}
          />
          <Value>{value}</Value>
        </SliderCont>
      </Container>
    );
  }
}
