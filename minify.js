const { minify } = require('html-minifier-terser');
const glob = require('glob');
const fs = require('fs').promises;

// Configure the minifier options
const options = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeOptionalTags: true,
  minifyJS: true,
  minifyCSS: true
};

// Function to minify HTML files
async function minifyHTML() {
  try {
    const files = glob.sync('dist/**/*.html'); // Adjust the pattern as needed
    for (const file of files) {
      const originalHtml = await fs.readFile(file, 'utf-8');
      const minifiedHtml = await minify(originalHtml, options);
      await fs.writeFile(file, minifiedHtml);
      console.log(`Minified: ${file}`);
    }
    console.log('HTML minification complete.');
  } catch (error) {
    console.error('Error during HTML minification:', error);
  }
}

minifyHTML();
