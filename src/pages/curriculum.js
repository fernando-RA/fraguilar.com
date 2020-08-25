import React from 'react'

import Layout from '../layouts'
import curriculum from './../components/images/curriculum.png';

const Curriculum = () => (
  <Layout>
    <div className='container-fluid works' id="curriculum">
      <div className="row">
        <div className="col-xs-2 col-xs-8">
          <img src={curriculum} alt="curriculum" className="BannerCurriculum"/>
        </div>
      </div>
    </div>
  </Layout>
)


export default Curriculum
