import getMetadata from '../appFunction/getMetaData';
import path from 'path';
import sharp from 'sharp';

const name = 'palmtunnel';
const formats = 'jpg';
const invalidFormats = 'PNG';
const imageFullPath = path.join(
  __dirname + `./../../images/${name}.${formats}`
);
const invalidImageFullPath = path.join(
  __dirname + `./../../images/${name}.${invalidFormats}`
);

describe('Testing Getting Meta Data For Image By Using Sharp', async () => {
  it('Should Successfully Get Image Meta Data By Using Sharp', async () => {
    try {
      const result = await getMetadata(imageFullPath);
      expect(result).toThrow(sharp(imageFullPath).metadata());
    } catch (error) {
      console.log(error, `Error: Valid Format & FullPath Test Faild!`);
    }
  });
  it('Should Throw Error According To Invalid Format & FullPath', async () => {
    try {
      const result = await getMetadata(invalidImageFullPath);
      expect(result).toThrowError();
    } catch (error) {
      console.log(error, 'Error: Invalid Format & FullPath Test Faild!');
    }
  });
});
