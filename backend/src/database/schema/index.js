const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLInt } = graphql;

const { Author, Post } = require('../../app/models');

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

        return Author.findByPk(authorId)
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
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        const { id } = parent;

        return Post.findAll({
          where: {
            authorId: id
          }
        })
      }
    }
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

        return Post.findByPk(id)
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const { id } = args;
        return Author.findByPk(id)
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve() {
        return Post.findAll();
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return Author.findAll();
      }
    }
  },
});

const Mutation = new GraphQLObjectType({
  name:'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString}
      },
      resolve(parent, args) {
        return Author.create({
          name: args.name,
          email: args.email
        })
      }
    },
    addPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString},
        message: { type: GraphQLString},
        authorId: { type: GraphQLID}
      },
      resolve(parent, args) {
        return Post.create({
          title: args.title,
          message: args.message,
          authorId: args.authorId
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
