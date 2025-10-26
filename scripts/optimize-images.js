import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, resolve } from 'path';

const inputDir = resolve('./public/assets');
const outputDir = resolve('./public/images');

async function findImages(dir) {
  let images = [];
  const files = await readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      images = images.concat(await findImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(file.name)) {
      images.push(fullPath);
    }
  }
  return images;
}

async function optimizeImages() {
  try {
    // Ensure the output directory exists
    await mkdir(outputDir, { recursive: true });

    const imagePaths = await findImages(inputDir);
    
    for (const imagePath of imagePaths) {
      const relativePath = imagePath.substring(inputDir.length + 1);
      const outputName = relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const outputPath = join(outputDir, outputName);
      
      // Ensure the subdirectory for the output file exists
      const outputSubDir = join(outputDir, relativePath.substring(0, relativePath.lastIndexOf('/')));
      await mkdir(outputSubDir, { recursive: true });

      await sharp(imagePath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`✓ Optimized ${relativePath} → ${outputName}`);
    }
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
