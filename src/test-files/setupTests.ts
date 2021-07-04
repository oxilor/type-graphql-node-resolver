import 'reflect-metadata';
import TestClient from '@os-team/graphql-test-client';
import http from 'http';
import createServer from '../utils/createServer';

/* eslint-disable import/no-mutable-exports */
export let client: TestClient;
let server: http.Server;

const PORT = 4001;
export const GRAPHQL_URL = `http://localhost:${PORT}/graphql`;

beforeAll(async () => {
  client = new TestClient({
    url: GRAPHQL_URL,
  });
  server = await createServer(PORT);
});

afterAll(async () => {
  server.close();
});
