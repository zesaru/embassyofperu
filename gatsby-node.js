const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('./src/templates/post.js')
  const res = await graphql(`
	query {
		allContentfulPosts {
				edges {
						node {
							id,
							name,
							slug,
						}
				}
		}
	}
`)
  if (res.errors) throw res.errors;

  res.data.allContentfulPosts.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug
      },
    })
  })
}