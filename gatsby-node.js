const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { slash } = require(`gatsby-core-utils`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}


exports.createPages = async ({ graphql, actions }) => {
  console.log(graphql, actions)
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
          slug
        }
      }
    }
  `)
  const philosophyTemplates = path.resolve(`./src/templates/philosophy.js`);
  const whatWeDoTemplates = path.resolve(`./src/templates/what_we_do.js`);
  const howWeWorkTemplates = path.resolve(`./src/templates/how_we_work.js`);
  const indexTemplates = path.resolve(`./src/templates/index.js`);
  allPosts.forEach(post => {
    switch (post.slug) {
      case 'philosophy':
        createPage({
          path: post.slug,
          component: slash(philosophyTemplates),
          context: { id: post.id },
        });
        break;

      case 'what_we_do':
        createPage({
          path: post.slug,
          component: slash(whatWeDoTemplates),
          context: { id: post.id },
        });
        break;

      case 'how_we_work':
        createPage({
          path: post.slug,
          component: slash(howWeWorkTemplates),
          context: { id: post.id },
        });
        break;
      case 'home':
        createPage({
          path: '/',
          component: slash(indexTemplates),
          context: { id: post.id },
        });
        break;

      default: break;
    }

  })
}