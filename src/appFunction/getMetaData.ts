// Import Sharp Module
import sharp from 'sharp';

async function getMetadata(imageFullPath: string): Promise<void> {
  try {
    // Use Sharp Module To Get MetaData
    const metadata = await sharp(imageFullPath).metadata();
    console.log(metadata);
  } catch (error) {
    console.log(error);
  }
}

export default getMetadata;
