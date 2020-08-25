import React from 'react'

import Layout from '../layouts'

const Newsletter = () => (
  <Layout>
    <div className='container-fluid works' id="newsletter">
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div id="mc_embed_signup">
            <form action="https://agirti.us18.list-manage.com/subscribe/post?u=f177c6fb4788f8f4ef57bde9c&amp;id=fa7483c398" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response"/>
                  <div className="response" id="mce-success-response"/>
                </div>
                <div className="input-text">
                  <input type="text" name="b_f177c6fb4788f8f4ef57bde9c_fa7483c398" tabIndex="-1"/>
                </div>
                <div className="clear">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" />
                </div>
              </div>
            </form>
          </div>
          <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
        </div>
      </div>
    </div>
  </Layout>
)


export default Newsletter
