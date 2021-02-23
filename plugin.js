const fs = require("fs");
const path = require("path");

module.exports = function (context) {
  return {
    name: "docusaurus-plugin",
    loadContent() {
      return {
        title: "This is a test",
        content: "Here goes some content",
      };
    },
    contentLoaded({ content }) {
      fs.writeFileSync(
        path.join(context.siteDir, "docs", "post.md"),
        [`# ${content.title}`, content.content].join("\n\n")
      );
    },
  };
};
