import path from 'path';
import fsExtra from 'fs-extra';

const validImageName = 'palmtunnel';
const validFormat = 'jpg';
const notExistResizedImagePath = path.join(
  __dirname + `./../../resizedImages/${validImageName}.${validFormat}`
);
const existResizedImagePath = path.join(
  __dirname +
    `./../../resizedImages/${validImageName}_w500px_h500px.${validFormat}`
);

describe('Checking If Image Exist Or Not ??', () => {
  it('Should Successfully Pass Test If Image Exist In Folder', async () => {
    const result = await fsExtra.existsSync(existResizedImagePath);
    expect(result).toBeTruthy();
  });

  it('Should Successfully Pass Test If Image Not Exist In Folder', async () => {
    const result = await fsExtra.existsSync(notExistResizedImagePath);
    expect(result).toBeFalsy();
  });
});
