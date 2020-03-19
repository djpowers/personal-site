const localImages = require("eleventy-plugin-local-images");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(localImages, {
    distPath: "_site",
    assetPath: "/assets/img",
    selector: "img",
    verbose: false
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src"
    }
  };
};
