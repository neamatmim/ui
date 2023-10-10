// {
//   "*.{js,ts,tsx,css,scss,postcss,md,json}": [
//     "prettier --write --plugin-search-dir=.",
//     "prettier --check --plugin-search-dir=."
//   ],
//     "*.{js,ts,tsx}": "eslint"
// }
// const path = require('node:path')

// const buildEslintCommand = (filenames) =>
//   `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
}
