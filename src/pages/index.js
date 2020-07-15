import React, {Component} from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'

class IndexPage extends Component {
  render() {
    const {data} = this.props;
    const projects = data.allMarkdownRemark.edges;

    const main = projects.filter(({node}) => node.frontmatter.type === 'main')
    const experiments = projects.filter(({node}) => node.frontmatter.type === 'experiment')
    return (
      <Layout>
        <div className='container-fluid works' id="work">
          {main.map(({node}, i) => (
            <SelectedItem
              key={node.id}
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              img={node.frontmatter.thumbnail.publicURL}
              category={node.frontmatter.category}
              description={node.frontmatter.description}
              code={node.frontmatter.code}
              url={node.frontmatter.url}
              more={node.frontmatter.more}
              year={node.frontmatter.year}
            />
          ))}
        </div>
        <div className='container-fluid Experiments' id="experiments">
          <div className="row">
            <div className="col-xs-12 col-xs-offset-1">
              <h2>Other Tools & Experiments</h2>
            </div>
          </div>
          <div className="row">
            <div className='col-xs-offset-1'>
              {experiments.map(({node}, i) => (
                <Experiment
                  key={node.id}
                  path={node.frontmatter.path}
                  title={node.frontmatter.title}
                  img={node.frontmatter.thumbnail.publicURL}
                  category={node.frontmatter.category}
                  description={node.frontmatter.description}
                  code={node.frontmatter.code}
                  url={node.frontmatter.url}
                  more={node.frontmatter.more}
                  year={node.frontmatter.year}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const Experiment = ({ path, title, img, category, code, url, description, more, year, }) => {
  let to = path;

  return (
    <div className="col-xs-8 col-sm-3 Experiment">
      <a href={to}>
        <img className="img-responsive" src={img} alt={title} />
      </a>
      <a href={to}><h3>{title}</h3> </a>
      <p> <i>{category} | {year}</i> </p>
      <p>{description}</p>
    </div>
  )
}

const SelectedItem = ({ path, title, img, category, code, url, description, more, year, }) => {
  let to = path;
  let linkName = 'View More';
  let codeButton = 'Code';

  if (url) {
    if(url.includes("youtube")){
      linkName = "youtube video";
    }
    else{
      linkName = 'www↦'
    }
    to = url;
  }

  if(code.includes("youtube")){
    codeButton = "youtube video";
  }
  return (
    <div className="col-xs-12 col-md-8 col-sm-offset-1 col-md-offset-2 work" >
      <div className="row">
        <div className="col-xs-8 col-sm-4 col-md-5 col-xs-offset-1 col-sm-offset-0">
          <img className="img-responsive" src={img} alt={title} />
        </div>
        <div className="col-xs-8 col-sm-5 col-md-5 col-xs-offset-1 col-sm-offset-0 projectLink">
          <a href={to}>
            <h3>{title}</h3>
          </a>
          <h4>{category} | {year}</h4>
          <p className="hide-when-small ProjectDescriptionInMain">
            {description}
          </p>
          <div className="projectLink">
            {more ? <a href={more}><h6>View More</h6></a> : null}
            <a href={to}>
              <h6>{linkName}</h6>
            </a>
            {code ? <a href={code}><h6>{codeButton}</h6></a> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql `
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            path
            category
            url
            code
            more
            year
            type
            thumbnail {
              publicURL
            }
          }
          excerpt
        }
      }
    }
  }
`;
