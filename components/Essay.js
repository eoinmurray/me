import Header from './Header'

export default (props) => (
  <div>
    <div className="lhs">
      <Header />

      <div className="essay">
        {props.children}
      </div>
    </div>

    <style jsx global>{`
      body {
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        margin: 0;
        padding: 0;
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }

      iframe {
        border: none;
      }

      .lhs {
        padding: 40px 100px;
      }

      .essay {
        margin-top: 40px;
        max-width: 660px;
      }  

      .essay p {
        line-height: 1.5;
      }

      @media screen and (max-width: 800px) {
        .lhs {
          padding: 40px;
        }
      }

    `}</style>
  </div>
)
