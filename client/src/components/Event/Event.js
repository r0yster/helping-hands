import React from 'react'
import { Input } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react";
import "./Event.css";


const Event = () => {
  return (
    <div class="postinput">
      <div>
      <Input placeholder="Post an event" size="lg" />
      </div>
    </div>
  )
}

export default Event


// import {
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
// } from "@chakra-ui/react"

// <FormControl id="email">
//   <FormLabel>Email address</FormLabel>
//   <Input type="email" />
//   <FormHelperText>We'll never share your email.</FormHelperText>
// </FormControl>
