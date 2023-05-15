import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Icon, Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';

import sideNavData from '../../data/data';

const List = styled.ul`
  font-size: 12px;
  line-height: 30px;
  list-style: none;
  margin-top: 0px;
  padding: 0 0 3px 20px;
  & li {
      margin-left: 15px;
  }
`;
const ListLink = styled.div`
  a {
    color: #A9A9A9;
    font-size: 12px;
  }
  & :hover {
    color: #FFFFFF;
  }
`;
const AdminLink = styled.div`
  a {
    color: #A9A9A9;
    margin-left: 20px !important;
  }
  & :hover {
    color: #FFFFFF;
  }
`;
const SubcategoryHeader = styled.h5`
  color: #A9A9A9;
  margin-left: 20px !important;
`;
const Header = styled.h3`
  color: #FFFFFF;
  margin-top: 30px !important;
  text-align: center;
`;
const Linebreak = styled.hr`
  color: #FFFFFF;
  margin-bottom: 20px;
  width: 50%;
`;
const LockButtonWrapper = styled.div`
  bottom: 0;
  color: #A9A9A9;
  position: absolute;
  right: 125px;
`;

class PushMenu extends React.Component {
  render() {
    const category = sideNavData.lookupCategory(this.props.category);
    const menuLockButton = !this.props.menuLocked
      ? <Icon
        link={true}
        name='unlock'
        size='big'
      />
      : <Icon
        link={true}
        name='lock'
        size='big'
      />;
    return (
      <Sidebar
        animation="overlay"
        width='thin'
        visible={this.props.visible}
      >
        <Header>{this.props.category} test </Header>
        <Linebreak />
        {
          Object.keys(category).map((subCategory, index) => {
            return (
              <div key={index}>
                {
                  this.props.category === 'Admin' ?
                    <AdminLink>
                      <Link>
                        {subCategory}
                      </Link>
                    </AdminLink>
                    : <SubcategoryHeader>{subCategory}</SubcategoryHeader>
                }
                <List>
                  {
                    Object.keys(category[subCategory]).map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <ListLink>
                          <Link
                            to={`/${this.props.category}/${subCategory}/${category[subCategory][item].name}`}
                            activeStyle={{ color: '#FFFFFF' }}
                            onClick={() => {
                              this.props.closeOnItemClick(this.props.category);
                            }}
                          >
                            {category[subCategory][item].name}
                          </Link>

                        </ListLink>
                      </li>
                    ))
                  }
                </List>
              </div>
            );
          })
        }
        <LockButtonWrapper onClick={this.props.handleMenuLock}>
          {menuLockButton}
        </LockButtonWrapper>
      </Sidebar>
    );
  }
}

PushMenu.propTypes = {
  category: PropTypes.any,
  closeOnItemClick: PropTypes.func,
  currentPage: PropTypes.func,
  handleMenuLock: PropTypes.func,
  menuLocked: PropTypes.bool,
  selectedIcon: PropTypes.any,
  visible: PropTypes.bool,
};

export default PushMenu;
