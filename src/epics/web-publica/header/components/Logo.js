import { Image } from '@chakra-ui/react';
import React from 'react';

const Logo = ({ img, alt }) => {
  return <Image objectFit="scale-down" width="auto" height="60px" maxH="60px" alt={alt} src={img} />;
};
export default Logo;
