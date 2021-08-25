import React from 'react';
import { Link } from 'react-router-dom';
import {
  Input,
  Form,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  Box,
  Grid,
  GridItem,
  Button,
  Flex,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import CommentList from '../CommentList/CommentList';


const EventList = ({posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <VStack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
      <Heading>{title}</Heading>
        {posts && posts.map(post => (
          <Box key={post._id}>
            <p className="card-header">
              <Link to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{' '}
              created event on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                  {post.commentCount} Comments || Click to view details!
                </p>
              </Link>
            </div>
          </Box>
        ))}
    </VStack>
  );
};

export default EventList;