import React from 'react'
import { Input, FormControl, FormLabel, Form, Stack, Button, ButtonGroup, Text, Center, Box, Flex } from "@chakra-ui/react"

import "./Event.css";


const Event = () => {
  return (
  
    <Flex  flexDirection="column"
    width="100wh"
    height="100vh"
    justifyContent="center"
    alignItems="center"
    backgroundImage="url('../images/background.jpg')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover">
   
    <Stack 
     spacing={4}
     p="1rem"
     backgroundColor="whiteAlpha.900"
     boxShadow="md"> 
    <FormControl w="500px" id="first-name" isRequired>
    <FormLabel>First name</FormLabel>
    <Input placeholder="First name" />
    
    </FormControl>
    <FormControl id="first-name" isRequired>
    <FormLabel>Last name</FormLabel>
    <Input placeholder="Last name" />
    </FormControl>
    <Input placeholder="Post an event" size="sm" />
    <Button colorScheme="blue" size="sm">Submit</Button>
       <Text mb="8px">Comment: </Text>
      <Input
        placeholder="Here is a sample placeholder"
        size="sm"
      />
   
    </Stack> 
    </Flex>
    
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
