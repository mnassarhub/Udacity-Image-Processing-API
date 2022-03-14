// Import Sharp Module
import sharp from 'sharp';

async function resizeImage(
  imageFullPath: string,
  width: number,
  height: number,
  resizedImageFullPath: string
): Promise<string> {
  try {
    // Using Sharp To Resize Images
    await sharp(imageFullPath)
      .resize({
        width: width,
        height: height
      })
      // Save Resized Image To Folder
      .toFile(resizedImageFullPath);
    return resizedImageFullPath;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default resizeImage;
