import { Context } from "../types/context";
import { GraphQLResolveInfo } from "graphql";
import { AddTransferMutationArgs, TransferAccountInput } from "../types/schema";
import { EntityManager } from "typeorm";

export const addTransfer = async (parent, args: AddTransferMutationArgs, context: Context, info: GraphQLResolveInfo) => {
  const { connection, entities } = context.datasources.typeORM
  const { current, target, transferId } = args.data
  return connection.manager.transaction(async (manager) => {
    await saveRecord(transferId, current, manager);
    await saveRecord(transferId, target, manager);
    return manager.find(entities.Record, { where: { transferId } })
  })
}

const saveRecord = (transferId: string, record: TransferAccountInput, manager: EntityManager) => {
  const { id, note, currencyId, accountId, amount } = record;
  return manager.query(`CALL addRecord(?, ?, ?, ?, ?, ?, ?)`, [id, note, currencyId, accountId, null, amount, transferId])
}