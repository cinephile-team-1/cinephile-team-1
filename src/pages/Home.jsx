<<<<<<< HEAD
import { useState, useEffect } from "react";
import "./Home.scss";

import sciFiImg from "../assets/SCI-Fi.png";
import dramaImg from "../assets/drama.png";
import newReleasesImg from "../assets/new-releases.png";

const contentData = {
  desktop: {
    badge: "PREMIUM STREAMING",
    title: (
      <>
        UNLIMITED CINEMA AT <br />{" "}
        <span className="hero__title--highlight">YOUR FINGERTIPS</span>
      </>
    ),
    description:
      "Experience breathtaking visual storytelling with precision-engineered 8K streaming. Access the world's most curated library of modern masterpieces and cult classics.",
    btnPrimary: "GET STARTED",
    btnSecondary: "BROWSE FILMS",
  },
  mobile: {
    badge: "ULTRA HD STREAMING",
    title: (
      <>
        Discover <span className="hero__title--highlight">Pure</span> <br />{" "}
        Cinema.
      </>
    ),
    description:
      "Precision-engineered streaming for the world's most dedicated cinephiles.",
    btnPrimary: "Get Access",
    btnSecondary: "View Catalog",
  },
};

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentContent = isMobile ? contentData.mobile : contentData.desktop;

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">{currentContent.badge}</span>
          <h1 className="hero__title">{currentContent.title}</h1>
          <p className="hero__description">{currentContent.description}</p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">
              {currentContent.btnPrimary}
            </button>
            <button className="hero__btn hero__btn--secondary">
              {currentContent.btnSecondary}
            </button>
          </div>

          {!isMobile && (
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
          )}
        </div>

        {/* Передаем фоновые изображения напрямую через inline-style */}
        {!isMobile && (
          <div className="hero__grid">
            <div className="hero__card hero__card--tall"></div>
            <div className="hero__card hero__card--small"></div>
            <div className="hero__card hero__card--accent"></div>
          </div>
        )}
      </section>

      {isMobile && (
        <>
          <section className="trending">
            <div className="trending__card"></div>
          </section>

          <section className="keep-watching">
            <div className="keep-watching__header">
              <h2 className="keep-watching__title">Keep Watching</h2>
              <a href="#see-all" className="keep-watching__link">
                See All
              </a>
            </div>
            <div className="watch-card"></div>
          </section>
        </>
      )}
    </main>
  );
}

export default Home;
=======
function Home() {
  return (
    <div style={{ color: 'white' }}>
      <h1>HOME PAGE</h1>
    </div>
  );
}

export default Home;
>>>>>>> feature-contact
