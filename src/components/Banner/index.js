import React from 'react';
import { Banner } from './style';
import banner from '../../images/image-plp.png'

const VitrineBanner = () => {
  return (
    <Banner>
      <img src={banner} alt="banner" />
    </Banner>
  );
};

export default VitrineBanner;
