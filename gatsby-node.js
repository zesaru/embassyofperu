const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("./src/templates/post.js")
  const postTemplateJp = path.resolve("./src/templates/postjp.js")

  const res = await graphql(`
    {
      esp: allContentfulPosts {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
      jp: allContentfulPostjp {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `)
  console.log(res)
  if (res.errors) throw res.errors

  res.data.esp.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  res.data.jp.edges.forEach(({ node }) => {
    createPage({
      path: `/jp/${node.slug}`,
      component: postTemplateJp,
      context: {
        slug: node.slug,
      },
    })
  })
}
