const { Author } = require('../../app/models');

const AuthorResolver = {
  list: async () => {
    return await Author.findAll();
  },
  getById: async (parent, args) => {
    console.log(parent, args)
    return await Author.findByPk(args.id || parent.authorId);
  },
  create: async (_, args) => {
    const { author } = args;
    return await Author.create({
      name: author.name,
      email: author.email
    })
  }
}

module.exports = AuthorResolver;
