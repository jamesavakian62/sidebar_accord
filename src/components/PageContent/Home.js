import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
`;
const Logo = styled.img`
width: 100%;
`;

const Home = (props) => (
  <HomeContainer>
    {props.children || <Logo src='http://via.placeholder.com/350x150' alt='homeImg' />}
  </HomeContainer>
);

Home.propTypes = {
  children: PropTypes.object,
};

export default Home;
