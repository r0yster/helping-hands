import { Flex, Box, Stack, Text, Image as Img } from "@chakra-ui/react";
import React from "react";
import source from "../Aboutus/icon2.png";
function Aboutus() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundImage="url('../images/background.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      opacity="75%"
    >
      <Stack
        marginTop="4rem"
        boxShadow="2xl"
        p="6"
        rounded="md"
        bg="white"
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        flexDir="column"
        mb="8rem"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "468px" }}>
          <Flex
            fontSize="4xl"
            alignItems="center"
            justify="center"
            color="black.900"
            textShadow=".75px .75px teal"
          >
            Help get food to those in
          </Flex>
          <Flex
            fontSize="4xl"
            alignItems="center"
            justify="center"
            // marginBottom="5rem"
            color="black.900"
            borderBottomWidth="3px"
            borderBottomColor="black"
            textShadow=".75px .75px teal"
            mb="1rem"
          >
            need in your community.
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {" "}
            <Img
              src={source}
              alt="helping-hands icon"
              boxSize="150px"
              margin="0"
              alignItems="center"
              backgroundClip="transparent"
            />
          </Flex>

          <Box>
            <Flex
              align="center"
              justify="center"
              color="black.900"
              fontSize="2em"
              textShadow=".75px .75px teal"
            >
              Our Mission
            </Flex>
          </Box>
        </Box>
        Our Mission
        <Flex
          align="center"
          justify="center"
          fontSize="1.5em"
          color="black.900"
          textShadow=".75px .75px teal"
        >
          Helping Hands seeks to serve the less fortunate through
        </Flex>
        <Flex
          align="center"
          justify="center"
          fontSize="1.5em"
          color="black.900"
          textShadow=".75px .75px teal"
        >
          grass roots efforts of engaged community members.
        </Flex>
      </Stack>
    </Flex>
  );
}
export default Aboutus;
