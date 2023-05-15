import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MenuBar from "./SideBar/MenuBar";


const PageContentWrapper = styled.div`
  & .pushable {
    height: calc(100vh - 65px);
  }
  & > .ui.visible.thin.left.sidebar ~ .fixed,
  .ui.visible.thin.left.sidebar ~ .pusher {
    transform: translate3d(250px, 0, 0);
  }
  & .pushable > .ui.thin.left.sidebar,
  .ui.thin.right.sidebar {
    width: 250px !important;
    left: 260px !important;
  }
  & .pushable > .ui.thin.left.sidebar,
  .ui.thin.right.sidebar > .Push-menu {
    background-color: #383838;
    position: fixed;
    overflow-y: hidden !important;
  }
`;

class ShellNavigation extends Component {

  state = {
    category: this.props.category,
    labelName: "Basic Date Code 1x1",
    menuLocked: false,
    menuOpen: this.props.menuOpen,
    selectedIcon: null
  };

  static defaultProps ={
    category: "Lists",
    menuOpen: false
  }


  handleMenuOpen = category => {
    this.setState(prevState => ({
      category,
      menuOpen: !prevState.menuOpen,
      selectedIcon: prevState.category
    }));
  };

  handleMenuClose = category => {
    this.setState({
      menuOpen: false,
      selectedIcon: category,
      currentPage: category
    });
  };

  handleMenuItemClick = category => {
    if (!this.state.menuLocked) {
      this.setState({
        menuOpen: false
      });
    }
    this.setState({
      selectedIcon: category,
      currentPage: category
    });
  };
  
  handlePageClick = () => {
    if (!this.state.menuLocked) {
      this.setState({
        menuOpen: false
      });
    }
  };


  render() {
    //console.log("ShellNavigation state", this.state);
    return (
      <div>
        <MenuBar
          category={this.state.category}
          closeMenu={this.handleMenuClose}
          currentPage={this.state.currentPage}
          openMenu={this.handleMenuOpen}
          selectedIcon={this.state.selectedIcon}
          visible={this.state.menuOpen}
        />
        <PageContentWrapper>
        </PageContentWrapper>
      </div>
    );
  }
}

ShellNavigation.propTypes = {
  children: PropTypes.any,
  params: PropTypes.any,
  category: PropTypes.any
};

export default ShellNavigation;
