import Header from '../components/Header'

export default () => (
  <div>
    <div className="rhs">
      <img src="/samo.jpg" alt="" />
    </div>

    <div className="lhs">
      <Header />
      <br />
      <p>
        Irish guy. Currently co-founder of <a href="https://kyso.io">Kyso</a>{" "}
        and co-founder of <a href="https://arburyroad.com">The Arbury Foundation</a>.
      </p>
      <br />
      <p>
        - Previously founded{" "}
        <a target="_blank" href="https://www.rinodrive.com/">
          Rinodrive
        </a>{" "}
        and sold it in 2019 to Deepverge (LON: DVRG).
      </p>
      <p>
        - Built{" "}
        <a
          target="_blank"
          href="https://scholar.google.co.uk/citations?user=hw0v2bsAAAAJ&hl=en"
        >
          quantum computers
        </a>{" "}
        when I was a PhD student at Cambridge.
      </p>
      <p>
        - Before that I worked at Tyndall stochastically{" "}
        <a target="_blank" href="http://eoinmurray.github.io/icarusjs/">
          modelling quantum systems.
        </a>
      </p>

      <br />
      <p>
        *{"  "}
        <a target="_blank" href="mailto:me@eoin.xyz">
          me@eoinmurray.eu
        </a>
      </p>
      <p>
        *{"  "}
        <a target="_blank" href="https://twitter.com/@eo_in">
          @eo_in
        </a>
      </p>
      <p>
        *{"  "}
        <a target="_blank" href="https://github.com/eoinmurray">
          github.com/eoinmurray
        </a>
      </p>
      <p>
        *{"  "}
        <a target="_blank" href="https://ie.linkedin.com/in/eoinm">
          linkedin
        </a>
      </p>
    </div>

    <style jsx global>{`
      body {
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          serif;
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

      .rhs {
        padding: 50px;
        float: right;
        height: 691px;
      }

      @media screen and (max-width: 800px) {
        .lhs {
          padding: 40px;
        }

        .rhs {
          margin: 40px;
          padding: 0;
          height: auto;
        }
      }
    `}</style>
  </div>
);
