import React, { PureComponent, Component } from 'react';
import styled from 'styled-components';


const MenuName = styled.div`
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 10px;
  min-width: 24px;
  &:after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
  }
  position: relative;
  float: left;
`
const Menu = styled.div`
  position: absolute;
  font-size: 13px;
`

const MenuItems = styled.div`
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-top: 4px;
  min-width: 150px;
  -webkit-box-shadow: 3px 3px 3px 1px rgba(0,0,0,0.33);
  -moz-box-shadow: 3px 3px 3px 1px rgba(0,0,0,0.33);
  box-shadow: 3px 3px 3px 1px rgba(0,0,0,0.33);
  float: left;
  clear: left;
`
const MenuItemLine = styled.div`
  padding:10px;
`
const Line = styled.div`
  border: 1px solid #dddddd;
`
class MenuItem extends PureComponent {
  render() {
    return (
      <MenuItemLine onClick={this.props.onClick}>{this.props.name}</MenuItemLine>
    );
  }
};

class DropDownMenu extends Component {

  componentWillMount() {
    this.setState({ isDroped: false });
  }

  getDisplayStyle() {
    return this.state.isDroped ? { display: 'block' } : { display: 'none' };
  }

  toggleDisplay(e) {
    this.setState({ isDroped: !this.state.isDroped});
    //this.forceUpdate();
  }

  render() {
    const items = this.props.items;
    return (
      <Menu dark onClick={(e) => { this.toggleDisplay(e) }}>
        <MenuName>{this.props.menuName}</MenuName>
        <MenuItems style={ this.getDisplayStyle() }>
          {items.map(( itemGroup, index ) =>
            {
              const menuItems = itemGroup.map((item) => {
                return <MenuItem {...item} key={item.name} />
              });
              return (items.length > 1 && items.length - index > 1) ? menuItems.concat(<Line key={index} />): menuItems;
            })}
        </MenuItems>
      </Menu>
    );
  }
};

export default DropDownMenu;
