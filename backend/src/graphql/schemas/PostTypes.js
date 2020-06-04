const schema = `
  type Post {
    id: Int
    title: String
    message: String
    author: Author
  }

  input inputPost {
    title: String!
    message: String!
    authorId: Int!
  }

  extend type Query {
    posts: [Post]
    post(id: Int!): Post
  }

  extend type Mutation {
    addPost(post: inputPost): Post
  }
`

module.exports = schema;
