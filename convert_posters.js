import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('../dev/History/Poster');
const outputDir = path.resolve('public/images/history');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

console.log(`Found ${files.length} files in input directory.`);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, path.basename(file, ext) + '.webp');
    console.log(`Processing: ${file} -> ${path.basename(outputPath)}`);
    try {
      await sharp(inputPath)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Successfully converted ${file}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

console.log('Image processing completed.');
