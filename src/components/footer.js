import React from 'react'

import darkWallet from './images/darkwallet.jpg';

const Footer = ({siteTitle}) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <img src={darkWallet} alt="trinity" />
        </div>

        <div className="col-xs-7 Contact">
          <h5>Contact</h5>
            <p>Send me a message at:</p>
            <p><a href="https://twitter.com/fernand0aguilar">@fernand0aguilar</a></p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
