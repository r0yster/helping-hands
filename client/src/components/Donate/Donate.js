import React from "react";
import { Flex, Stack, Box, Image as Img, Text } from "@chakra-ui/react";
import source from "../images/logo3.png";
import Footer from "../Footer/Footer";
const Donate = () => {
  return (
    <>
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
      >
        <Stack
          marginTop="4rem"
          boxShadow="2xl"
          p="6"
          rounded="md"
          bg="white"
          spacing={4}
          backgroundColor="whiteAlpha.900"
          flexDir="column"
          mb="8rem"
          justifyContent="center"
          alignItems="center"
        >
          <Box minW={{ base: "90%", md: "375px" }}>
            <Flex
              fontSize="2xl"
              alignItems="center"
              justify="center"
              color="black.900"
              textShadow=".75px .75px #367e7f"
            >
              {" "}
              <Text>When you donate to Helping Hands,</Text>
            </Flex>
            <Flex
              fontSize="2xl"
              alignItems="center"
              justify="center"
              color="black.900"
              textShadow=".75px .75px #367e7f"
            >
              {" "}
              <Text>you’re helping us to serve. </Text>
            </Flex>
            <Flex
              fontSize="2xl"
              alignItems="center"
              justify="center"
              color="black.900"
              textShadow=".75px .75px #367e7f"
            >
              {" "}
              <Text>those experiencing homelessness</Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Img src={source} alt="helping-hands icon" boxSize="100px" />
            </Flex>
            <Flex justifyContent="center" mt={3} mr={4}>
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="blank"
              >
                <input
                  type="hidden"
                  name="business"
                  value="rsolov23@yahoo.com"
                />
                <input type="hidden" name="no_recurring" value="1" />

                <input
                  type="hidden"
                  name="item_name"
                  value=" Helping Hands seeks to serve the less fortunate through grass roots efforts of engaged community members."
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </Flex>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
};

export default Donate;
