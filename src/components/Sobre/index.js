import React from 'react';
import { Banner } from './style';

const SobreBanner = (props) => {
  return (
    <Banner>
      <img src={props.image} alt="sobre" />
    </Banner>
  );
};

export default SobreBanner;
