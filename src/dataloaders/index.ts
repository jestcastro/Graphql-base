

import * as Dataloader from 'dataloader'
import { recordsByAccountLoader } from '../resolvers/recordsByAccount.query';
import { Datasources } from '../datasources';

export const getDataloaders = (datasources: Datasources) => {
  return {
    recordsByAccount: new Dataloader(recordsByAccountLoader(datasources))
  }
}
export interface Dataloaders {
  [key: string]: Dataloader<any, any>
}