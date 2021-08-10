import React from 'react';
import { Banner } from './style';
import banner from '../../assets/images/banner.svg';

const VitrineBanner = () => {
  return (
    <Banner>
      <img src={banner} alt="Banner " />
    </Banner>
  );
};

export default VitrineBanner;
