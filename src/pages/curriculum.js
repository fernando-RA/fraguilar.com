import React from 'react'
import Link from 'gatsby-link'

import BlogCard from './../components/blogCard';

import curriculum from './../components/images/curriculum.jpg';
import github from './../components/images/github.png';




const Curriculum = () => (
  <div className='container-fluid works' id="curriculum">
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <img src={curriculum} alt="curriculum" className="BannerCurriculum"/>
      </div>
    </div>
  </div>
)


export default Curriculum
