
const { User } = require('../models');

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    },

  Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
      
        return user;
      }
    // login: async () => {

    // }
  }}
  
  module.exports = resolvers