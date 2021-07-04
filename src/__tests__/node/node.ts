import { client } from '../../test-files/setupTests'
import { USERS } from '../../resolvers/UserResolver'

const nodeQuery = `
  query Node($id: ID!) {
    node(id: $id) {
      id
    }
  }
`;

it('Should return the existing user', async () => {
  const globalUserId = `User:${USERS[0].id}`

  // Make the request
  const nodeRes = await client.query({
    query: nodeQuery,
    variables: {
      id: globalUserId,
    },
  });

  // Test the response
  expect(nodeRes.body.errors).toBeUndefined();
  const nodeData = nodeRes.body.data.node;
  expect(nodeData.id).toBe(globalUserId);
});
