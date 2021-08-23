import {React, useState} from "react";
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
import { useMutation } from '@apollo/client';
import { ADD_POST } from "../../utils/mutations";

import "./Event.css";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

const Event = () => {
  const [addPost, { error }] = useMutation(ADD_POST)
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      // add post to database
      await addPost({
        variables: { postText }
      });
  
      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
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
      >
        <SimpleGrid columns={2} spacing={10}>
          <FormControl w="200px" id="first-name" isRequired  onSubmit={handleFormSubmit}>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl id="first-name" isRequired>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
        </SimpleGrid>
        <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
        <textarea
          placeholder="Post an event..."
          value={postText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>

        <Button
          borderRadius={0}
          type="submit"
          variant="solid"
          colorScheme="teal"
          width="full"
        >
          Submit
        </Button>
        <Text mb="8px">Comment: </Text>
        <Input placeholder="Here is a sample placeholder" size="sm" />
      
      </Stack>
    </Flex>
  );
};

export default Event;

// import {
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
// } from "@chakra-ui/react"

// <FormControl id="email">
//   <FormLabel>Email address</FormLabel>
//   <Input type="email" />
//   <FormHelperText>We'll never share your email.</FormHelperText>
// </FormControl>
