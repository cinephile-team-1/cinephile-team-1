import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">PREMIUM STREAMING</span>
          <h1>
            UNLIMITED CINEMA AT <br /> <span>YOUR FINGERTIPS</span>
          </h1>
          <p>
            Experience breathtaking visual storytelling with
            precision-engineered 8K streaming.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">GET STARTED</button>
            <button className="btn-secondary">BROWSE FILMS</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>500k+</strong> <p>SUBSCRIBERS</p>
            </div>
            <div>
              <strong>12k+</strong> <p>TITLES</p>
            </div>
            <div>
              <strong>8K</strong> <p>RESOLUTION</p>
            </div>
          </div>
        </div>

        {/* Справа будут карточки (их можно сделать отдельными div) */}
        <div className="hero-cards">
          <div className="card large sci-fi">
            <span>SCI-FI</span>
          </div>
          <div className="card small drama">
            <span>DRAMA</span>
          </div>
          <div className="card small releases">
            <i className="play-icon">▶</i>
            <span>NEW RELEASES</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
