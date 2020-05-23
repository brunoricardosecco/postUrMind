const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

const postsMock = [
  {
    id: "1",
    title: 'Test 0',
    message: 'Today I will go to the supermarket',
    authorId: '1'
  },
  {
    id: '2',
    title: 'Test 1',
    message: 'Today I will go to pay the bills',
    authorId: '1'
  },
  {
    id: '3',
    title: 'Test 2',
    message: 'Today is a pay day',
    authorId: '2'
  },
];
const authorsMock = [
  {
    id: "1",
    name: 'Author 1',
    email: 'author1@test.com',
  },
  {
    id: "2",
    name: 'Author 2',
    email: 'author2@test.com',
  },
  {
    id: "3",
    name: 'Author 3',
    email: 'author3@test.com',
  },

];



const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    message: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        const { authorId } = parent;
        return authorsMock.find(author => author.id === authorId);
      }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const { id } = args;
        //code to get data from db
         return postsMock.find(post => post.id === id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const { id } = args;
        return authorsMock.find(author => author.id === id);
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
