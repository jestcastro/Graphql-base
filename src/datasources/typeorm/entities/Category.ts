import { Column, Entity, OneToMany } from "typeorm";
import { Record } from "./Record";


@Entity("Category", { schema: "wallet" })
export class Category {

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


  @Column("int", {
    nullable: true,
    name: "icon"
  })
  icon: number | null;


  @Column("tinyint", {
    nullable: true,
    width: 1,
    name: "type"
  })
  type: boolean | null;


  @Column("int", {
    nullable: true,
    name: "position"
  })
  position: number | null;



  @OneToMany(type => Record, record => record.category, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  records: Record[];

}
