import { TypeORMDataSource, typeORMDataSource } from "./typeorm";


export const getDatasources = (): Datasources => ({
  typeORM: typeORMDataSource()
})

export interface Datasources {
  typeORM: TypeORMDataSource
}