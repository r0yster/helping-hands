import { Flex, Box, Stack, chakra, Text } from "@chakra-ui/react";
import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
// import backgroundImage from "../images/background.jpg";

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
      opacity="63%"
    >
      <Stack
        flexDir="column"
        mb="8rem"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "468px" }}>
          <Text fontSize="5xl" alignItems="center" color="purple.50">
            Help get food to those in
          </Text>
          <Text
            fontSize="5xl"
            alignItems="center"
            marginBottom="5rem"
            color="purple.50"
          >
            need in your community.
          </Text>

          <Box>
            <Flex
              align="center"
              justify="center"
              color="purple.50"
              fontSize="2em"
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
          color="purple.50"
        >
          "" seeks to serve the less fortunate through
        </Flex>
        <Flex
          align="center"
          justify="center"
          fontSize="1.5em"
          color="purple.50"
        >
          grass roots efforts of engaged community members.
        </Flex>
      </Stack>
    </Flex>
  );
}
export default Aboutus;
