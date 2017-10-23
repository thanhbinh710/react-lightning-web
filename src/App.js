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


const breadcrumbs = [
  { name: "PARENT ENTITY", link: "http://google.com" },
  { name: "PARENT RECORD NAME", link: "http://google.com" },
];


const items1 = [
  { name: "Menu Item 1", onClick: () => { console.log('clicked')} },
  { name: "Menu Item 2", onClick: () => { console.log('clicked')} },
  { name: "Menu Item 3", onClick: () => { console.log('clicked')} },
];

const items2 = [
  { name: "Menu Item 1", onClick: () => { console.log('clicked')} },
];


const items = [items1, items2];

class App extends Component {
    constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }     
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
      
  render () {
    
    //MethodB - Use Modal.js  - needs to be customized
    return(
        <div>
        <button onClick={() => this.handleOpenModal()}>Open Modal</button>
                <Modal showModal={this.state.showModal} onClose={() => this.handleCloseModal()}>
                    <h1>Modal title</h1>
                    <p>hello</p>
                    <p><button onClick={() => this.handleCloseModalB()}>Close</button></p>
                </Modal>
        </div>

    );
  }
}

export default App;
