const schema = `
  type Author {
    id: Int
    name: String
    email: String
    posts: [Post]
  }
  input inputAuthor {
    name: String!
    email: String!
  }

  type Query {
    authors: [Author]
    author(id: Int!): Author
  }

  type Mutation {
    addAuthor(author: inputAuthor): Author
  }
`

module.exports = schema;
