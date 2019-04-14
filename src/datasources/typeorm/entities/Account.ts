import { Column, Entity, OneToMany } from "typeorm";
import { Balance } from "./Balance";
import { Record } from "./Record";


@Entity("Account", { schema: "wallet" })
export class Account {

  @Column("varchar", {
    nullable: false,
    primary: true,
    length: 30,
    name: "id"
  })
  id: string;


  @Column("varchar", {
    nullable: true,
    length: 100,
    name: "name"
  })
  name: string | null;


  @Column("varchar", {
    nullable: true,
    length: 20,
    name: "color"
  })
  color: string | null;


  @Column("int", {
    nullable: true,
    name: "position"
  })
  position: number | null;


  @Column("varchar", {
    nullable: true,
    length: 100,
    name: "userId"
  })
  userId: string | null;



  @OneToMany(type => Balance, balance => balance.account, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  balances: Balance[];



  @OneToMany(type => Record, record => record.account, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  records: Record[];

}
