import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 1px;
`;

// const ChildItemView = ({ params: { childItem: childItemName } }) => (
//   <LabelsContainer>
//     <Image src={`../../../labels${childItemName}.png`} alt='item' />
//   </LabelsContainer>
// );
//
// ChildItemView.propTypes = {
//   params: PropTypes.any,
// };
//
// export default ChildItemView;

const ChildItemView = (props) => {
  const childItemImage = props.params.childItem;
  if (childItemImage === 'Bananas') {
    return (
      <Container>
        <Image src='../../../labelsBananas.png' alt='item' />
      </Container>
    );
  } else if (childItemImage === 'Raspberries') {
    return (
      <Container>
        <Image src='../../../labelsRaspberries.png' alt='item' />
      </Container>
    );
  } else if (childItemImage === 'Watermelon') {
    return (
      <Container>
        <Image src='../../../labelsWatermelon.png' alt='item' />
      </Container>
    );
  } else if (childItemImage === 'Basic Date Code 1x1') {
    return (
      <Container>
        <Image src='../../../templatesBasicDateCode1x1.png' alt='item' />
      </Container>
    );
  }
  return (
    <Container>
      <Image src='../../../joltLogoSvg.svg' alt='item' />
    </Container>
  );
};

ChildItemView.propTypes = {
  params: PropTypes.any,
};

export default ChildItemView;
