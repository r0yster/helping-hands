import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Flex, Box, Text, Heading, Stack } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

const CommentList = ({ comments }) => {
  return (
    <Box rounded="md">
      <Text borderBottom="1px" borderBottomColor="teal.500" m={2} p="2">
        <span className="text-light">Comments</span>
      </Text>
      <Stack>
        {comments &&
          comments.map((comment) => (
            <Text
              borderBottom="1px"
              borderBottomColor="teal.500"
              className="pill mb-3"
              key={comment._id}
            >
              {comment.commentBody} //{" "}
              <Link
                to={`/profile/${comment.username}`}
                style={{ fontWeight: 700 }}
              >
                {comment.username} on {comment.createdAt}
              </Link>
            </Text>
          ))}
      </Stack>
    </Box>
  );
};

export default CommentList;
