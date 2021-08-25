import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import EventList from "../EventList/EventList";
import { Box } from "@chakra-ui/react";
const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);
  return (
    <main>
      <div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Box boxSize="sm" p="6" rounded="md">
              <EventList posts={posts} title="Events Listed:" />
            </Box>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
