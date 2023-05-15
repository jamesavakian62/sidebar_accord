import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

import sideNavData from "../../data/data";
import SubMenu from "./SubMenu";

const stateColors = {
  mainBackground: "#316bf3",
  firstMenu: "rgba(37, 83, 205, 1)",
  iconSelected: "#316bf3",
  iconHover: "#dedede",
  iconDefault: "#dedede",
  menuSelected: "#FFF",
  menuHover: "rgba(0, 0, 0, 0.15)",
  menuDefault: "transparent"
};
const menuItemActiveStyle = {
  marginRight: "-5px",
  borderBottomRightRadius: "12px",
  borderTopRightRadius: "12px"
};
const menuItemStyle = ({ selected }) => ({
  backgroundColor: selected
    ? stateColors.menuSelected
    : stateColors.menuDefault,
  color: selected ? stateColors.iconSelected : stateColors.iconDefault,
  boxShadow: selected ? "1.5px 0 0px 0.1px rgba(0, 0, 0, 0.15)" : "none",
  ...menuItemActiveStyle
});
const menuItemHoverStyle = () => ({
  color: stateColors.iconHover,
  boxShadow: "1.5px 0 0px 0.1px rgba(0, 0, 0, 0.15)",
});

const ListItem = styled.div``;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 5px;
  ${menuItemStyle};
  :hover {
    background-color: ${props => props.selected ? null : stateColors.menuHover};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.5s ease;
    ${menuItemHoverStyle};
  }
`;
const Text = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;

const FirstMenuStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${stateColors.firstMenu};
  p {
    color: white;
    margin-top: 0.1em;
    margin-bottom: 1em;
    font-size: 0.6em;
  }
  img{
    margin-top: 1em;
  }
`;

const FirstMenu = ({ title, onClick }) => (
  <FirstMenuStyles onClick={onClick}>
    <img width={40} alt="yado" src="https://ifeelgroup.zendesk.com/system/photos/9588/6742/YODA_Buypacker_SAV_réduit.png"/>
    <p>{title.toLowerCase()}</p>
  </FirstMenuStyles>
);

const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

class MenuBarItem extends React.Component {
  render() {
    return (
      <div>
        {sideNavData.getAll().map((category, index) => {
          const { name, title } = category;
          const selected = this.props.category === title;
          return (
            <ListItem key={index} selected={selected}>
              {name === "main" ? (
                <FirstMenu
                  {...category}
                  selected={selected}
                  onClick={() => this.props.openMenu(title)}
                />
              ) : (
                <Menu
                  selected={selected}
                  onClick={() => this.props.openMenu(title)}
                >
                <Flex>
                  <Icon name={name} />
                  <Text>{title}</Text>
                </Flex>
                  <Icon name="arrow right" />
                </Menu>
              )}

              <SubMenu
                selected={selected}
                visible={selected}
                category={category}
              />
            </ListItem>
          );
        })}
      </div>
    );
  }
}

MenuBarItem.propTypes = {
  category: PropTypes.any,
  closeMenu: PropTypes.func,
  currentPage: PropTypes.any,
  openMenu: PropTypes.func,
  selectedIcon: PropTypes.string,
  visible: PropTypes.bolean
};

export default MenuBarItem;
