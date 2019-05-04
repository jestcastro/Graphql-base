import { In, FindManyOptions, ObjectType } from "typeorm";
import { Datasources } from "../datasources";
import * as Dataloader from 'dataloader'


export const entityLoader = (datasources: Datasources) => <Entity>(entity: ObjectType<Entity>, options: (keys) => FindManyOptions, filterId: string) => {
  return new Dataloader(loader(datasources)(entity, options, filterId))
}

const loader = (datasources: Datasources) => <Entity>(entity: ObjectType<Entity>, options: (keys) => FindManyOptions<Entity>, filterId: string) => async (keys) => {
  const { connection } = datasources.typeORM;
  const res = await connection.manager.find<Entity>(entity, options(keys));
  return keys.map((key) => res.filter((r: any) => r[filterId] === key))
}