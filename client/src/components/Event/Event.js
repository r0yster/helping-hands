import { React, useState } from "react";
import { Box, Button, Container, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import "./Event.css";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { ADD_POST } from "../../utils/mutations";
import Footer from "../Footer/Footer";

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
      await addPost({
        variables: { postText },
      });

      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <Container 
      maxW="container.lg.xl"
      height="100vh"
      backgroundImage="url('../images/background.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <SimpleGrid columns={[2, null, 3]} spacing="10px">
      <Box 
        height="100%"
        backgroundColor="whiteAlpha.900"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <EventList posts={posts} title="See Events List Below:" />
        )}
      </Box>
      <Box 
        height="25vh"
        backgroundColor="whiteAlpha.900"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        >
        <form onSubmit={handleFormSubmit}>
          <Text>
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
          <Textarea onChange={handleChange} />

          <Button
            type="submit"
          >Submit</Button>
        </form>
      </Box>
      <Box
        height="25vh"
        backgroundColor="whiteAlpha.900"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        >
        VOLUNTEER LIST HERE
      </Box>
      </SimpleGrid>
    </Container>
      <Footer />
    </>
  );
};

export default Event;
