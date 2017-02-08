import Head from 'next/head'
import React from 'react'
import Drawer from './drawer'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Drawer pathname={ this.props.pathname } />
        <main>
          { this.props.children }
        </main>
        <style jsx>{`
          main {
            margin-left: 320px;
            padding: 100px;
          }
        `}</style>
      </div>

    )
  }
}

