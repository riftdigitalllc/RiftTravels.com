---
layout: default
title: Custom Itinerary Request
permalink: /itinerary-request/
---

<section class="rt_wrap">
  <header class="rt_hero">
    <h1>Custom Itinerary Request</h1>
    <p>
      Fill this out first. You will review your details, then pay. After payment, you will receive a polished PDF itinerary by email.
    </p>
  </header>

  <section class="rt_card">
    <h2>How it works</h2>
    <ol class="rt_steps">
      <li>Complete the trip intake form</li>
      <li>Review and confirm your details</li>
      <li>Pay securely</li>
      <li>Receive your itinerary PDF by email</li>
    </ol>
  </section>

  <section class="rt_card">
    <h2>Trip intake form</h2>

    <!-- Replace the data tally src with your Tally embed url -->
    <iframe
      data-tally-src="https://tally.so/r/YOUR_TALLY_ID"
      loading="lazy"
      width="100%"
      height="1400"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      title="Rift Travels Itinerary Intake">
    </iframe>

    <p class="rt_note">
      By submitting, you understand the itinerary may include affiliate links that support Rift Travels at no extra cost to you.
    </p>
  </section>
</section>

<script>
  var d=document,w="https://tally.so/widgets/embed.js",v=function(){
    if(typeof Tally !== "undefined"){Tally.loadEmbeds();}else{document.querySelectorAll("iframe[data-tally-src]").forEach(function(e){e.src=e.dataset.tallySrc;});}
  };
  if(document.querySelector('script[src="'+w+'"]')===null){
    var s=document.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);
  } else { v(); }
</script>

<style>
  .rt_wrap{max-width:980px;margin:0 auto;padding:28px 18px;}
  .rt_hero{margin-bottom:18px;}
  .rt_hero h1{font-size:40px;line-height:1.1;margin:0 0 10px;}
  .rt_hero p{margin:0;color:#6b7280;font-size:16px;max-width:70ch;}
  .rt_card{border:1px solid #e5e7eb;border-radius:16px;padding:16px 16px;margin:14px 0;background:#fff;}
  .rt_card h2{margin:0 0 10px;font-size:18px;}
  .rt_steps{margin:0;padding-left:18px;color:#111827;}
  .rt_steps li{margin:8px 0;}
  .rt_note{margin-top:12px;color:#6b7280;font-size:12px;}
</style>
