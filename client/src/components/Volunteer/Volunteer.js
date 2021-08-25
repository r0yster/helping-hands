import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";

const Volunteer = () => {
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
        <Flex justifyContent="center">
          {" "}
          <Heading color="#367e7f">Volunteer</Heading>
        </Flex>

        <SimpleGrid columns={2} spacing={10}>
          <FormControl w="200px" id="first-name" isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl id="first-name" isRequired>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
        </SimpleGrid>
        <Input placeholder="Email" size="lg" />
        <Input placeholder="Phone number" size="lg" />
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
      </Stack>
    </Flex>
  );
};

export default Volunteer;
