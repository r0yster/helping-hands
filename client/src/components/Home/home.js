import React from 'react';
import Auth from "../../utils/auth";

import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';

import Aboutus from '../Aboutus/Aboutus';
import Event from '../Event/Event';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn ? (
          <div className="col-12 col-lg-3 mb-3">
            <Event />
          </div>
        ) : <Aboutus />}
      </div>
    </main>
  );
};


export default Home;
