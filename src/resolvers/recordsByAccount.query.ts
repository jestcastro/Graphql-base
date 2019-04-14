import { Context } from "../types/context";
import { GraphQLResolveInfo } from "graphql";
import { In } from "../../node_modules/typeorm";
import { Datasources } from "../datasources";

export const recordsByAccount = async (parent, args, context: Context, info: GraphQLResolveInfo) => {
  return context.dataloaders.records.load(parent.id)
}

export const recordsByAccountLoader = (datasources: Datasources) => async (keys) => {
  const { connection, entities } = datasources.typeORM;
  const res = await connection.manager.find(entities.Record, {
    relations: ['account'],
    where: { account: { id: In(keys) } }
  })
  return keys.map((key) => res.filter((r) => r.account.id === key))
}
