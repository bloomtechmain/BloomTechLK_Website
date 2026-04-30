import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  { input: 'src/assets/hero_bg_1.jpg', output: 'src/assets/hero_bg_1.webp' },
  { input: 'src/assets/hero_bg_2.jpg', output: 'src/assets/hero_bg_2.webp' },
  { input: 'src/assets/hero_bg_3.jpg', output: 'src/assets/hero_bg_3.webp' },
];

async function convertImages() {
  console.log('🖼️  Converting images to WebP format...\n');
  
  for (const { input, output } of images) {
    const inputPath = join(__dirname, input);
    const outputPath = join(__dirname, output);
    
    if (!existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${input} - file not found`);
      continue;
    }
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      console.log(`✅ Converted ${input} → ${output}`);
    } catch (error) {
      console.error(`❌ Error converting ${input}:`, error.message);
    }
  }
  
  console.log('\n✨ Image conversion complete!');
}

convertImages();
