export const resolvers = {
  getUser(parent, { id }, context) {
    return context.User.getById(id);
  }
};

export const mutations = {
  createUser(parent, data, context) {
    return context.User.createUser(data);
  }
}