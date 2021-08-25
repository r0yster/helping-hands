import React from 'react';
import { Link } from 'react-router-dom';
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
import CommentList from '../CommentList/CommentList';


const EventList = ({posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
           
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
                >
                
                {post.username}
              </Link>{' '}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                   {post.commentCount} || Click to{' '}
                  {post.commentCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
            <p mb="8px">Comment: </p>
        <Input placeholder="Here is a sample placeholder" size="sm" /> 
          </div>
        ))}
    </div>
  );
};

export default EventList;
