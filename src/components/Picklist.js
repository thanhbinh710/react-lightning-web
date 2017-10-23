import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
  fontColor: '#18375E',
  drawerArrow: '#051E3F',
  drawerBorder: '#DADFE7',
  optionTick: '#007ADE',
  menuShadowStart: '#B5C2CF',
  menuShadowEnd: '#FAFBFD',
};

const PicklistStyled = styled.div`
  color: ${colors.fontColor};
  margin: 5px;
  position: relative;
`;

const DrawerStyled = styled.div`
  border: 1px solid ${colors.drawerBorder};
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  padding: 10px 30px 10px 10px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DrawerArrow = styled.span`
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid ${colors.drawerArrow};
  height: 0;
  margin-top: 5px;
  position: absolute;
  right: 15px;
  width: 0;
`;

const OptionMenuStyled = styled.div`
  border: 1px solid ${colors.drawerBorder};
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 ${colors.menuShadowStart}, 0 3px 10px 0 ${colors.menuShadowEnd};
  margin: 5px 5px 0 0;
  position: absolute;
  text-align: left;
  width: calc(100% - 2px);
`;

const OptionStyled = styled.div`
  cursor: pointer;
  overflow: hidden;
  padding: 5px 5px 5px 40px;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:first-of-type {
    padding-top: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-of-type {
    padding-bottom: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const OptionTickStyled = styled.span`
  display: inline-block;
  position: relative;

  &:before {
    content: ' ';
    border-right: 2px solid ${colors.optionTick};
    height: 10px;
    left: -25px;
    position: absolute;
    transform: rotate(-45deg);
    top: -7px;
  }

  &:after {
    content: ' ';
    border-right: 2px solid ${colors.optionTick};
    height: 15px;
    left: -17px;
    position: absolute;
    transform: rotate(45deg);
    top: -11px;
  }
`;

export default class Picklist extends Component {
  static propTypes = {
    options: PropTypes.array,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    options: [],
    onClick: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      expanded: false,
    };
    
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleExpandedToggle = this.handleExpandedToggle.bind(this);
  }

  handleExpandedToggle() {
    if (this.state.expanded) {
      document.removeEventListener('click', this.handleBodyClick, false);
    } else {
      document.addEventListener('click', this.handleBodyClick, false);
    }

    this.setState({
      expanded: !this.state.expanded,
    });
  }

  handleBodyClick(event) {
    if (this.node.contains(event.target)) {
      return;
    }

    this.handleExpandedToggle();
  }

  handleOptionClick(event, idx) {
    const {
      selected,
    } = this.state;
    const selectedIndex = selected.indexOf(idx);

    event.stopPropagation();
    
    if (selectedIndex > -1) {
      selected.splice(selectedIndex, 1);
    } else {
      selected.push(idx);
    }

    const sortedSelected = selected.sort();

    this.setState({
      selected: sortedSelected,
    }, () => {
      this.props.onClick(sortedSelected);
    });

  }

  render() {
    const {
      options
    } = this.props;
    const {
      selected,
      expanded,
    } = this.state;

    const selectedValue = selected.map(optionIdx => options[optionIdx]);
    
    const value = selectedValue.length > 0 ? selectedValue.join(', ') : 'Select and Option';

    return (
      <PicklistStyled
        innerRef={node => (this.node = node)}
      >
        <DrawerStyled
          onClick={this.handleExpandedToggle}
          title={value}
        >
          {value}
          <DrawerArrow />
        </DrawerStyled>
        { expanded &&
          <OptionMenuStyled>
            {
              options.map((option, idx) => 
                <OptionStyled
                  key={idx}
                  className={selected.includes(idx) ? 'selected' : 'un-selected'}
                  onClick={event =>
                    this.handleOptionClick(event, idx)}
                  title={option}
                >
                  { selected.includes(idx) && <OptionTickStyled /> }
                  {option}
                </OptionStyled>
              )
            }
          </OptionMenuStyled>
        }
      </PicklistStyled>
    );
  }
}
