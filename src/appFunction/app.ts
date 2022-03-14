// Import Express, Path, fsExtra, resizeImage, And getMetadata Modules To Create Our mainAPI
import express, { Request, Response } from 'express';
import path from 'path';
import fsExtra from 'fs-extra';
import resizeImage from './resizeFunction';
import getMetadata from './getMetaData';

// Create mainAPI Router Function
const mainAPI = express.Router();

mainAPI.get(
  '/imageResize',
  async (req: Request, res: Response): Promise<void> => {
    // Image Variables
    const name = String(req.query.name);
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    // Set Image Format
    const formats: [
      'jpg',
      'jpeg',
      'png',
      'GIF',
      'WebP',
      'AVIF',
      'SVG',
      'TIFF'
    ] = ['jpg', 'jpeg', 'png', 'GIF', 'WebP', 'AVIF', 'SVG', 'TIFF'];

    // Validate Image Format
    for (let i = 0; i < formats.length; i++) {
      // Full Path For Original And Resized Images
      const imageFullPath: string = path.join(
        __dirname + `./../../images/${name}.${formats[i]}`
      );
      const resizedImageFullPath: string = path.join(
        __dirname +
          `./../../resizedImages/${name}_w${width}px_h${height}px.${formats[i]}`
      );

      console.log(imageFullPath);
      console.log(resizedImageFullPath);

      // Validating Image Name
      if (fsExtra.existsSync(imageFullPath)) {
        console.log(`${name}.${formats[i]} Is Valid Image Name And format`);

        // Validating Image Width And Hight
        if (width >= 1 && height >= 1) {
          console.log(
            `Image Width And Hight Is Valid: W = ${width}px, H = ${height}px`
          );

          // Checking Image Meta Data
          getMetadata(imageFullPath);

          // Checking If Requested Image Is Already Exist
          if (fsExtra.existsSync(resizedImageFullPath)) {
            try {
              console.log('Retrieved Existing Resized Image');
              return res.status(200).sendFile(resizedImageFullPath);
            } catch (error) {
              console.error(error);
              res.status(500);
              return;
            }
          } else {
            // If Image Not Exist Resize It
            try {
              const resizedImage = await resizeImage(
                imageFullPath,
                width,
                height,
                resizedImageFullPath
              );
              return res.status(200).sendFile(resizedImage);
            } catch (error) {
              console.error(error);
              res.status(500);
              return;
            }
          }
        } else if (width < 1 && height >= 1) {
          // Width Error
          console.log(`Error, Invalid Image Width`);
          res
            .status(404)
            .send(`<h1>Error, Please Enter a Valid Image Width</h1>`);
          return;
        } else if (width >= 1 && height < 1) {
          // Height Error
          console.log(`Error, Invalid Image Hight`);
          res
            .status(404)
            .send(`<h1>Error, Please Enter a Valid Image Height</h1>`);
          return;
        } else {
          //Width And Height Error
          console.log(`Error, Invalid Image Width And Hight`);
          res
            .status(404)
            .send(
              `<h1>Error, Please Enter a Valid Image Width And Height</h1>`
            );
          return;
        }
      } else {
        //Image Name And Formate Error
        console.log(`Error, Invalid Image Name Or Format Not Supported`);
        res
          .status(404)
          .send(`<h1>Error, Please Enter a Valid Image Name And Format</h1>`);
        return;
      }
    }
  }
);

export default mainAPI;
