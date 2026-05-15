import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Pricing() {
  const plans = [
    {
      badge: "ESSENTIALS",
      name: "BASIC",
      price: "$3.99",
      features: [
        "1080p HD Streaming",
        "1 Concurrent Screen",
        "Ad-Supported Library",
      ],
      isFeatured: false,
      isPremium: false,
    },
    {
      badge: "MOST POPULAR",
      name: "SUPERIOR",
      price: "$7.99",
      features: [
        "4K Ultra HD + HDR",
        "2 Concurrent Screens",
        "No Commercial Breaks",
        "Spatial Audio Support",
      ],
      isFeatured: true,
      isPremium: false,
    },
    {
      badge: "ELITE CHOICE",
      name: "PREMIUM",
      price: "$10.99",
      features: [
        "8K Streaming Ready",
        "Unlimited Screens",
        "Early Access Premieres",
        "Dolby Atmos Mastering",
      ],
      isFeatured: false,
      isPremium: true,
      ribbonText: "BEST VALUE",
    },
  ];

  return (
    <>
      <Header />

      <section className="pricing">
        <div className="pricing__container">
          <header className="pricing__header">
            <span className="pricing__tagline">PRICING</span>
            <h1 className="pricing__title">Choose Your Experience</h1>
            <p className="pricing__subtitle">
              Precision-engineered streaming for the ultimate cinematic
              immersion. Select the tier that matches your passion.
            </p>
          </header>

          <div className="pricing__grid">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card 
                  ${plan.isFeatured ? "pricing-card--featured" : ""} 
                  ${plan.isPremium ? "pricing-card--premium" : ""}`}
              >
                {plan.ribbonText && (
                  <div className="pricing-card__ribbon">{plan.ribbonText}</div>
                )}

                <span className="pricing-card__badge">{plan.badge}</span>
                <h2 className="pricing-card__name">{plan.name}</h2>

                <div className="pricing-card__price-container">
                  <span className="pricing-card__price">{plan.price}</span>
                  <span className="pricing-card__period">/mo</span>
                </div>

                <ul className="pricing-card__features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing-card__feature-item">
                      <span className="pricing-card__feature-icon">
                        {plan.isPremium ? "★" : "✓"}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`pricing-card__button 
                    ${plan.isPremium ? "pricing-card__button--solid" : "pricing-card__button--outline"}`}
                >
                  Select{" "}
                  {plan.name.charAt(0) + plan.name.slice(1).toLowerCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Pricing
