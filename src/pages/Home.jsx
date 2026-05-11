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

      {/* --- SECCIÓN DE PRECIOS (AÑADIDO) --- */}
      <section className="pricing-section">
        <h2 className="pricing-title">
          CHOOSE YOUR <span>LENS</span>
        </h2>

        <div className="pricing-container">
          {/* Plan Basic */}
          <div className="pricing-card">
            <span className="plan-label">ESSENTIALS</span>
            <h3>BASIC</h3>
            <p className="price">
              $3.99<span>/mo</span>
            </p>
            <ul>
              <li>1080p HD Streaming</li>
              <li>1 Concurrent Screen</li>
              <li>Ad-Supported Library</li>
            </ul>
            <button className="btn-plan">Select Basic</button>
          </div>

          {/* Plan Superior (El destacado en Cyan) */}
          <div className="pricing-card featured">
            <span className="plan-label">MOST POPULAR</span>
            <h3>SUPERIOR</h3>
            <p className="price">
              $7.99<span>/mo</span>
            </p>
            <ul>
              <li>4K Ultra HD + HDR</li>
              <li>2 Concurrent Screens</li>
              <li>No Commercial Breaks</li>
              <li>Spatial Audio Support</li>
            </ul>
            <button className="btn-plan primary">Select Superior</button>
          </div>

          {/* Plan Premium (El de Rosa) */}
          <div className="pricing-card premium">
            <span className="plan-label">ELITE CHOICE</span>
            <h3>PREMIUM</h3>
            <p className="price">
              $10.99<span>/mo</span>
            </p>
            <ul>
              <li>8K Streaming Ready</li>
              <li>Unlimited Screens</li>
              <li>Early Access Premieres</li>
              <li>Dolby Atmos Mastering</li>
            </ul>
            <button className="btn-plan secondary">Select Premium</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
