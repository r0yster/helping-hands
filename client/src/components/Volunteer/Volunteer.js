import { React, useState } from "react";
import { useMutation } from "@apollo/client";
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
import { ADD_VOLUNTEER } from "../../utils/mutations";

const Volunteer = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '' });
  const [addVolunteer, { error }] = useMutation(ADD_VOLUNTEER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addVolunteer({
        variables: { ...formState }
      });

      console.log(data);

    } catch(e) {
      console.error(e);
    };

    alert("Thank you for volunteering, someone will contact you soon.");
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
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />
              </FormControl>
              <FormControl id="first-name" isRequired>
                <FormLabel>Last name</FormLabel>
                <Input
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </FormControl>{" "}
              <FormControl id="phone-number" isRequired mb={2}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  name="phoneNumber"
                  value={formState.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
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
    </>
  );
};

export default Volunteer;
