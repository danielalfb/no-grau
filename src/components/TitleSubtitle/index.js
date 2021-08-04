import React from 'react';
import { Title, Subtitle, Box } from './style';

export default function TitleSubtitle(props) {
  return (
    <>
      <Box>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </Box>
    </>
  );
}
