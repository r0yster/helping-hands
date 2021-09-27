import { React, useState } from "react";
import { Box, Button, Container, Heading, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import "./Event.css";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_POSTS, QUERY_VOLUNTEERS } from "../../utils/queries";
import { ADD_POST } from "../../utils/mutations";

import EventList from "../EventList/EventList";
import VolunteerList from "../Volunteer/VolunteerList";

const Event = () => {
  const [postText, setText] = useState("");
  const { loading:postsQueryLoading, data:postData } = useQuery(QUERY_POSTS);
  const { loading:volunteersQueryLoading, data:volunteerData } = useQuery(QUERY_VOLUNTEERS);

  const posts = postData?.posts || [];
  const volunteers = volunteerData?.volunteers || [];

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
      p="4"
    >
      <SimpleGrid columns={[2, null, 3]} spacing="10px">
      <Box 
        rounded="md"
        spacing={4}
        p="2rem 2rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        >
        {postsQueryLoading ? (
          <div>Loading...</div>
        ) : (
          <EventList posts={posts} title="See Events List Below:" />
        )}
      </Box>
      <Box 
        rounded="md"
        spacing={4}
        p="2rem 2rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        >
        <form onSubmit={handleFormSubmit}>
          <Heading size="md">
            Enter your event time, location and number of volunteers needed
          </Heading>
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
            borderColor="gray.300"
            boxShadow="2xl"
            rounded="md"
            bg="white"
            spacing={4}
            m={2}
            placeholder="Post an event..."
            value={postText}
            name={postText}
            className="form-input col-12 col-md-9"
            onChange={handleChange} />
          <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
            rounded="md"
          >Submit</Button>
        </form>
      </Box>
      <Box
        rounded="md"
        spacing={4}
        p="2rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        >
        {volunteersQueryLoading ? (
          <div>Loading...</div>
        ) : (
          <VolunteerList volunteers={volunteers} title="Volunteers Available:" />
        )}
      </Box>
      </SimpleGrid>
    </Container>
    </>
  );
};

export default Event;
