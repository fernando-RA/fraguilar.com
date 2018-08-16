import React from 'react'
import Link from 'gatsby-link'

const BlogCard = ({title, description, img, user, link}) => (
  <div className="col-xs-9 col-sm-3 BlogCard">
    <a href={link}>
      <img src={img} alt={title} className='img-responsive'/>
      <div className="BlogCardText">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  </div>
)

export default BlogCard
