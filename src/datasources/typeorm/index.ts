import { createConnection, getConnection, Connection } from "typeorm";
import { entities, Entities } from "./entities";


export const creatypeORMConnection = () => {
  return createConnection({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: Object.keys(entities).map((key) => entities[key]),
    synchronize: true,
    logging: true
  })
}

export const typeORMDataSource = (): TypeORMDataSource => ({
  connection: getConnection(),
  entities
})
export interface TypeORMDataSource {
  connection: Connection,
  entities: Entities
}