import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sideNavData from '../../data/data';

const Image = styled.img`
  width: 100%;
  height: 20%;
`;

const MenuItemView = ({ params: { category, subCategory, item }, children }) => {
  const menuItem = sideNavData.lookupItem(category, subCategory, item);
  return (
    <div>
      {
        menuItem.name === 'Labels' ||
          menuItem.name === 'Templates'
          ? <div>
            {
              !children
                ? <Link to={`/${category}/${subCategory}/${item}/${menuItem.childItems[0].text}`} >
                  <Image src={menuItem.content} />
                </Link>
                : children
            }
          </div>
          : <Image src={menuItem.content} alt='item' />
      }
    </div>
  );
};

MenuItemView.propTypes = {
  params: PropTypes.any,
  children: PropTypes.any,
};

export default MenuItemView;
