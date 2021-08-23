import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import "./Event.css";

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
    >
      <Stack
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        rounded="md"
      >
        <SimpleGrid columns={2} spacing={10}>
          <FormControl w="200px" id="first-name" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name" />
          </FormControl>
          <FormControl id="first-name" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" />
          </FormControl>
        </SimpleGrid>
        <Input placeholder="Post an event" size="lg" />
        <Button
          borderRadius={0}
          type="submit"
          variant="solid"
          colorScheme="teal"
          width="full"
          rounded="md"
        >
          Submit
        </Button>
        <Text mb="8px">Comment: </Text>
        <Input
          placeholder="Here is a sample placeholder"
          size="sm"
          rounded="md"
        />
      </Stack>
    </Flex>
  );
};

export default Event;
