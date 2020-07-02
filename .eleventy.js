const localImages = require("eleventy-plugin-local-images");
const CleanCSS = require("clean-css");
const readingTime = require("eleventy-plugin-reading-time");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(localImages, {
    distPath: "_site",
    assetPath: "/assets/img",
    selector: "source",
    attribute: "srcset",
    verbose: false,
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(readingTime);

  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
    },
  };
};
