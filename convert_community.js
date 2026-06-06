import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('../dev/History/集合写真');
const outputDir = path.resolve('public/images/community');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processImage(inputPath, outputFileName) {
  const outputPath = path.join(outputDir, outputFileName);
  console.log(`Processing: ${path.relative(inputDir, inputPath)} -> community/${outputFileName}`);
  try {
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);
    console.log(`Successfully converted ${outputFileName}`);
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err);
  }
}

async function main() {
  console.log(`Scanning directory: ${inputDir}`);
  if (!fs.existsSync(inputDir)) {
    console.error(`Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  // 1. Convert top-level images (like zundoko.webp)
  const topFiles = fs.readdirSync(inputDir, { withFileTypes: true });
  for (const file of topFiles) {
    if (file.isFile()) {
      const ext = path.extname(file.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const inputPath = path.join(inputDir, file.name);
        const outputName = path.basename(file.name, ext) + '.webp';
        await processImage(inputPath, outputName);
      }
    }
  }

  // 2. Convert ひだまり subdirectory
  const hidamariDir = path.join(inputDir, 'ひだまり');
  if (fs.existsSync(hidamariDir)) {
    const hidamariFiles = fs.readdirSync(hidamariDir);
    for (const file of hidamariFiles) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const inputPath = path.join(hidamariDir, file);
        const outputName = `hidamari_${path.basename(file, ext)}.webp`;
        await processImage(inputPath, outputName);
      }
    }
  }

  // 3. Convert フラット集会 subdirectory
  const meetupDir = path.join(inputDir, 'フラット集会');
  if (fs.existsSync(meetupDir)) {
    const meetupFiles = fs.readdirSync(meetupDir);
    for (const file of meetupFiles) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const inputPath = path.join(meetupDir, file);
        // Map names like "1.png" -> "meetup_1.webp", "2-1.png" -> "meetup_2-1.webp"
        const outputName = `meetup_${path.basename(file, ext)}.webp`;
        await processImage(inputPath, outputName);
      }
    }
  }

  console.log('All image processing complete.');
}

main().catch(err => {
  console.error('Fatal error in script:', err);
});
