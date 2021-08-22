import React from "react";
import { Flex } from "@chakra-ui/react";

const Event = () => {
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
    ></Flex>
  );
};

export default Event;
