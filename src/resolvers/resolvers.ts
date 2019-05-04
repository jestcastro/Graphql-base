import { accounts } from "./accounts.query";
import { records } from "./records.query";
import { dataloaderResolver } from './../dataloaders/resolver'
import { addAccount } from "./addAccount.mutation";
import { addRecord } from "./addRecord.mutation";
import { addTransfer } from "./addTransfer.mutation";
export const resolvers = {
    Query: {
        accounts,
        records
    },
    Mutation: {
        addAccount,
        addRecord,
        addTransfer
    },
    Account: {
        records: dataloaderResolver('recordsLoader', 'id', true),
        balances: dataloaderResolver('balancesLoader', 'id', true)
    },
    Record: {
        currency: dataloaderResolver('currencyLoader', 'currencyId', false),
        account: dataloaderResolver('accountLoader', 'accountId', false)
    },
    Balance: {
        currency: dataloaderResolver('currencyLoader', 'currencyId', false),
        account: dataloaderResolver('accountLoader', 'accountId', false)
    }
}
