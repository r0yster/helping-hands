import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const VolunteerList = ({ volunteers, title }) => {
    if (!volunteers.length) {
        return <Heading>No Volunteers =[</Heading>;
    }

    return (
        <Box>
            <Heading>
                {title}
            </Heading>
            <VStack>
                {volunteers &&
                  volunteers.map((volunteer) => (
                      <div key={volunteer._id}>
                          <Text>
                              {volunteer.firstName + " " + volunteer.lastName + " " + volunteer.email + " " + volunteer.phoneNumber }
                          </Text>
                      </div>
                  ))}
            </VStack>
        </Box>
    );

};

export default VolunteerList;