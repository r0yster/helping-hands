import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const EventList = ({ posts, title }) => {
  if (!posts.length) {
    return <Heading>No Posts Yet</Heading>;
  }

  return (
    <Box>
      <Heading>
        {title}
      </Heading>
      <VStack>
      {posts &&
        posts.map((post) => (
          <div key={post._id}>
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
            <div>
              <Link to={`/post/${post._id}`}>
                <Text>
                  {post.postText}
                </Text>
                <Text>
                  {post.commentCount} Comments || Click to view details!
                </Text>
              </Link>
            </div>
          </div>
        ))}
        </VStack>
    </Box>
  );
};

export default EventList;
