const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(`src/templates/project.js`);
  const workshopTemplate = path.resolve(`src/templates/workshop.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template = projectTemplate;
      if (node.frontmatter.type === 'workshop') {
        template = workshopTemplate;
      }

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}, // additional data can be passed via context
      });
    });
  });
};