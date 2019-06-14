import React from 'react'
import Link from 'gatsby-link'

import BlogCard from './../components/blogCard';

import banner from './../components/images/banner.jpg';
import github from './../components/images/github.png';




const About = () => (
  <div className='container-fluid works' id="about">
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <img src={banner} alt="banner" className="BannerAbout"/>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-9 col-sm-7 col-xs-offset-1 col-sm-offset-3 AboutDescription">
        <p>
          Fernando Ribeiro is focused on becoming his greatest version. Interested  in the intersection between technology, art and psychology he develops software
          with a higher sense of purpose. His work has been shown internationally across Brazil and Europe,
          including at the Cultural Complex of Republic, #16 Art, Media Lab/UnB, Rock in Rio, Planetarium Brasilia and more.
        </p>
        <p>fernando.aguilar@hotmail.com.br</p>
        <p>
          <a href="https://twitter.com/fernand0aguilar">@fernand0aguilar</a>
        </p>
        <p><img src={github} alt="github" className="SocialIcon"/>
          <a href="https://github.com/fernand0aguilar">fernand0aguilar</a>
        </p>
      </div>
    </div>
  </div>
)


export default About
