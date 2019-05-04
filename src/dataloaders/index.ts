

import * as Dataloader from 'dataloader'
import { Datasources } from '../datasources';
import { entityLoader } from './entityLoader'
import { In } from '../../node_modules/typeorm';
import { Currency } from '../datasources/typeorm/entities/Currency';
import { Record } from '../datasources/typeorm/entities/Record';
import { Balance } from '../datasources/typeorm/entities/Balance';


export const getDataloaders = (datasources: Datasources): Dataloaders => {
  const { Currency, Record, Balance, Account } = datasources.typeORM.entities
  const loader = entityLoader(datasources);
  return {
    currencyLoader: loader<Currency>(Currency, (keys) => ({ where: { id: In(keys) } }), 'id'),
    recordsLoader: loader<Record>(Record, (keys) => ({ where: { account: { id: In(keys) } } }), 'accountId'),
    balancesLoader: loader<Balance>(Balance, (keys) => ({ where: { account: { id: In(keys) } } }), 'accountId'),
    accountLoader: loader<Account>(Account, (keys) => ({ where: { id: In(keys) } }), 'id'),
  }
}

export interface Dataloaders {
  currencyLoader: Dataloader<any, any>
  recordsLoader: Dataloader<any, any>
  balancesLoader: Dataloader<any, any>
  accountLoader: Dataloader<any, any>
}