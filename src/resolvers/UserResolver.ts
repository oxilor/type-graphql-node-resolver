import {
  Arg,
  FieldResolver,
  ID, Query,
  Resolver,
  Root,
} from 'type-graphql'
import User from '../entities/User';

export const USERS = Array(2).fill({}).map((_, index) => {
  const user = new User()
  user.id = index + 1
  user.email = `name${user.id}@domain.com`
  return user
})

@Resolver(() => User)
class UserResolver {
  @FieldResolver(() => ID)
  id(@Root() user: User): string {
    return `User:${user.id}`;
  }

  @Query(() => User)
  user(@Arg('id', () => ID) globalId: string): User | undefined {
    const [,stringId] = globalId.split(':')
    const id = Number(stringId)
    return USERS.find(item => item.id === id)
  }
}

export default UserResolver;
