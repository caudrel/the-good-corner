import { InputType, Field, Int } from "type-graphql";

@InputType()
export class ObjectId {
  @Field(() => Int)
  id!: number;
}

// les ! indique que le champ ne peut pas être null
