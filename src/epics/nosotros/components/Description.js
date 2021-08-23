import { Text } from '@chakra-ui/react';
import React from 'react';

const Description = ({ text, ...rest }) => {
  const createText = () => ({ __html: text });

  return <Text {...rest} dangerouslySetInnerHTML={createText()} />;
};

export default Description;
