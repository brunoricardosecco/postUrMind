const PostServices = require("../services/PostServices");
const AuthorServices = require("../services/AuthorServices");

const PostResolver = {
  Post: {
    author: AuthorServices.getById
  },
  Query: {
    posts: PostServices.list,
    post: PostServices.getById
  },
  Mutation: {
    addPost: PostServices.create
  }
}

module.exports = PostResolver
