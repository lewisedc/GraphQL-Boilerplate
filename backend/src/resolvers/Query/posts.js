const posts = (parent, args, context) => {
  return context.prisma.posts();
};

module.exports = posts;
