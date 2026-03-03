import { PurgeCSS } from "purgecss";
import { writeFileSync, readdirSync, statSync } from "fs";

const CSS_DIR = "out/_next/static/css";
const CONTENT_GLOBS = [
  "out/**/*.html",
  "out/_next/static/**/*.js",
];

const SAFELIST = {
  standard: [
    /^nina-/,
    /^container/,
    /^row/,
    /^col-/,
    /^d-/,
    /^flex-/,
    /^justify-/,
    /^align-/,
    /^text-/,
    /^btn/,
    /^img-/,
    /^m-/,
    /^p-/,
    /^animate__/,
    /^react-tooltip/,
    /^__react-tooltip/,
    /^core-styles-module/,
    /^styles-module/,
  ],
};

const cssFiles = readdirSync(CSS_DIR).filter((f) => f.endsWith(".css"));

console.log(`\n🧹 PurgeCSS: processing ${cssFiles.length} CSS file(s)…`);

for (const file of cssFiles) {
  const filePath = `${CSS_DIR}/${file}`;
  const before = statSync(filePath).size;

  const result = await new PurgeCSS().purge({
    content: CONTENT_GLOBS,
    css: [filePath],
    safelist: SAFELIST,
    defaultExtractor: (content) => content.match(/[\w-/:[\]]+/g) || [],
  });

  if (result[0]?.css) {
    writeFileSync(filePath, result[0].css);
    const after = Buffer.byteLength(result[0].css);
    const saved = ((1 - after / before) * 100).toFixed(1);
    console.log(
      `  ✓ ${file}  ${(before / 1024).toFixed(1)} KB → ${(after / 1024).toFixed(1)} KB  (-${saved}%)`
    );
  }
}

console.log("✅ PurgeCSS done.\n");
