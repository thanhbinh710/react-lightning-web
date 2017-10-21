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
import Breadcrumb from './components/Breadcrumb';

const breadcrumbs = [
  { name: "PARENT ENTITY", link: "http://google.com" },
  { name: "PARENT RECORD NAME", link: "http://google.com" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Breadcrumb breadcrumbs={breadcrumbs}/>
      </div>
    );
  }
}

export default App;
