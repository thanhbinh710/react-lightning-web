import styled from 'styled-components'
import React from 'react'

const INPUT_TYPE_RADIO = 'radio'
const RadioStyle = styled.label`
  display: flex;
  height: 100%;

  padding: 0 10px;

  align-items: center;
  justify-content: center;

  color: ${({ color }) => color || '#333'};
  font-size: 14px;

  background: ${({ checked }) => checked ? '#F0F0F0' : '#FFF'};

  transition: background .3s ease-in-out, color .3s ease-in-out;

  input {
    display: none;
  }

  cursor: pointer;
`

const AlternateRadio = ({ content, checked, name, value, onChange, color = 'black', colorChecked = 'blue' }) => {
  return (
    <RadioStyle
      checked={checked}
      color={checked ? colorChecked : color}
    >
      <input
        type={INPUT_TYPE_RADIO}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {renderContent(content)}
    </RadioStyle>
  )
}

const renderContent = (content) => content && <span>{content}</span>

export default AlternateRadio
