import { React, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Footer from "../Footer/Footer";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data form form
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  const handleShowClick = () => setShowPassword(!showPassword);

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
        flexDir="column"
        mb="8rem"
        justifyContent="center"
        alignItems="center"
        rounded="md"
      >
        <Avatar bg="teal.500" />
        <Heading color="whiteAlpha.900">Sign Up</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleFormSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              rounded="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="username"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {/* <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText> */}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                rounded="md"
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
    <Footer />
    </>
  );
};

export default SignupForm;
