import { Context } from "../types/context";
import { GraphQLResolveInfo } from "graphql";
import { AddRecordMutationArgs } from "../types/schema";

export const addRecord = async (parent, args: AddRecordMutationArgs, context: Context, info: GraphQLResolveInfo) => {
  const { connection, entities } = context.datasources.typeORM
  const { id, note, currencyId, accountId, categoryId, amount } = args.data
  await connection.manager.query(`CALL addRecord(?, ?, ?, ?, ?, ?, ?)`, [id, note, currencyId, accountId, categoryId, amount, id])
  return connection.manager.findOne(entities.Record, id);
}
