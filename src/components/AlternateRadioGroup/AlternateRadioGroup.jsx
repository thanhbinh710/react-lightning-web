import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import AlternateRadio from '../AlternateRadio/AlternateRadio'

const ERROR_RADIOGROUP = 'RadioGroup component accepts only Radio as child!'
const RadioGroupStyle = styled.div`
  display: inline-flex;
  height: 30px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: 1px solid #D8DDE6;

  overflow: hidden;

  label {
    border-right: 1px solid #D8DDE6;
  }

  label:last-of-type {
    border: 0;
  }
`

const AlternateRadioGroup = ({ name, value, onChange, color, colorChecked, children }) => (
  <RadioGroupStyle>
    {enhanceRadios(children, { name, value, onChange, color, colorChecked })}
  </RadioGroupStyle>
)

AlternateRadioGroup.propTypes = {
  name:     PropTypes.string.isRequired,
  children: (props, propName) => {
    const children = props[propName]
    const hasValidChildren = children.every(isRadioComponent)

    if (!hasValidChildren) {
      return new Error(ERROR_RADIOGROUP)
    }
  },
}

const enhanceRadios = (children, { value, ...radioProps }) =>
  children.map((radio) => React.cloneElement(radio, Object.assign({
    key:     radio.props.value,
    checked: radio.props.value === value,
  }, radioProps)))

const isRadioComponent = (component) => component.type === AlternateRadio

export default AlternateRadioGroup
