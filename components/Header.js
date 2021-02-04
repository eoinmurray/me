import React from 'react'
import Head from 'next/head'
import FavEmoji from './UnicodeFavicon'


export default class extends React.Component {
  componentDidMount() {
    FavEmoji('🔱')
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>🔥 Eoin Murray</title>
        </Head>

        <img src="/profile.jpg" alt=""/>
        <br/>
        <a href="/">Eoin Murray</a>
        <a href="/about">About</a>
        <style jsx>{`
          img {
            max-width: 60px;
            margin-bottom: 20px;
          }

          a {
            margin-right: 10px;
          }

          div {
            margin-bottom: 20px;
          }
        `}</style>
      </div>

    )
  }
}
