import { server, headers } from './settings';

describe('[API]', () => {
  test('Status check', async () => {
    const response = await server.get(`/`).set(headers);
    expect(response.status).toBe(200);
    expect(response.text).toBe('API is working.');
  });

  test('404', async () => {
    const response = await server.get(`/NOTFOUND`);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Not found.');
  });

  test.skip('500', async () => {
    const response = await server.get(`/`).set(headers);
  });
});

describe('[API] Hello', () => {
  test('Hello 1', async () => {
    const response = await server.get(`/hello`).set(headers);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Not found.');
  });

  test('Hello 2', async () => {
    const response = await server.get(`/hello/world`).set(headers);
    console.log(response);
    expect(response.status).toBe(200);
    expect(response.body.hello).toBe('world');
  });
});
