module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('robots.txt')
  eleventyConfig.addPassthroughCopy('_redirects')
  return {
    passthroughFileCopy: true
  }
}
