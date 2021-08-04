import React from 'react';
import { Box, Button, Link } from './style';

export default function ButtonHome(props) {
  return (
    <>
      <Box>
        <Link href={props.link}>
          <Button>{props.title}</Button>
        </Link>
      </Box>
    </>
  );
}
