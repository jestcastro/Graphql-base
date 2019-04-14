export type Maybe<T> = T | null;

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

  records?: Maybe<Record[]>;
}

export interface Record {
  id: string;

  note?: Maybe<string>;

  amount?: Maybe<number>;

  amountReferential?: Maybe<number>;
}

// ====================================================
// Arguments
// ====================================================
