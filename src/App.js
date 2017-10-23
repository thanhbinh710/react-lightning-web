import React, { Component } from 'react';
import ReactModal from 'react-modal';
import logo from './logo.svg';
import './App.css';
import './components/Modal.css'
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
import Spinner from './components/Spinner/Spinner';
import Picklist from './components/Picklist';
import Slider from './components/Slider';
import ToggleButton from './components/ToggleButton';
import Modal from './components/Modal';
import Toast from './components/Toast';

class App extends Component {

  render () {
    return(
        <div>
          <Toast value="test" />
        </div>

    );
  }
}

export default App;
