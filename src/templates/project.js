import React from "react";

export default function Template({ data, }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="container Project">
      <div className="row">
        <div className="col-xs-9 col-xs-offset-1">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>

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