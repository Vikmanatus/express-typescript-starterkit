import 'jest';

import expressApp from '../../../../src/app';

test('Should create a user successfully', async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    new Test(expressApp, 'GET', '/api/auth').expect(200);
    // await request(expressApp)
    // .get('/api/status/time')
    // .set('Accept', 'application/json')
    // .expect((res: request.Response) => {
    //     // eslint-disable-next-line no-console
    //     console.log(res.text);
    // })
    // .expect(StatusCodes.OK);
  } catch (error) {
    console.log(error);
    throw error;
  }
});
