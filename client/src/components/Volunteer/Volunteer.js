import { React, useState } from "react";
import { useMutation } from "@apollo/client";
// import { ADD_VOLUNTEER } from "../../utils/mutations";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // const [formState, setFormState ] = useState({ firtName: "", lastName: "", email: "", phoneNumber: "" });
  // const [addVolunteer] = useMutation(ADD_VOLUNTEER);

  const handleChange = (event) => {
    setFirstName(event.target.value);
    setLastName(event.target.value);
    setEmail(event.target.value);
    setPhoneNumber(event.target.value);

  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    alert("Thank You for volunteering, someone will contact you!!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  };

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
            <form onSubmit={handleFormSubmit}>
            <FormControl w="200px" id="first-name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input value={firstName} onChange={handleChange} placeholder="First name" />
            </FormControl>
            <FormControl id="first-name" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input value={lastName} onChange={handleChange} placeholder="Last name" />
            </FormControl>
            
          <Input value={email} onChange={handleChange} placeholder="Email" size="lg" />
          <Input value={phoneNumber} onChange={handleChange} placeholder="Phone number" size="lg" />
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
          </SimpleGrid>
      </Stack>
    </Flex>
  );
};

export default Volunteer;
