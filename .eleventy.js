module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  return {
    passthroughFileCopy: true
  };
};
