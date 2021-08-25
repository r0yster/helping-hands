import { React, useState } from "react";
import { Stack, Button, Flex, Box, Text, Textarea } from "@chakra-ui/react";

import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { ADD_POST } from "../../utils/mutations";

import EventList from "../EventList/EventList";

const Event = () => {
  const [postText, setText] = useState("");
  const { loading, data } = useQuery(QUERY_POSTS);

  const posts = data?.posts || [];

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    variables: { addPostText: postText },

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
      <Box boxSize="sm" rounded="md">
        <form onSubmit={handleFormSubmit}>
          <Stack
            rounded="md"
            spacing={4}
            p="2rem 2rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <Text fontWeight="semibold">
              Enter your event time, location and number of volunteers needed
            </Text>
            <Text
              className={`m-0 ${
                characterCount === 280 || error ? "text-error" : ""
              }`}
            >
              Character Count: {characterCount}/280
              {error && <span className="ml-2">Something went wrong...</span>}
            </Text>
            <Textarea
              border="1px"
              borderColor="teal.500"
              boxShadow="2xl"
              rounded="md"
              bg="white"
              spacing={4}
              m={2}
              rounded="md"
              placeholder="Post an event..."
              value={postText}
              name={postText}
              className="form-input col-12 col-md-9"
              onChange={handleChange}
            ></Textarea>

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
        </form>
        <div>
          <div className="flex-row justify-space-between">
            <div className="col-12 mb-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <Box mt={100}>
                  <EventList posts={posts} title="See Events List Below:" />
                </Box>
              )}
            </div>
          </div>
        </div>
      </Box>
    </Flex>
  );
};

export default Event;
