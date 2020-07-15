import React from 'react'

import Layout from '../layouts'
import BlogCard from './../components/blogCard'

import banner from './../components/images/banner.jpg'
import github from './../components/images/github.png'

import capa from '../components/images/capa.jpg'
import blog1 from '../components/images/blog1.jpeg'
import blog2 from '../components/images/blog2.jpeg'
import blog3 from '../components/images/blog3.jpg'

const BLOG_ITEMS = [
  {
    title: 'How I’m relating Human & Robots in a Greek Tourism Startup.',
    author: 'Fernando Aguilar',
    authorImg: capa,
    img: blog1,
    description: 'Chatbots Life Publiation',
    link:
      'https://chatbotslife.com/the-most-mind-blowing-experience-ever-39178da8bef8',
  },
  {
    title: 'Who am I and How I Got Here?',
    author: 'Fernando Aguilar',
    authorImg: capa,
    img: blog2,
    description: 'Holistic Youth Publication',
    link:
      'https://medium.com/holistic-youth/who-i-am-how-the-past-got-me-where-i-am-right-now-1ebe1474609d',
  },
  {
    title: 'The Greatest Advice for Young People',
    author: 'Fernando Aguilar',
    authorImg: capa,
    img: blog3,
    description: '10 Things Every 20-Something Needs to Read Right Now.',
    link:
      'https://medium.com/@fraguilar/the-greatest-advice-for-young-people-8061d778abeb',
  },
]

const About = () => (
  <Layout>
  <div className="container-fluid works" id="about">
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <img src={banner} alt="banner" className="BannerAbout" />
      </div>
    </div>

    <div className="row">
      <div className="col-xs-9 col-sm-7 col-xs-offset-1 col-sm-offset-3 AboutDescription">
        <p>
          Fernando Ribeiro is focused on becoming his greatest version.
          Interested in the intersection between technology, art and psychology
          he develops software with a higher sense of purpose. His work has been
          shown internationally across Brazil and Europe, including at the
          Cultural Complex of Republic, #16 Art, Media Lab/UnB, Rock in Rio,
          Planetarium Brasilia and more.
        </p>
        <p>fernando.aguilar@hotmail.com.br</p>
        <p>
          <a href="https://twitter.com/fernand0aguilar">@fernand0aguilar</a>
        </p>
        <p>
          <img src={github} alt="github" className="SocialIcon" />
          <a href="https://github.com/fernand0aguilar">fernand0aguilar</a>
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1 col-sm-offset-2 Blog">
        <h1>Recent Blog Posts</h1>
        {BLOG_ITEMS.map(i => (
          <BlogCard
            key={i.title}
            title={i.title}
            description={i.description}
            img={i.img}
            author={i.author}
            authorImg={i.authorImg}
            link={i.link}
          />
        ))}
      </div>
    </div>
  </div>
  </Layout>
)

export default About
