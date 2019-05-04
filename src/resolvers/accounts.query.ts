import { Context } from "../types/context";
import { GraphQLResolveInfo } from "graphql";
import { AccountsQueryArgs } from "../types/schema";

export const accounts = async (parent, args: AccountsQueryArgs, context: Context, info: GraphQLResolveInfo) => {
  const { connection, entities } = context.datasources.typeORM
  return connection.manager.find(entities.Account, {
    where: { userId: args.user || undefined }
  });
}
