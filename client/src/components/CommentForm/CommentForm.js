import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { Stack, Button, Flex, Box, Text, Textarea } from "@chakra-ui/react";
const CommentForm = ({ postId }) => {
  const [commentBody, setBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentBody, postId },
      });

      setBody("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Text
        border="1px"
        borderColor="gray.300"
        boxShadow="1xl"
        rounded="md"
        m={2}
        p="2"
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </Text>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <Textarea
          border="1px"
          borderColor="gray.300"
          boxShadow="2xl"
          rounded="md"
          bg="white"
          // spacing={4}
          // m={2}
          mb={3}
          rounded="md"
          placeholder="Add contributions here..."
          value={commentBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></Textarea>

        <Button
          borderRadius={0}
          type="submit"
          variant="solid"
          colorScheme="teal"
          width="full"
          rounded="md"
        >
          Submit
        </Button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default CommentForm;
