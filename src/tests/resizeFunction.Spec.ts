import resizeImage from '../appFunction/resizeFunction';
import path from 'path';

const name = 'palmtunnel';
const width = 500;
const invalidWidth = Number('abcd');
const height = 500;
const invalidHeight = 0;
const format = 'jpg';
const imageFullPath = path.join(__dirname + `./../../images/${name}.${format}`);
const resizedImageFullPath = path.join(
  __dirname + `./../../resizedImages/${name}_w${width}px_h${height}px.${format}`
);

describe('Testing Processing Image With Sharp', () => {
  it('Should Successfully Pass Test For Valid Image Data', async () => {
    try {
      const result = await resizeImage(
        imageFullPath,
        width,
        height,
        resizedImageFullPath
      );
      expect(result).toEqual(resizedImageFullPath);
    } catch (error) {
      console.log(error, `Error: Valid Image Data Test Faild!`);
    }
  });

  it('Should Throw Error According To Invalid Image Data', async () => {
    try {
      const result = await resizeImage(
        imageFullPath,
        invalidWidth,
        invalidHeight,
        resizedImageFullPath
      );
      expect(result).toThrowError();
    } catch (error) {
      console.log(error, `Error: InValid Image Data Test Faild!`);
    }
  });
});
