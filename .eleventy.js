const Image = require("@11ty/eleventy-img");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(Image.eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: "html",

    // Add any other Image utility options here:

    // optional, output image formats
    formats: ["webp", "jpeg"],
    // formats: ["auto"],

    // optional, output image widths
    // widths: ["auto"],

    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  eleventyConfig.addGlobalData("headshot", async () => {
    let url =
      "https://res.cloudinary.com/dave-powers/image/upload/c_scale,w_861/v1586371313/dave_powers_headshot";
    let stats = await Image(url, {
      widths: [448],
    });
    return stats;
  });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

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
