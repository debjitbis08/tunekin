import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import braveBanner from '../img/switch_banner_1@2x.png'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">We'll be back!</h1>
            <p>
              We are updating TuneKin to be better, more beautiful and free.
            </p>
            <h2>It was free earlier too right?</h2>
            <p>
              Not, if you consider the ads showing up. The ads track your every move
              on the Internet, so we are going to remove them.
            </p>
            <h2>But, how will you pay for the hosting?</h2>
            <p>
              The ads were not paying for the hosting anyway. But, to keep the servers
              running we had to pay, which now we can't. So we have decided to move to
              a free hosting and change the technology to support it.
            </p>
            <h2>When will you be back?</h2>
            <p>
              We cannot predict a timeframe. We develop this in our free time and this is
              just a hobby project.
            </p>
            <div>
              You can support the development and the maintainence of this site by supporting 
              us through the Brave browser.
              <p>
                <a href="https://brave.com/deb442" target="_blank">
                  <img src={braveBanner} style={{width: "217px"}}/>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
