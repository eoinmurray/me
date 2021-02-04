import Header from '../components/Header'

export default () => (
  <div>

    <div className="rhs">
      <img src="/pro.jpg" alt=""/>
    </div>

    <div className="lhs">
      <Header />
      <iframe
        src="https://embed.spotify.com/?uri=spotify%3Auser%3Aem586%3Aplaylist%3A0pQkIIs4VXdJkQg6kdlvfw"
        width="300"
        height="550"
      />
    </div>

    <style jsx global>{`
      body {
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        background-color: #000;
        color: white;
        margin: 0;
        padding: 0;
      }

      a {
        color: white;
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

      .rhs {
        margin: 50px;
        float: right;
        height: 691px;
      }

      @media screen and (max-width: 800px) {
        .lhs {
          padding: 40px;
        }

        .rhs {
          margin: 40px;
          height: auto;
        }
      }
    `}</style>
  </div>
)
