import 'jest';
import expressApp from '@/app';
import request from 'supertest';
test('Should reach the Auth home endpoint', async () => {
  try {
    await request(expressApp)
      .get('/api/auth')
      .set('Accept', 'application/json')
      // .expect((res: request.Response) => {
      //   console.log(res.text);
      // })
      .expect(200);
  } catch (error) {
    console.log(error);
    throw error;
  }
});
