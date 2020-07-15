import React from "react";
import { graphql } from 'gatsby'
import Layout from '../layouts'

export default function Template({ data, }) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;

  return (
    <Layout>
    <div className="container Project">
      <div className="row">
        <div className="col-xs-9 col-xs-offset-1">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;