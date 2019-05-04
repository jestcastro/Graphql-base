export type Maybe<T> = T | null;

export interface AccountInput {
  id: string;

  name: string;

  color: string;

  position: number;

  userId: string;

  currencyId: string;
}

export interface RecordInput {
  id: string;

  note: string;

  accountId: string;

  currencyId: string;

  categoryId?: Maybe<string>;

  amount: number;
}

export interface TransferInput {
  current: TransferAccountInput;

  target: TransferAccountInput;

  transferId: string;
}

export interface TransferAccountInput {
  id: string;

  note: string;

  accountId: string;

  currencyId: string;

  amount: number;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  accounts: Account[];

  records: Record[];
}

export interface Account {
  id: string;

  name?: Maybe<string>;

  color?: Maybe<string>;

  position?: Maybe<number>;

  userId?: Maybe<string>;

  balances?: Maybe<Balance[]>;

  records?: Maybe<Record[]>;
}

export interface Balance {
  currency: Currency;

  account: Account;

  balance: number;
}

export interface Currency {
  id: string;

  name?: Maybe<string>;

  referential?: Maybe<boolean>;

  ratioToReferential?: Maybe<number>;

  position?: Maybe<number>;
}

export interface Record {
  id: string;

  note?: Maybe<string>;

  amount?: Maybe<number>;

  amountReferential?: Maybe<number>;

  account: Account;

  currency: Currency;

  transferId: string;
}

export interface Mutation {
  addAccount: Account;

  addRecord: Record;

  addTransfer: Record[];
}

// ====================================================
// Arguments
// ====================================================

export interface AccountsQueryArgs {
  user?: Maybe<string>;
}
export interface AddAccountMutationArgs {
  data: AccountInput;
}
export interface AddRecordMutationArgs {
  data: RecordInput;
}
export interface AddTransferMutationArgs {
  data?: Maybe<TransferInput>;
}
