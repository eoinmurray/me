import Header from '../components/Header'

export default () => (
  <div>
    <div className="lhs">
      <Header />
      <h2>2017</h2>

      <div className="list">
        <p><a href="/essays/welfare-as-an-investment">We should think of welfare as an invesment</a></p>

        <p><a href="/essays/change-society-by-changing-factors-of-production">Changing society by strategically improving factors of production.</a></p>

        <p><a href="/essays/arguments-for-federal-europe">Arguments in favour of federal Europe</a></p>
      </div>

    </div>

    <style jsx global>{`
      p:before {
        content: "*";
      }

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

      .list a {
        margin-left: 5px;
      }

      @media screen and (max-width: 800px) {
        .lhs {
          padding: 40px;
        }
      }

    `}</style>
  </div>
)
