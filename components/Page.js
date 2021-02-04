import React from 'react'
import Header from './Header'

export default (props) =>
  <div className="wrapper">
    <Header />
    {props.children}
    <style jsx global>{`
      .wrapper {
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        padding: 30px;
        max-width: 800px;
        margin: 0px auto;
      }
    `}</style>
  </div>
