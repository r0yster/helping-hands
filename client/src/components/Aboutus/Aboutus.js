import { Flex, Box, Stack, Image as Img } from "@chakra-ui/react";
import React from "react";
import source from "../Aboutus/icon3.png";
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
        backgroundColor="whi#367e7fpha.900"
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
            textShadow=".75px .75px #367e7f"
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
            borderBottomColor="#367e7f"
            textShadow=".75px .75px #367e7f"
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
       
            />
          </Flex>

          <Box>
            <Flex
              align="center"
              justify="center"
              color="black.900"
              fontSize="2em"
              textShadow=".75px .75px #367e7f"
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
          textShadow=".75px .75px #367e7f"
        >
          Helping Hands seeks to serve the less fortunate through
        </Flex>
        <Flex
          align="center"
          justify="center"
          fontSize="1.5em"
          color="black.900"
          textShadow=".75px .75px #367e7f"
        >
          grass roots efforts of engaged community members.
        </Flex>
      </Stack>
    </Flex>
  );
}
export default Aboutus;
