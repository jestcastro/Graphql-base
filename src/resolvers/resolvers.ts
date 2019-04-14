import { accounts } from "./accounts.query";
import { records } from "./records.query";
import { recordsByAccount } from "./recordsByAccount.query";

export const resolvers = {
    Query: {
        accounts,
        records
    },
    Account: {
        records: recordsByAccount
    }
}
