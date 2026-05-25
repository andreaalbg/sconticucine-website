import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svg = readFileSync(join(root, 'app/icon.svg'))

const sizes = [
  { file: 'public/icon-192.png', size: 192 },
  { file: 'public/icon-512.png', size: 512 },
  { file: 'app/apple-icon.png', size: 180 },
]

for (const { file, size } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(join(root, file))
  console.log(`Wrote ${file}`)
}
