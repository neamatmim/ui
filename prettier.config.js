/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 120, // default: 80
  tabWidth: 2, // indent_size = 2 (default)
  useTabs: false, // indent_style = space (default)
  semi: false, // default: true
  singleQuote: true, // default: false
  trailingComma: 'es5', // default
  bracketSpacing: true, //default
  arrowParens: 'always', //default
  bracketSameLine: false, //default
  // parser: "flow",
  // endOfLine: "lf", // end_of_line = lf (default)
  // plugins: [require.resolve("prettier-plugin-tailwindcss")],
  // tailwindFunctions: ["clsx"],
}
