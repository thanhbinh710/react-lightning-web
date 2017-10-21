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
import DropDownMenu from './components/DropDownMenu';

const items1 = [
  { name: "Menu Item 1", onClick: () => { console.log('clicked')} },
  { name: "Menu Item 2", onClick: () => { console.log('clicked')} },
  { name: "Menu Item 3", onClick: () => { console.log('clicked')} },
];

const items2 = [
  { name: "Menu Item 1", onClick: () => { console.log('clicked')} },
];

const items = [ items1, items2 ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropDownMenu menuName='Menu Name' items={items}/>
      </div>
    );
  }
}

export default App;
