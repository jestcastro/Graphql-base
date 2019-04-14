import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Account } from "./Account";
import { Currency } from "./Currency";


@Entity("Balance", { schema: "wallet" })
@Index("fk_currencyBalance", ["currency",])
export class Balance {


  @ManyToOne(type => Account, account => account.balances, { primary: true, nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'accountId' })
  account: Account | null;



  @ManyToOne(type => Currency, currency => currency.balances, { primary: true, nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'currencyId' })
  currency: Currency | null;


  @Column("float", {
    nullable: true,
    name: "balance"
  })
  balance: number | null;

}
