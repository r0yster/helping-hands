import React from "react";
import { useParams } from "react-router-dom";

import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../../utils/queries";

import {
  Input,
  Form,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const SinglePost = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { postId: postId },
  });
  //Data passed to post variable
  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
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
        rounded="md"
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
      >
        <div>
          <div className="card mb-3">
            <Text
              borderBottom="1px"
              borderBottomColor="gray.300"
              className="card-header"
            >
              <span style={{ fontWeight: 500 }} className="text-light">
                {post.username}
              </span>
              's Event on {post.createdAt}
            </Text>
            <div className="card-body">
              <Text
                border="1px"
                borderColor="gray.300"
                rounded="md"
                bg="white"
                spacing={4}
                m={2}
                p="2"
              >
                {post.postText}
              </Text>
            </div>
          </div>

          {post.commentCount > 0 && <CommentList comments={post.comments} />}

          <CommentForm postId={post._id} />
        </div>
      </Stack>
    </Flex>
  );
};

export default SinglePost;
