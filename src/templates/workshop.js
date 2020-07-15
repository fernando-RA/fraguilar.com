import React from "react";
import { graphql } from 'gatsby'

export default function Template({data}) {
  const {markdownRemark} = data;
  const {frontmatter, html} = markdownRemark;

  return (
    <div className="container-fluid Workshop">
      <div className="row WorkshopTitle">
        <div className="col-xs-offset-1 col-xs-8">
          <h1>{frontmatter.title}</h1>
          <br/>
          <h2>{frontmatter.subtitle}</h2>
          <br/>
          <h3>{frontmatter.location}</h3>
        </div>
      </div>

      <div className="WorkshopMain">
        <div className="row">
          <div className="col-xs-9 col-xs-offset-1">
            <div dangerouslySetInnerHTML={{
              __html: html
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql `
  query WorkshopByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
        location
      }
    }
  }
`;