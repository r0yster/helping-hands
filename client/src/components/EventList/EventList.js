import React from "react";
import { Link } from "react-router-dom";
import { Input, Flex, Box, Text, Heading, Stack } from "@chakra-ui/react";
import CommentList from "../CommentList/CommentList";

const EventList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <Flex
      ml="550"
      p="4"
      flexDirection="row"
      rounded="md"
      width="100%"
      height="100vh"
      // justifyContent="center"
      alignItems="center"
    >
      <Box mt={100}>
        <Stack
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          rounded="md"
          mb="215"
          pt="15%"
          p="2"
        >
          <Heading as="h4" size="md">
            {title}
          </Heading>
          {posts &&
            posts.map((post) => (
              <Box key={post._id}>
                <Text
                  border="1px"
                  borderColor="teal.500"
                  boxShadow="1xl"
                  rounded="md"
                  m={2}
                  p="2"
                >
                  <Link
                    to={`/profile/${post.username}`}
                    style={{ fontWeight: 700 }}
                    className="text-light"
                  >
                    {post.username}
                  </Link>{" "}
                  post on {post.createdAt}
                </Text>
                <div>
                  <Link to={`/post/${post._id}`}>
                    <Text
                      backgroundColor="whiteAlpha.900"
                      border="1px"
                      borderColor="teal.500"
                      boxShadow="1xl"
                      p="6"
                      rounded="md"
                      bg="white"
                      spacing={4}
                      m={2}
                    >
                      {post.postText}
                    </Text>
                    <Text
                      borderBottom="1px"
                      borderBottomColor="teal.500"
                      m={2}
                      p="2"
                    >
                      {post.commentCount} Comments || Click to view details!
                    </Text>
                  </Link>
                </div>
              </Box>
            ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default EventList;
