import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Currency } from "./Currency";
import { Account } from "./Account";
import { Category } from "./Category";


@Entity("Record", { schema: "wallet" })
@Index("fk_currency", ["currency",])
@Index("fk_account", ["account",])
@Index("fk_category", ["category",])
export class Record {

  @Column("varchar", {
    nullable: false,
    primary: true,
    length: 30,
    name: "id"
  })
  id: string;


  @Column("varchar", {
    nullable: true,
    length: 120,
    name: "note"
  })
  note: string | null;



  @ManyToOne(type => Currency, currency => currency.records, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'currencyId' })
  currency: Currency | null;



  @ManyToOne(type => Account, account => account.records, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'accountId' })
  account: Account | null;



  @ManyToOne(type => Category, category => category.records, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  category: Category | null;


  @Column("float", {
    nullable: true,
    name: "amount"
  })
  amount: number | null;


  @Column("float", {
    nullable: true,
    name: "amountReferential"
  })
  amountReferential: number | null;

}
