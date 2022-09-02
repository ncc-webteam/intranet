let Nunjucks = require("nunjucks");

module.exports = function(eleventyConfig) {

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes")
  );

  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/img/");

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "public"
    },
    pathPrefix: "/intranet/public/"
  };
};