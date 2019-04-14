import { Context } from "../types/context";
import { GraphQLResolveInfo } from "graphql";

export const records = async (parent, args, context: Context, info: GraphQLResolveInfo) => {
  const { connection, entities } = context.datasources.typeORM
  return connection.manager.find(entities.Record);
}