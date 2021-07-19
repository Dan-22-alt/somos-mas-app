import { Box, Heading, Stack, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import imgg from "./image/imgg.jpg";

const Title = ({ title, image }) => {
  const imageBg = false;

  return (
    <Box
      alignItems={"center"}
      Width="300%"
      objectFit="cover"
      height="200px"
      display="flex"
      justifyContent="center"
      backgroundImage={image ? image : imgg}
      width="100%"
    >
      <Heading as="h1">{title}</Heading>
    </Box>

    /* imageBg ?: (
    <Box align={"center"} bg="cyan.100" Width="100vw" objectFit="cover">
      <Heading as="h1" mt="2rem" textAlign="center" size="3xl" isTruncated>
        {title}
      </Heading>
    </Box> */
  );
};

export default Title;
/* <Heading as="h2" size="3xl" isTruncated orientation="horizontal">
      {title}
    </Heading>
      <Box
      h={["10rem", "15rem", "17.5rem", "20rem"]}
      mt="18"
      bg="cyan.100" // borrar
      objectFit="cover"
      backgroundImage={image}
      backgroundSize="cover"
    >
      <Stack
        textAlign="center"
        direction="column"
        w="100%"
        h="100%"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          as="h1"
          fontSize={["30px", "35px", "50px"]}
          mt="2rem"
        >
          {title}
        </Text>
      </Stack>
    </Box> */
/* <Flex
  as="nav"
  align="center"
  justify="space-between"
  wrap="wrap"
  padding={1}
  bg="primary.400"
  color="white"
>
  <img src={image} alt="" />

  <Text
    textAlign="center"
    as="h1"
    fontSize={["30px", "35px", "50px"]}
    mt="2rem"
  >
    {title}
  </Text>
</Flex>*/
