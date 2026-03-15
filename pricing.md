---
layout: default
title: Pricing - Custom Itineraries
permalink: /pricing/
---

<div class="pricing-page-bg">
<section class="pricing-page">

  <div class="pricing-hero">
    <div class="section-label">Transparent Pricing</div>
    <h1>Choose Your Itinerary</h1>
    <p class="hero-description">
      Select the package that fits your trip length. Each itinerary is custom-crafted based on your preferences, budget, and travel style.
    </p>
  </div>

  <div class="pricing-grid">

    <!-- Weekend Escapes -->
    <div class="pricing-card">
      <div class="card-header">
        <h3>Weekend Escapes</h3>
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">50</span>
        </div>
        <p class="duration">2-3 Day Itineraries</p>
      </div>
      <div class="card-body">
        <ul class="features">
          <li>✓ Complete day-by-day schedule</li>
          <li>✓ Restaurant recommendations</li>
          <li>✓ Transit directions</li>
          <li>✓ Activity timing & reservations</li>
          <li>✓ Local insider tips</li>
          <li>✓ One free revision</li>
        </ul>
        <div class="package-details">
          <strong>Perfect for:</strong> Quick city breaks, long weekends, romantic getaways
        </div>
        <a href="STRIPE_LINK_WEEKEND" class="cta-primary" target="_blank">
          Purchase Weekend Escape
        </a>
      </div>
    </div>

    <!-- Week-Long Adventures -->
    <div class="pricing-card featured">
      <div class="badge">Most Popular</div>
      <div class="card-header">
        <h3>Week-Long Adventures</h3>
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">75</span>
        </div>
        <p class="duration">7-10 Day Itineraries</p>
      </div>
      <div class="card-body">
        <ul class="features">
          <li>✓ Complete day-by-day schedule</li>
          <li>✓ Restaurant recommendations</li>
          <li>✓ Transit directions</li>
          <li>✓ Activity timing & reservations</li>
          <li>✓ Local insider tips</li>
          <li>✓ Multi-city routing</li>
          <li>✓ One free revision</li>
        </ul>
        <div class="package-details">
          <strong>Perfect for:</strong> Full vacations, region exploration, multi-city trips
        </div>
        <a href="STRIPE_LINK_WEEK" class="cta-primary" target="_blank">
          Purchase Week-Long Adventure
        </a>
      </div>
    </div>

    <!-- Extended Expeditions -->
    <div class="pricing-card">
      <div class="card-header">
        <h3>Extended Expeditions</h3>
        <div class="price">
          <span class="currency">$</span>
          <span class="amount">100</span>
        </div>
        <p class="duration">Multi-Week Journeys</p>
      </div>
      <div class="card-body">
        <ul class="features">
          <li>✓ Complete day-by-day schedule</li>
          <li>✓ Restaurant recommendations</li>
          <li>✓ Transit directions</li>
          <li>✓ Activity timing & reservations</li>
          <li>✓ Local insider tips</li>
          <li>✓ Multi-city routing</li>
          <li>✓ Long-term travel logistics</li>
          <li>✓ One free revision</li>
        </ul>
        <div class="package-details">
          <strong>Perfect for:</strong> Gap years, sabbaticals, epic adventures, world tours
        </div>
        <a href="STRIPE_LINK_EXTENDED" class="cta-primary" target="_blank">
          Purchase Extended Expedition
        </a>
      </div>
    </div>

  </div>

  <div class="what-happens-next">
    <h2>What Happens After Purchase</h2>
    <div class="steps-timeline">
      <div class="step">
        <div class="step-num">1</div>
        <h4>Complete Payment</h4>
        <p>Secure checkout via Stripe</p>
      </div>
      <div class="arrow">→</div>
      <div class="step">
        <div class="step-num">2</div>
        <h4>Fill Intake Form</h4>
        <p>Tell us about your trip preferences</p>
      </div>
      <div class="arrow">→</div>
      <div class="step">
        <div class="step-num">3</div>
        <h4>Receive Itinerary</h4>
        <p>Custom PDF delivered within 24 hours</p>
      </div>
    </div>
  </div>

  <div class="faq-section">
    <h2>Frequently Asked Questions</h2>

    <div class="faq-item">
      <h4>What's included in each itinerary?</h4>
      <p>Every itinerary includes a day-by-day schedule with restaurant recommendations, activity timing, transit directions, booking links, and local insider tips tailored to your preferences.</p>
    </div>

    <div class="faq-item">
      <h4>How does the free revision work?</h4>
      <p>After receiving your itinerary, you can request one free revision within 7 days. Additional revisions are $25 each.</p>
    </div>

    <div class="faq-item">
      <h4>How long does delivery take?</h4>
      <p>Most itineraries are delivered within 24 hours of completing the intake form. Complex multi-city trips may take up to 48 hours.</p>
    </div>

    <div class="faq-item">
      <h4>Can I purchase for someone else?</h4>
      <p>Absolutely! After purchase, you'll fill out the intake form with their trip details, and we'll send the itinerary to their email.</p>
    </div>

  </div>

</section>
</div>

<style>
.pricing-page-bg {
  background:
    radial-gradient(circle at 5% 15%, rgba(212, 132, 108, 0.08) 0%, transparent 45%),
    radial-gradient(circle at 95% 85%, rgba(61, 90, 76, 0.08) 0%, transparent 45%),
    var(--sand);
  min-height: 100vh;
  padding-bottom: 4rem;
}
.pricing-page { max-width: 1200px; margin: 0 auto; padding: 8rem 4% 4rem; }
.pricing-hero { text-align: center; margin-bottom: 5rem; }
.pricing-hero .section-label {
  font-family: var(--sans); font-size: 0.75rem; letter-spacing: 3px;
  text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; font-weight: 500;
}
.pricing-hero h1 {
  font-family: var(--serif-display); font-size: 3.5rem; font-weight: 400;
  color: var(--deep-green); margin-bottom: 1.5rem;
}
.hero-description {
  font-size: 1.1rem; color: var(--charcoal); max-width: 700px;
  margin: 0 auto; opacity: 0.9; line-height: 1.8;
}
.pricing-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem; margin-bottom: 5rem;
}
.pricing-card {
  background: rgba(255, 253, 247, 0.9); backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 168, 94, 0.2); padding: 0; overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s; position: relative;
}
.pricing-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.pricing-card.featured { border: 2px solid var(--terracotta); transform: scale(1.05); }
.pricing-card.featured:hover { transform: scale(1.05) translateY(-5px); }
.badge {
  position: absolute; top: 1rem; right: 1rem; background: var(--terracotta);
  color: var(--cream); padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 1px; z-index: 10;
}
.card-header {
  background: linear-gradient(135deg, var(--deep-green) 0%, var(--sage) 100%);
  color: var(--cream); padding: 2.5rem 2rem; text-align: center;
}
.card-header h3 {
  font-family: var(--serif-display); font-size: 1.8rem; margin-bottom: 1rem; font-weight: 400;
}
.price { margin: 1rem 0; }
.currency { font-size: 1.5rem; vertical-align: top; opacity: 0.9; }
.amount { font-family: var(--serif-display); font-size: 4rem; font-weight: 600; line-height: 1; }
.duration { font-size: 1rem; opacity: 0.9; margin-top: 0.5rem; }
.card-body { padding: 2rem; }
.features { list-style: none; margin-bottom: 2rem; padding: 0; }
.features li { padding: 0.6rem 0; color: var(--charcoal); font-size: 0.95rem; line-height: 1.6; }
.package-details {
  background: var(--sand); padding: 1.5rem; margin-bottom: 2rem;
  font-size: 0.9rem; color: var(--charcoal); line-height: 1.6;
}
.package-details strong { color: var(--deep-green); display: block; margin-bottom: 0.5rem; }
.pricing-page .cta-primary {
  display: block; width: 100%; padding: 1rem 2rem; background: var(--terracotta);
  color: var(--cream); text-align: center; text-decoration: none;
  font-family: var(--sans); font-size: 1rem; font-weight: 500; letter-spacing: 0.5px;
  transition: background 0.3s; border: none; cursor: pointer;
}
.pricing-page .cta-primary:hover { background: var(--deep-rust); }
.what-happens-next {
  text-align: center; margin-bottom: 5rem; padding: 4rem 2rem;
  background: rgba(255, 253, 247, 0.6);
}
.what-happens-next h2 {
  font-family: var(--serif-display); font-size: 2.5rem;
  color: var(--deep-green); margin-bottom: 3rem;
}
.steps-timeline {
  display: flex; align-items: center; justify-content: center;
  flex-wrap: wrap; gap: 2rem; max-width: 900px; margin: 0 auto;
}
.step { text-align: center; flex: 1; min-width: 200px; }
.step-num {
  width: 50px; height: 50px; background: var(--deep-green); color: var(--cream);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; font-weight: 600; margin: 0 auto 1rem;
}
.step h4 { font-family: var(--serif-display); font-size: 1.3rem; color: var(--deep-green); margin-bottom: 0.5rem; }
.step p { color: var(--charcoal); opacity: 0.8; }
.arrow { font-size: 2rem; color: var(--terracotta); display: none; }
.faq-section { max-width: 800px; margin: 0 auto; }
.faq-section h2 {
  font-family: var(--serif-display); font-size: 2.5rem; color: var(--deep-green);
  text-align: center; margin-bottom: 3rem;
}
.faq-item {
  background: rgba(255, 253, 247, 0.9); padding: 2rem; margin-bottom: 1.5rem;
  border-left: 4px solid var(--terracotta);
}
.faq-item h4 { font-family: var(--serif-display); font-size: 1.3rem; color: var(--deep-green); margin-bottom: 0.8rem; }
.faq-item p { color: var(--charcoal); opacity: 0.9; line-height: 1.7; margin: 0; }
@media (min-width: 768px) {
  .arrow { display: block; }
  .steps-timeline { flex-wrap: nowrap; }
}
@media (max-width: 768px) {
  .pricing-hero h1 { font-size: 2.5rem; }
  .pricing-grid { grid-template-columns: 1fr; }
  .pricing-card.featured { transform: scale(1); }
  .pricing-card.featured:hover { transform: translateY(-5px); }
  .pricing-page { padding: 6rem 4% 2rem; }
}
</style>
