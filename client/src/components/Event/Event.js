import { React, useState } from "react";
import {
  Input,
  Form,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { useQuery } from "@apollo/client";
import Home from "../Home/home";

import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

// useEffect?

const Event = () => {
  const [postText, setText] = useState("");
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  const [characterCount, setCharacterCount] = useState(0);
  const [addPost, { error }] = useMutation(ADD_POST, {
    variables: { addPostText: postText },

    update(cache, { data: { addPost } }) {
      // console.log("helloworld");
      try {
        // update posts array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add  to database

      await addPost({
        variables: { postText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
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
      <form onSubmit={handleFormSubmit}>
        <Stack
          spacing={4}
          p="1rem"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
        >
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
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-error" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <textarea
            placeholder="Post an event..."
            value={postText}
            name={postText}
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
        </Stack>
      </form>
      <div
        style={{ color: "navy", fontWeight: "bold", backgroundColor: "white" }}
      >
        <Home />
      </div>
    </Flex>
  );
};

export default Event;
