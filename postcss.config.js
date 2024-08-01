// postcss.config.js
module.exports = {
	plugins: [
	  'postcss-import',
	  'tailwindcss',
	  'autoprefixer',
	  'postcss-nesting', // Correctly include postcss-nesting
	],
  };
  