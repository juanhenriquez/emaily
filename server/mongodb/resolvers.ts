import { merge } from 'lodash';

// resolvers
import { resolvers as userResolvers, mutations as userMutations } from './models/user/user.resolver';

export const resolvers = merge(userResolvers);
export const mutations = merge(userMutations);