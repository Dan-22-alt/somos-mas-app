import { Stack, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Items = ({ array, isOpen }) => {
  const { pathname } = useLocation();

  const styleActive = ({ thisPath, linkPath }) => {
    if (thisPath === linkPath ){
      return {
        textDecoration : "em",
        color: "white",
        bg : "primary.800"
      }
    } else {
      return {
        textDecoration : "",
        color : "",
        bg : ""
      }
    }
  }

  const textActive = ({ thisPath, linkPath }) => (thisPath === linkPath ? 'white' : '');
  const bgActive = ({ thisPath, linkPath }) => (thisPath === linkPath ? 'primary.800' : '');

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
            rounded={'md'}
            px={2}
            py={1}
            _hover={{
              textDecoration: 'none',
              bg: 'primary.500',
            }}
            as={styleActive({
              thisPath: pathname,
              linkPath: item.route,
            }).textDecoration}
            color={styleActive({
              thisPath: pathname,
              linkPath: item.route,
            }).color}
            bg={styleActive({
              thisPath: pathname,
              linkPath: item.route,
            }).bg}
          >
            <Link to={item.route}>{item.name}</Link>
          </Text>
        ))}
      </Stack>
    </Fragment>
  );
};

export default Items;
