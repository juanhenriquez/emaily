import { Request } from "express-serve-static-core";

export const resolvers = {
  getUser(parent, { id }, { viewer, ...context }) {
    return context.mongo.User.getById(id, viewer);
  }
};

export const mutations = {
  createUser(parent, data, context) {
    return context.mongo.User.createUser(data);
  },
  async logout(parent, data, { req, mongo, viewer }) {
    const user = await mongo.User.getById(viewer.id);
    req.logout();
    return user;
  }
}

