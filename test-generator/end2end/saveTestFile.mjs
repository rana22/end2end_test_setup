import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';

export function generateTimestampedTestFilename() {
  const now = new Date();
  const formatted = now.toISOString().replace(/[:.]/g, '-');
  return `./specs/${formatted}.spec.js`;
}

export async function saveGeneratedTest(
    code,
) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileName = generateTimestampedTestFilename();

  await fs.outputFile(
    path.resolve(__dirname, fileName),
    code
  );
  return fileName;
};
