import { Field, ObjectType } from 'type-graphql';
import BaseEntity from './BaseEntity'

@ObjectType()
class User extends BaseEntity {
  @Field()
  public email!: string;
}

export default User;
