import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const VolunteerList = ({ volunteers, title }) => {
    if (!volunteers.length) {
        return <Heading>No Volunteers =[</Heading>;
    }

    return (
        <Box>
            <Heading size="md">
                {title}
            </Heading>
            <VStack
              pt="4"
            >
                {volunteers &&
                  volunteers.map((volunteer) => (
                      <Box 
                        width="100%"
                        fontSize="1.30vw"
                        borderTop="2px"
                        borderBottom="2px"
                        borderTopColor="gray.300"
                        borderBottomColor="gray.300"
                        pb="1" 
                        key={volunteer._id}
                      >
                          <Text>
                              {"Name: " + volunteer.firstName + " " + volunteer.lastName}
                              <br/>
                              {"Email: " + volunteer.email}
                              <br/>
                              {"Phone Number: " + volunteer.phoneNumber} 
                          </Text>
                      </Box>
                  ))}
            </VStack>
        </Box>
    );

};

export default VolunteerList;