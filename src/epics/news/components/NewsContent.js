import { Box } from '@chakra-ui/react';
import parse from 'html-react-parser';
import React from 'react';

const NewsContent = ({ content = '' }) => {
  return <Box mb={6}>{parse(content)}</Box>;
};

export default NewsContent;
