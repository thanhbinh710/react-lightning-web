import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';
import Button from './components/Button';
import Badge from './components/Badge';
import TextArea from './components/TextArea';
import TextFieldInput from './components/TextFieldInput';
import TextField from './components/TextFieldInput';
import Breadcrumb2 from './components/Breadcrumb';
import DropDownMenu from './components/DropDownMenu';
import Tab from './components/Tab';
import RadioGroupExample from './components/RadioGroupExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RadioGroupExample
          value={'3'}
          color={'#b70000'}
          colorChecked={'#2a6cd6'}
        />
      </div>
    );
  }
}

export default App;
