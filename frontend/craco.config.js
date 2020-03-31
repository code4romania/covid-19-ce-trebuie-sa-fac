const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: [
            "./src/**/*.html",
            "./src/**/*.jsx",
            "./src/**/*.js",
            "./node_modules/@code4ro/taskforce-fe-components/**/*.js"
          ]
        })
      ]
    }
  }
};
