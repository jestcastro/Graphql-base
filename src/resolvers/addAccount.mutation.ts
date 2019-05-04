import { Context } from "../types/context";
import { GraphQLResolveInfo } from "graphql";
import { AddAccountMutationArgs } from "../types/schema";

export const addAccount = async (parent, args: AddAccountMutationArgs, context: Context, info: GraphQLResolveInfo) => {
  const { connection, entities } = context.datasources.typeORM
  const { id, name, color, position, userId, currencyId } = args.data
  await connection.manager.query(`CALL addAccount(?, ?, ?, ?, ?, ?)`, [id, name, color, position, userId, currencyId])
  return connection.manager.findOne(entities.Account, id);
}
