---
layout: default
title: Custom Itinerary Request
permalink: /itinerary-request/
---

<section class="itinerary-request-page">
  <div class="request-hero">
    <div class="section-label">Bespoke Experiences</div>
    <h1>Custom Itinerary Request</h1>
    <p class="hero-description">
      Let's craft your perfect journey...
    </p>
  </div>

  <div class="how-it-works">
    <h2>How It Works</h2>
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <h3>Share Your Vision</h3>
        <p>Complete our detailed trip intake form with your travel preferences, budget, and must-see destinations.</p>
      </div>
      
      
      <div class="step-card">
        <div class="step-number">2</div>
        <h3>Secure Payment</h3>
        <p>Pay securely through our payment processor. Your itinerary creation begins immediately after payment.</p>
      </div>
      
      <div class="step-card">
        <div class="step-number">3</div>
        <h3>Receive Your Itinerary</h3>
        <p>Get your custom PDF itinerary by email, complete to your specifications.</p>
      </div>
    </div>
  </div>
 <div class="pricing-reminder">
    <h3>Pricing</h3>
    <div class="pricing-options">
      <div class="price-item">
        <strong>Weekend Escapes</strong>
        <span>From $50</span>
        <p>2-3 day itineraries</p>
      </div>
      <div class="price-item">
        <strong>Week-Long Adventures</strong>
        <span>From $75</span>
        <p>7-10 day itineraries</p>
      </div>
      <div class="price-item">
        <strong>Extended Expeditions</strong>
        <span>From $100</span>
        <p>Multi-week journeys</p>
      </div>
    </div>
  </div>
  <div class="form-section">
    <h2>Rift Travels Custom Itinerary Intake Form</h2>
    <p class="form-intro">Please take a few minutes to fill this form out first. You will review and confirm your details before payment. After payment, you will receive a polished PDF itinerary by email.</p>

    <!-- Tally Form Embed -->
    <div class="form-container">
      <iframe
        data-tally-src="https://tally.so/r/682zRO"
        loading="lazy"
        width="100%"
        height="1400"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Rift Travels Custom Itinerary Intake Form">
      </iframe>
    </div>

   
  </div>

 
</section>

<!-- Tally Embed Script -->
<script>
  var d=document,w="https://tally.so/widgets/embed.js",v=function(){
    if(typeof Tally !== "undefined"){Tally.loadEmbeds();}else{document.querySelectorAll("iframe[data-tally-src]").forEach(function(e){e.src=e.dataset.tallySrc;});}
  };
  if(document.querySelector('script[src="'+w+'"]')===null){
    var s=document.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);
  } else { v(); }
</script>

<style>
/* Itinerary Request Page Styles */
.itinerary-request-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 4% 4rem;
}

/* Page Background */
body {
  background: 
    radial-gradient(circle at 5% 15%, rgba(212, 132, 108, 0.12) 0%, transparent 45%),
    radial-gradient(circle at 95% 85%, rgba(61, 90, 76, 0.12) 0%, transparent 45%),
    var(--sand) !important;
}

.request-hero {
  text-align: center;
  margin-bottom: 6rem;
  padding-top: 2rem;
}

.request-hero .section-label {
  font-family: var(--sans);
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  font-weight: 500;
}

.request-hero h1 {
  font-family: var(--serif-display);
  font-size: 3.5rem;
  font-weight: 400;
  color: var(--deep-green);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--charcoal);
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.7;
}

/* How It Works Section */
.how-it-works {
  background: rgba(255, 253, 247, 0.85);
  backdrop-filter: blur(10px);
  padding: 2rem 3rem;
  border-radius: 0;
  margin-bottom: 5rem;
}

.how-it-works h2 {
  font-family: var(--serif-display);
  font-size: 2.5rem;
  color: var(--deep-green);
  text-align: center;
  margin-bottom: 3rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.step-card {
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--terracotta);
  color: var(--cream);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif-display);
  font-size: 2rem;
  font-weight: 600;
  margin: 0 auto 1.5rem;
}

.step-card h3 {
  font-family: var(--serif-display);
  font-size: 1.5rem;
  color: var(--deep-green);
  margin-bottom: 0.8rem;
}

.step-card p {
  font-size: 1rem;
  color: var(--charcoal);
  opacity: 0.8;
  line-height: 1.6;
}

/* Form Section */
.form-section {
  margin-bottom: 5rem;
}

.form-section h2 {
  font-family: var(--serif-display);
  font-size: 2.5rem;
  color: var(--deep-green);
  text-align: center;
  margin-bottom: 1rem;
}

.form-intro {
  text-align: center;
  font-size: 1.1rem;
  color: var(--charcoal);
  opacity: 0.8;
  margin-bottom: 3rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.form-container {
  background: rgba(255, 253, 247, 0.85);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border: 1px solid rgba(201, 168, 94, 0.2);
  margin-bottom: 2rem;
}
.affiliate-note {
  background: var(--sand);
  padding: 1.5rem;
  border-left: 4px solid var(--terracotta);
  font-size: 0.95rem;
  color: var(--charcoal);
  line-height: 1.6;
}

.affiliate-note strong {
  color: var(--deep-green);
}

/* Pricing Reminder */
.pricing-reminder {
  background: linear-gradient(135deg, var(--deep-green) 0%, var(--sage) 100%);
  color: var(--cream);
  padding: 4rem 3rem;
  border-radius: 0;
  margin-bottom: 4rem;
  text-align: center;
}

.pricing-reminder h3 {
  font-family: var(--serif-display);
  font-size: 2rem;
  margin-bottom: 2.5rem;
}

.pricing-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.price-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.price-item strong {
  display: block;
  font-family: var(--serif-display);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.price-item span {
  display: block;
  font-family: var(--sans);
  font-size: 1.8rem;
  color: var(--gold);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.price-item p {
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .request-hero h1 {
    font-size: 2.5rem;
  }
  
  .steps-grid,
  .pricing-options {
    grid-template-columns: 1fr;
  }
  
  .form-container {
    padding: 1rem;
  }
  
  .itinerary-request-page {
    padding: 6rem 4% 2rem;
  }
}
</style>
