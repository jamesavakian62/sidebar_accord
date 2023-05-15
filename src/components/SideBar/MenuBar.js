import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { default as MenuBarItems } from "./MenuBarItems";

const MenuBarStyles = styled.div`
  background: #316bf3;
  z-index: 1;
  position: fixed;
  top: 0px;
  bottom: 0;
  width: 160px;
  font-size: 30px;
  line-height: 60px;
  text-align: left;
  height: calc(100vh - 65px);
`;

class MenuBar extends React.Component {
  render() {
    return (
      <MenuBarStyles>
        <MenuBarItems
          category={this.props.category}
          closeMenu={this.props.closeMenu}
          currentPage={this.props.currentPage}
          openMenu={this.props.openMenu}
          selectedIcon={this.props.selectedIcon}
          visible={this.props.visible}
        />
      </MenuBarStyles>
    );
  }
}

MenuBar.propTypes = {
  category: PropTypes.any,
  closeMenu: PropTypes.func,
  currentPage: PropTypes.any,
  openMenu: PropTypes.func,
  selectedIcon: PropTypes.string
};

export default MenuBar;
