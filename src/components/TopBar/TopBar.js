import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { Dropdown, Input } from 'semantic-ui-react';
import styled from 'styled-components';

import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import sideNavData from '../../data/data';

const TopBarHeader = styled.header`
  width: 100%;
  background-color: #FFF;
  height: 65px;
  color: #000;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
`;
const BreadcrumbWrapper = styled.div`
  line-height: 1.21428571em;
  padding: 23px 0 0 70px;
  font-size: 18px;
  & a:not(.active) {
    font-weight: bold;
    color: #333333;
  }
  & a.active {
    text-decoration: none;
    cursor: default;
    color: #333333;
  }
`;
const InputWrapper = styled.span`
& > .ui.input input {
  border: none !important;
  color: #333333 !important;
  padding: 3px 7px !important;
  font-size: 18px;
  font-weight: bold !important;
}
& :hover {
  border: 1px solid rgba(34,36,38,.15) !important;
  border-radius: .28571429rem !important;
}

`;

class TopBar extends Component {
  resolver = (key) => {
    if (key === 'Home') {
      return key;
    }
    return this.props.params[key];
  }
  inputLink = (link, key, text, index, routes) => {
    const category = sideNavData.lookupCategory(this.props.category);
    if (text === 'Bananas' || text === 'Raspberries' || text === 'Watermelon') {
      return (
        <span key={index}>
          {
            Object.keys(category).map((subCategory, i) => {
              return (
                <span key={i}>
                  {
                    Object.keys(category[subCategory]).map((item, itemIndex) => (
                      <span key={itemIndex}>
                        {
                          category[subCategory][item].name === 'Labels'
                            ? <Dropdown
                              defaultValue={'Bananas'}
                              options={category[subCategory][item].childItems}
                              onChange={(event, data) => { this.props.router.push(`/${this.props.category}/${subCategory}/${category[subCategory][item].name}/${data.value}`); }}
                              style={{ fontWeight: 'bold', color: '#333333' }}
                            />
                            : null
                        }
                      </span>
                    ))
                  }
                </span>
              );
            })
          }
        </span>
      );
    } else if (text === 'Basic Date Code 1x1') {
      return (
        <span key={index}>
          {
            Object.keys(category).map((subCategory, i) => {
              return (
                <span key={i}>
                  {
                    Object.keys(category[subCategory]).map((item, itemIndex) => (
                      <span key={itemIndex}>
                        {
                          category[subCategory][item].name === 'Templates'
                            ? <InputWrapper>
                              <Input name='labelName' value={this.props.labelName} onChange={this.props.handleBreadcrumbInputChange} />
                            </InputWrapper>
                            : null
                        }
                      </span>
                    ))
                  }
                </span>
              );
            })
          }
        </span>
      );
    }
    return <Link key={key} to={link}>{text}</Link>;
  }
  render() {
    const { routes, params } = this.props;
    return (
      <div>
        <TopBarHeader>
          <BreadcrumbWrapper>
            <Breadcrumbs
              createLink={this.inputLink}
              params={params}
              resolver={this.resolver}
              routes={routes}
            />
          </BreadcrumbWrapper>
        </TopBarHeader>
      </div>
    );
  }
}

TopBar.propTypes = {
  category: PropTypes.any,
  handleBreadcrumbInputChange: PropTypes.any,
  labelName: PropTypes.any,
  params: PropTypes.any,
  routes: PropTypes.any,
};

export default TopBar;
