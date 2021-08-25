import React from "react";
import { Link } from "react-router-dom";
import { Input, Flex, Box, Text } from "@chakra-ui/react";
import CommentList from "../CommentList/CommentList";

const EventList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <Flex flexDirection="column" rounded="md">
      <h3>{title}</h3>
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
                  {post.commentCount} || Click to{" "}
                  {post.commentCount ? "see" : "start"} the discussion!
                </Text>
              </Link>
            </div>
            {/* <Text mb="8px" borderBottom="1px" borderBottomColor="teal.200">
              Comment:{" "}
            </Text>
            <Input placeholder="Comments" size="sm" /> */}
          </Box>
        ))}
    </Flex>
  );
};

export default EventList;
