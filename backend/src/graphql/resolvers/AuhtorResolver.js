const AuthorServices = require("../services/AuthorServices");
const PostServices = require("../services/PostServices");

const AuhtorResolver = {
  Author: {
    posts: PostServices.listByAuthorId
  },
  Query: {
    authors: AuthorServices.list,
    author: AuthorServices.getById,
  },
  Mutation: {
    addAuthor: AuthorServices.create
  }
}

module.exports = AuhtorResolver
