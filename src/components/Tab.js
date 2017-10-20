
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  background: #ffffff;
  border: 1px solid #d8dde6;
  border-radius: 4px;
  display: inline-flex;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  background: #f4f6f9;
  border-radius: 4px 4px 0 0;
  display: inline-flex;
  height: 39px;
`;

const ChildrenContainer = styled.div`
  padding-top: 18px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 18px;
`;

class Tab extends Component {
  state = {
    currentTab: 0
  };

  setCurrentTab = i => {
    this.setState({ currentTab: i });
  };

  render() {
    const ActiveTab = styled.div`
      display: flex;
      align-items: center;
      background-color: #fff;
      cursor: pointer;
      padding-left: 15px;
      padding-right: 15px;
      font-family: SalesforceSans-Regular;
      font-size: 12px;
      color: #1589ee;
      border-radius: ${this.state.currentTab === 0 ? "4px" : "0"}
        ${this.state.currentTab === this.props.data.length - 1 ? "4px" : "0"} 0
        0;
      border-left: ${this.state.currentTab != 0 && "1px solid #d8dde6"};
      border-right: ${this.state.currentTab != this.props.data.length - 1 &&
        "1px solid #d8dde6"};
    `;

    const InactiveTab = styled.div`
      display: flex;
      align-items: center;
      background-color: #f4f6f9;
      cursor: pointer;
      padding-left: 15px;
      padding-right: 15px;
      font-family: SalesforceSans-Regular;
      font-size: 12px;
      color: #54698d;
      cursor: pointer;
      border-bottom: 1px solid #d8dde6;
      :first-child {
        border-radius: 4px 0 0 0;
      }
      :last-child {
        border-radius: 0 4px 0 0;
      }
    `;

    return (
      <Container>
        <TabsContainer>
          {this.props.data.map(
            (item, i) =>
              i === this.state.currentTab ? (
                <ActiveTab key={i} onClick={() => this.setCurrentTab(i)}>
                  {item.name}
                </ActiveTab>
              ) : (
                <InactiveTab key={i} onClick={() => this.setCurrentTab(i)}>
                  {item.name}
                </InactiveTab>
              )
          )}
        </TabsContainer>
        {this.props.data.map(
          (item, i) =>
            i === this.state.currentTab && (
              <ChildrenContainer>{item.content}</ChildrenContainer>
            )
        )}
      </Container>
    );
  }
}

export default Tab;