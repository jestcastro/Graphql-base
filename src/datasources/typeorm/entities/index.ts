import { Account } from "../entities/Account";
import { Balance } from "../entities/Balance";
import { Category } from "../entities/Category";
import { Currency } from "../entities/Currency";
import { Record } from "../entities/Record";

export const entities: Entities = {
  Account,
  Balance,
  Category,
  Currency,
  Record
}
export interface Entities {
  Account: typeof Account,
  Balance: typeof Balance,
  Category: typeof Category,
  Currency: typeof Currency,
  Record: typeof Record
}