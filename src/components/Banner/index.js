import React from 'react';
import { Banner } from './style';

const VitrineBanner = (props) => {
  return (
    <Banner>
      <img src={props.image} alt="Banner " />
    </Banner>
  );
};

export default VitrineBanner;
