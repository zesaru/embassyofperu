import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export const query = graphql`
  query($slug: String!) {
    contentfulPosts(slug: {eq: $slug }) {
      name
    }
  }
`
const post = (props) => {
  console.log(props)
  return (
    <Layout>
      {      props.data.contentfulPosts.name
}
    </Layout>
  );
}

export default post;
