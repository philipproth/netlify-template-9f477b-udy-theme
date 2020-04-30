
      const filters = require('./_utils/filters.js');
      
      module.exports = function(eleventyConfig) {

        const references = JSON.parse('{"posts**is-this-featured":{"field":"is-this-featured","limit":2},"posts**categories":{"field":"categories","limit":6},"posts**authors":{"field":"authors","limit":6}}');

        filters(eleventyConfig, references);

        eleventyConfig.addPassthroughCopy("static/**");
        eleventyConfig.addPassthroughCopy("admin/**");
        
        return {
          dir: {
            input: "site",
            includes: "_views",
            output: "public"
          }
        };
      };