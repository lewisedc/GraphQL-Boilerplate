const createPost = (parent, { text }, context) => {
  return context.prisma.createPost({ text });
};

module.exports = createPost;
