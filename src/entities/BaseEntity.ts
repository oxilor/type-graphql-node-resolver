import { Field, ID, ObjectType } from 'type-graphql';
import Node from './Node';

@ObjectType({ isAbstract: true, implements: Node })
abstract class BaseEntity implements Node {
  @Field(() => ID)
  public id!: number;
}

export default BaseEntity;
