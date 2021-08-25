import React from 'react';
import { useParams } from 'react-router-dom';

import CommentList from '../CommentList/CommentList';

import Auth from "../../utils/auth";
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';
import {
  Input,
  Form,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

const SinglePost = props => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
  variables: { postId: postId }
});
//Data passed to post variable 
const post = data?.post || {};

if (loading) {
  return <div>Loading...</div>;
}
  return (
    
    <div>
    <div className="card mb-3">
      <p className="card-header">
        <span style={{ fontWeight: 700 }} className="text-light">
          {post.username}
        </span>
        's event on {post.createdAt}
      </p>
      <div className="card-body">
        <p>{post.postText}</p>
      </div>
    </div>
  
    {post.commentCount > 0 && <CommentList comments={post.comments} />} 
    
  </div>
  );
};

export default SinglePost;
