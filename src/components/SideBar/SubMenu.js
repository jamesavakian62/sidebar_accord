import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { measure } from "remeasure";

import sideNavData from "../../data/data";

//position: absolute;
const List = styled.ul`
  top: 0;
  font-size: 12px;
  line-height: 30px;
  list-style: none;

  margin-top: 0px;
  margin-left: 15px;
  border-left: ${props => props.isMain ? "2px solid rgba(255,255,255, 0.5)" : null}; 
  padding:0;

  
  & li {
    margin-left: 15px;
  }

`;
const ListLink = styled.div`
  a {
    color: rgba(255,255,255, 0.5);
    font-size: 12px;
  }
  & :hover {
    color: #ffffff;
  }
`;

const Collapsible = styled.div`
  overflow: hidden;
  transition: all 0.5s ease;
  height: ${props => (props.visible ? props.naturalHeight : 0)}px;
  background-color: ${props => props.isMain ? "rgba(37, 83, 205, 1)" : null}; 
`;

class SubMenu extends React.Component {
  render() {
    const { category: {title, name}, selected, visible, naturalHeight } = this.props;
    const category = sideNavData.lookupCategory(title);
    const subCategory = Object.keys(category)[0];
    const content = category[subCategory];
    const isMain = name === 'main'
    return (
      <Collapsible isMain={isMain} selected={selected} visible={visible} naturalHeight={naturalHeight}>
        <List isMain={isMain}>
          {content &&
            Object.keys(content).map((item, itemIndex) => (
              <li key={itemIndex}>
                <ListLink>
                  <Link
                    to={`/${title}/${subCategory}/${content[item].name}`}
                    activeStyle={{ color: "#FFFFFF" }}
                    onClick={() => console.log(content[item].name)}
                  >
                    {content[item].name}
                  </Link>
                </ListLink>
              </li>
            ))}
        </List>
      </Collapsible>
    );
  }
}

export default measure(SubMenu);
