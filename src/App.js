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
    //MethodA - Use react-modal package and design through Modal.css
    return (   
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <h1>Modal Header</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <div class="modalFooter">
            <button onClick={this.handleCloseModal}>Close</button>
            <button onClick={this.handleCloseModal}>Save</button>
          </div>
        </ReactModal>
    </div>
    );
    
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
