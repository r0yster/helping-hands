import React from "react";
import Auth from "../../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";

import About from "../About/About";
import Footer from "../Footer/Footer";
import Event from "../Event/Event";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loading ? (
          <Event />
        ) : (
          <>
            <About />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
