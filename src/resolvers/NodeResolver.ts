import {
  Arg,
  FieldResolver,
  ID,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import UserResolver from './UserResolver'
import Node from '../entities/Node'

/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */

@Resolver(() => Node)
class NodeResolver {
  @FieldResolver(() => ID)
  id(@Root() node: any): string {
    return `User:${node.id}`; // The entity name detects by the node object in a real project (e.g. can be a User).
  }

  @Query(() => Node, { nullable: true })
  node(
    @Arg('id', () => ID) globalId: string,
  ): Node | undefined {
    const userResolver = new UserResolver()
    return userResolver.user(globalId) as Node | undefined
  }
}

export default NodeResolver;
