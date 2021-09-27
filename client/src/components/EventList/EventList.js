import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const EventList = ({ posts, title }) => {
  if (!posts.length) {
    return <Heading>No Posts Yet</Heading>;
  }

  return (
    <Box>
      <Heading size="md">
        {title}
      </Heading>
      <VStack width="100%">
      {posts &&
        posts.map((post) => (
          <Box
            width="100%"
            fontSize="1.30vw" 
            pt="4"
            key={post._id}>
            <Text>
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 500 }}
                className="text-light"
              >
                {post.username}
              </Link>{" "}
              post on {post.createdAt}
            </Text>
            <Box
              borderTop="2px"
              borderBottom="2px"
              borderTopColor="gray.300"
              borderBottomColor="gray.300"
              pb="1"
            >
              <Link to={`/post/${post._id}`}>
                <Text>
                  {post.postText}
                </Text>
                <Text>
                  {post.commentCount} Comments || Click to view details!
                </Text>
              </Link>
            </Box>
          </Box>
        ))}
        </VStack>
    </Box>
  );
};

export default EventList;
