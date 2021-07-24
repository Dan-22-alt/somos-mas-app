import { Stack, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Items = ({ array, isOpen }) => {
  const { pathname } = useLocation();

  const activeLink = ({ thisPath, linkPath }) => (thisPath === linkPath ? 'underline' : '');

  return (
    <Fragment>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        {array.map((item) => (
          <Text
            key={item.id}
            fontSize="xl"
            pr="4"
            textDecoration={activeLink({
              thisPath: pathname,
              linkPath: item.route,
            })}
          >
            <Link to={item.route}>{item.name}</Link>
          </Text>
        ))}
      </Stack>
    </Fragment>
  );
};

export default Items;
