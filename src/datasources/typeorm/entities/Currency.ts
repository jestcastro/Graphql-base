import { Column, Entity, OneToMany } from "typeorm";
import { Balance } from "./Balance";
import { Record } from "./Record";


@Entity("Currency", { schema: "wallet" })
export class Currency {

  @Column("varchar", {
    nullable: false,
    primary: true,
    length: 30,
    name: "id"
  })
  id: string;


  @Column("varchar", {
    nullable: true,
    length: 30,
    name: "name"
  })
  name: string | null;


  @Column("tinyint", {
    nullable: true,
    width: 1,
    name: "referential"
  })
  referential: boolean | null;


  @Column("float", {
    nullable: true,
    name: "ratioToReferential"
  })
  ratioToReferential: number | null;


  @Column("int", {
    nullable: true,
    name: "position"
  })
  position: number | null;



  @OneToMany(type => Balance, balance => balance.currency, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  balances: Balance[];



  @OneToMany(type => Record, record => record.currency, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  records: Record[];

}
