import "./Home.scss";

function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">PREMIUM STREAMING</span>
          <h1 className="hero__title">
            UNLIMITED CINEMA AT <br />
            <span className="hero__title--highlight">YOUR FINGERTIPS</span>
          </h1>
          <p className="hero__description">
            Experience breathtaking visual storytelling with
            precision-engineered 8K streaming.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">
              GET STARTED
            </button>
            <button className="hero__btn hero__btn--secondary">
              BROWSE FILMS
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat-item">
              <strong>500k+</strong> <p>SUBSCRIBERS</p>
            </div>
            <div className="hero__stat-item">
              <strong>12k+</strong> <p>TITLES</p>
            </div>
            <div className="hero__stat-item">
              <strong>8K</strong> <p>RESOLUTION</p>
            </div>
          </div>
        </div>

        <div className="hero__grid">
          <div className="hero__card hero__card--tall"></div>
          <div className="hero__card hero__card--small"></div>
          <div className="hero__card hero__card--accent"></div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section className="catalog">
        <h2 className="catalog__title">
          Explore <span>Our Catalog</span>
        </h2>
        <div className="catalog__grid">
          <div className="catalog__item">
            <div className="catalog__poster"></div>
            <h3 className="catalog__name">Interstellar</h3>
          </div>
          <div className="catalog__item">
            <div className="catalog__poster"></div>
            <h3 className="catalog__name">Inception</h3>
          </div>
          <div className="catalog__item">
            <div className="catalog__poster"></div>
            <h3 className="catalog__name">The Batman</h3>
          </div>
          <div className="catalog__item">
            <div className="catalog__poster"></div>
            <h3 className="catalog__name">Parasite</h3>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing">
        <h2 className="pricing__title">
          CHOOSE YOUR <span className="pricing__title--highlight">LENS</span>
        </h2>

        <div className="pricing__container">
          <div className="pricing__card">
            <span className="pricing__label">ESSENTIALS</span>
            <h3 className="pricing__plan-name">BASIC</h3>
            <p className="pricing__price">
              $3.99<span>/mo</span>
            </p>
            <ul className="pricing__features">
              <li>1080p HD Streaming</li>
              <li>1 Concurrent Screen</li>
            </ul>
            <button className="pricing__btn">Select Basic</button>
          </div>

          <div className="pricing__card pricing__card--featured">
            <span className="pricing__label">MOST POPULAR</span>
            <h3 className="pricing__plan-name">SUPERIOR</h3>
            <p className="pricing__price">
              $7.99<span>/mo</span>
            </p>
            <ul className="pricing__features">
              <li>4K Ultra HD + HDR</li>
              <li>2 Concurrent Screens</li>
            </ul>
            <button className="pricing__btn pricing__btn--featured">
              Select Superior
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
