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

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextField label="Label" placeholder="Default Placeholder" />
        <Tab
        data={[
          {
            name: "ITEM ONE",
            content: <Badge value="first tab content" />
          },
          {
            name: "ITEM TWO",
            content: <Badge value="second tab content" />
          },
          {
            name: "ITEM THREE",
            content: (
              <img
                src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png"
                width={200}
              />
            )
          }
        ]}
      />
      </div>
    );
  }
}

export default App;
