import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectionDB } from './config/db.js';
import Product from './models/Product.js';
import GoldRate from './models/GoldRate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

async function recalculatePrices() {
  await connectionDB();

  const latestRates = await GoldRate.findOne().sort({ lastUpdated: -1 });
  if (!latestRates) {
    console.error('No gold rates found. Please set gold rates first.');
    process.exit(1);
  }

  const products = await Product.find({
    kType: { $in: ['18K', '22K', '24K'] },
    weight: { $gt: 0 }
  });

  let updated = 0;
  for (const product of products) {
    const nextRate = Number(latestRates[product.kType] || 0);
    if (nextRate <= 0) continue;

    product.karatRate = nextRate;
    await product.save();
    updated += 1;
  }

  console.log(`Recalculated prices for ${updated} products.`);
  process.exit(0);
}

recalculatePrices().catch((error) => {
  console.error('Failed to recalculate product prices:', error.message);
  process.exit(1);
});
