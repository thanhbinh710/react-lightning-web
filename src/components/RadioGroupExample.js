import React, { PureComponent } from 'react'
import AlternateRadioGroup from './AlternateRadioGroup/AlternateRadioGroup'
import AlternateRadio from './AlternateRadio/AlternateRadio'

export default class RadioGroupExample extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    console.log('<RadioGroupExample/> change event triggered', target.value)

    this.setState({
      value: target.value
    })
  }

  render() {
    const { color, colorChecked } = this.props
    const { value } = this.state
    console.log('new value', value)
    return (
      <AlternateRadioGroup
        onChange={this.handleChange}
        name={'my-radio-group'}
        colorChecked={colorChecked}
        color={color}
        value={value}
      >
        <AlternateRadio
          value={'1'}
          content={'Mon'}
        />
        <AlternateRadio
          value={'2'}
          content={'Tue'}
        />
        <AlternateRadio
          value={'3'}
          content={'Wed'}
        />
        <AlternateRadio
          value={'4'}
          content={'Thu'}
        />
        <AlternateRadio
          value={'5'}
          content={'Fri'}
        />
      </AlternateRadioGroup>
    )
  }
}
