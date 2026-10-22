import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const src = '/Users/niranjankannan/.gemini/antigravity-ide/brain/28ac0f32-8569-4af7-b00e-25089888ad53/.user_uploaded/media_1792145606513.jpg';
const outDir = 'public/assets';
mkdirSync(outDir, { recursive: true });

async function run() {
  console.log('Reading source image...');
  
  // Generate responsive portraits
  await sharp(src)
    .resize({ width: 1100 })
    .webp({ quality: 92 })
    .toFile(`${outDir}/portrait-1100.webp`);
  console.log('Generated portrait-1100.webp');

  await sharp(src)
    .resize({ width: 720 })
    .webp({ quality: 92 })
    .toFile(`${outDir}/portrait-720.webp`);
  console.log('Generated portrait-720.webp');

  await sharp(src)
    .resize({ width: 420 })
    .webp({ quality: 90 })
    .toFile(`${outDir}/portrait-420.webp`);
  console.log('Generated portrait-420.webp');

  // Copy raw uploaded jpg as backup
  await sharp(src)
    .jpeg({ quality: 95 })
    .toFile(`${outDir}/niranjan-hero.jpg`);
  console.log('Saved niranjan-hero.jpg');

  // Generate og-image.jpg
  const portrait = await sharp(src).resize({ height: 580 }).toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: '#07070a' }
  })
    .composite([
      {
        input: Buffer.from(`
          <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="g" cx="80%" cy="50%" r="45%">
                <stop offset="0%" stop-color="#e5132b" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#e5132b" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#g)"/>
          </svg>
        `)
      },
      { input: portrait, gravity: 'southeast' },
      {
        input: Buffer.from(`
          <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <text x="72" y="290" font-family="sans-serif" font-weight="900" font-size="124" fill="#f4f1ec" letter-spacing="4">NIRANJAN</text>
            <text x="78" y="344" font-family="sans-serif" font-weight="700" font-size="24" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
            <text x="78" y="410" font-family="sans-serif" font-weight="600" font-size="16" fill="#a7a6ad" letter-spacing="4">ASSOCIATE PRODUCT MANAGER • ENTERPRISE FINTECH</text>
          </svg>
        `)
      }
    ])
    .jpeg({ quality: 90 })
    .toFile(`${outDir}/og-image.jpg`);
  console.log('Generated og-image.jpg');

  console.log('All portraits built successfully!');
}

run().catch((err) => {
  console.error('Error building portraits:', err);
  process.exit(1);
});
