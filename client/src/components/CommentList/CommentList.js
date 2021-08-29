import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Stack } from "@chakra-ui/react";

const CommentList = ({ comments }) => {
  return (
    <Box rounded="md">
      <Text
        borderBottom="1px"
        borderBottomColor="gray.300"
        m={2}
        p="2"
        fontWeight="semibold"
      >
        <span className="text-light">Comments</span>
      </Text>
      <Stack>
        {comments &&
          comments.map((comment) => (
            <Text
              borderBottom="1px"
              borderBottomColor="gray.300"
              className="pill mb-3"
              key={comment._id}
            >
              {comment.commentBody} //{" "}
              <Link
                to={`/profile/${comment.username}`}
                style={{ fontWeight: 500 }}
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
