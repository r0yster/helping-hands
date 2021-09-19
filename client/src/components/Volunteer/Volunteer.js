import { React, useState } from "react";
import Footer from "../Footer/Footer";
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";

const Volunteer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    setFirstName(event.target.value);
    setLastName(event.target.value);
    setEmail(event.target.value);
    setPhoneNumber(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    alert("Thank you for volunteering, someone will contact you soon.");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  };

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

          <Box minW={{ base: "90%", md: "375px" }}>
            <form onSubmit={handleFormSubmit}>
              <FormControl id="first-name" isRequired>
                <FormLabel>First name</FormLabel>
                <Input
                  value={firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />
              </FormControl>
              <FormControl id="first-name" isRequired>
                <FormLabel>Last name</FormLabel>
                <Input
                  value={lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </FormControl>{" "}
              <FormControl id="phone-number" isRequired mb={2}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  value={phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </FormControl>
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
            </form>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
};

export default Volunteer;
