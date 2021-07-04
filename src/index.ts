import 'reflect-metadata';
import createServer from './utils/createServer';

const PORT = 4010;

createServer(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
})
// eslint-disable-next-line no-console
.catch((e) => console.error(e));
