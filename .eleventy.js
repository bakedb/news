module.exports = function(eleventyConfig) {
  // Pass post files into a "posts" collection sorted by date
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};