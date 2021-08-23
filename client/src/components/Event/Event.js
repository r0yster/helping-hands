import { React, useState } from "react";
import {
  Input,
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
import "./Event.css";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

const Event = () => {
  const [postText, setText] = useState("");
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  const [characterCount, setCharacterCount] = useState(0);
  const [addPost, { error }] = useMutation(
    ADD_POST,

    {
      update(cache, { data: { addPost } }) {
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

        // update me object's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      },
    }
  );

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add post to database
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
      <Stack
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        <SimpleGrid columns={2} spacing={10}>
          <FormControl
            w="200px"
            id="first-name"
            isRequired
            onSubmit={handleFormSubmit}
          >
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

        {/* <Text mb="8px">Comment: </Text>
        <Input placeholder="Here is a sample placeholder" size="sm" /> */}
      <Home />
      </Stack>
    </Flex>
  );
};

export default Event;
