const { Post } = require('../../app/models');

const PostResolver = {
  list: async () => {
    return await Post.findAll();
  },
  getById: async (_, args) => {
    return await Post.findByPk(args.id);
  },
  listByAuthorId: async (_, args) => {
    return await Post.findAll({
      where: {
        authorId: args.id
      }
    })
  },
  create: async (_, args) => {
    const { post } = args;
    return await Post.create({
      title: post.title,
      message: post.message,
      authorId: post.authorId
    })
  }
}

module.exports = PostResolver;
