import React from 'react';
import { Box, Button, Link } from './style';

export default function ButtonHome(props) {
  return (
    <>
      <Box>
        <Button href={props.link}>{props.title}</Button>
      </Box>
    </>
  );
}
