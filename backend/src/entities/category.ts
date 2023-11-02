import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Ad } from "./ad";
import { Length } from "class-validator";
import { ObjectType, Field, Int, InputType } from "type-graphql";

@Entity()
@ObjectType()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int) // pour éviter que GraphQl Apollo le considère comme un Float
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];
}

@InputType()
export class NewCategoryInput {
  @Field()
  @Length(2, 30, { message: "Le nom doit comporter entre 2 et 30 caractères" })
  name: string;
}

@InputType()
export class UpdateCategoryInput {
  @Field({ nullable: true })
  @Length(2, 30, { message: "Le nom doit contenir entre 2 et 30 caractères" })
  name?: string;
}
