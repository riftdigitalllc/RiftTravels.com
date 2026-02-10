# Wanderluxe Travel Blog - Jekyll Setup Guide

## 🎉 What You're Getting

A complete Jekyll-powered travel blog that:
- ✅ Uses your beautiful HTML design
- ✅ Lets you write blog posts in simple Markdown files
- ✅ Automatically updates your homepage with new posts
- ✅ Works FREE on GitHub Pages
- ✅ Ready for monetization (ads, affiliates, itineraries)

---

## 📦 What's in This Package

```
jekyll-travel-blog/
├── _config.yml           # Site settings (edit this!)
├── _layouts/             # Page templates
│   ├── default.html     # Main layout
│   ├── post.html        # Blog post template
│   └── home.html        # Homepage template
├── _includes/           # Reusable components
│   ├── navigation.html  # Navigation bar
│   ├── footer.html      # Footer
│   └── newsletter.html  # Newsletter signup
├── _posts/              # YOUR BLOG POSTS GO HERE
│   ├── 2026-02-10-hidden-courtyards-paris.md
│   ├── 2026-02-12-kyoto-temple-trail.md
│   └── 2026-02-15-patagonia-wild-edge.md
├── assets/
│   ├── css/
│   │   └── style.css    # All your beautiful styling
│   └── js/
│       └── main.js      # Animations and interactions
├── images/              # Put your images here
├── index.html           # Homepage
└── README.md            # This file!
```

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Upload to GitHub

1. **Go to your RiftTravels.com repository** on GitHub
2. **Delete the current `index.html`** file (we're replacing it)
3. **Upload all files from this folder** (drag & drop into GitHub)
4. **Wait 1-2 minutes** for GitHub Pages to rebuild
5. **Visit your site** - it should look exactly the same!

### Step 2: Configure Your Site

Edit `_config.yml` and update:

```yaml
title: "Your Blog Name"
description: "Your tagline"
email: your-email@example.com
url: "https://riftdigitalllc.github.io"
baseurl: "/RiftTravels.com"
```

---

## ✍️ How to Write a New Blog Post

### The Easy Way:

1. **Create a new file** in the `_posts/` folder
2. **Name it**: `YYYY-MM-DD-your-post-title.md`
   - Example: `2026-02-20-amazing-tokyo-food-tour.md`

3. **Add this at the top**:
```markdown
---
layout: post
title: "Amazing Tokyo Food Tour"
category: Asia
image: "https://images.unsplash.com/photo-XXXXX.jpg"
excerpt: "Discovering the best ramen and sushi spots in Tokyo"
affiliate: true  # Set to true if you have affiliate links
---
```

4. **Write your post in Markdown**:
```markdown
If you only have 24 hours in Tokyo, spend it eating! Here are my top 5 spots...

## 1. Tsukiji Fish Market

Get there at 5am for the freshest sushi. I recommend [Sushi Dai](https://booking.com/restaurant?aid=YOUR_ID) - the tuna melts in your mouth!

![Sushi at Tsukiji](/images/tsukiji-sushi.jpg)

## 2. Ramen Alley in Shibuya

This hidden street has 8 amazing ramen shops. My favorite is...

[Book a food tour here](https://getyourguide.com/tokyo?partner_id=YOUR_ID) to see them all!
```

5. **Commit to GitHub**
6. **Done!** Your post appears on the homepage automatically

---

## 📸 Adding Images

### Option 1: Upload to GitHub
1. Put images in the `/images/` folder
2. Reference them: `![Alt text](/images/your-photo.jpg)`

### Option 2: Use External URLs
1. Upload to Unsplash, Imgur, or your own host
2. Use the full URL: `![Alt text](https://example.com/image.jpg)`

---

## 💰 Monetization Setup

### 1. Google AdSense

**Step 1:** Sign up at google.com/adsense

**Step 2:** Get your publisher ID (looks like `ca-pub-1234567890123456`)

**Step 3:** Add to `_config.yml`:
```yaml
adsense_client: "ca-pub-YOUR-ID-HERE"
```

**Step 4:** Ads will automatically appear in the designated ad zones!

---

### 2. Affiliate Links

Just use your special affiliate URLs in blog posts:

```markdown
I stayed at [this amazing hotel](https://booking.com/hotel?aid=YOUR_AFFILIATE_ID) in Paris!

Check out [this tour](https://getyourguide.com/activity?partner_id=YOUR_ID) - it was incredible!
```

**Top Travel Affiliate Programs:**
- **Booking.com**: booking.com/affiliate
- **GetYourGuide**: partner.getyourguide.com
- **Viator**: viator.com/affiliate
- **Amazon Associates**: affiliate-program.amazon.com
- **Airbnb**: airbnb.com/associates

---

### 3. Sell Custom Itineraries

**Option A: Gumroad (Easiest)**

1. Create products at gumroad.com
2. Add buy buttons to your site:

Edit `index.html` and find the itinerary section, update the links:
```html
<a href="https://gumroad.com/l/your-product" class="cta-primary">
  Buy Paris Itinerary - $150
</a>
```

**Option B: Stripe Payment Links**

1. Create payment links at stripe.com
2. Replace the CTA links with your Stripe links

---

### 4. Newsletter (Email Marketing)

**Using ConvertKit (Recommended):**

1. Sign up at convertkit.com (free up to 1,000 subscribers)
2. Create a form
3. Get your form ID
4. Add to `_config.yml`:
```yaml
convertkit_form_id: "YOUR_FORM_ID"
```

5. Newsletter signup form works automatically!

**Alternatives:**
- Mailchimp: mailchimp.com
- Substack: substack.com (easiest, but less customization)

---

## 📝 Markdown Cheat Sheet

```markdown
# H1 Heading
## H2 Heading
### H3 Heading

**Bold text**
*Italic text*

[Link text](https://example.com)

![Image alt text](/path/to/image.jpg)

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

> Blockquote

---

`inline code`
```

---

## 🎨 Customization

### Change Colors

Edit `assets/css/style.css` and modify the CSS variables:

```css
:root {
    --sand: #F4EFE7;        /* Light background */
    --terracotta: #D4846C;   /* Primary accent */
    --deep-green: #3D5A4C;   /* Dark accent */
    --gold: #C9A85E;         /* Highlight color */
    /* Change these to your brand colors! */
}
```

### Change Fonts

Edit `_layouts/default.html` and update the Google Fonts link:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONT+HERE&display=swap" rel="stylesheet">
```

Then update the CSS variables in `style.css`.

---

## 🔧 Advanced: Custom Pages

### Create an About Page

1. Create `about.md` in the root folder:

```markdown
---
layout: default
title: About
permalink: /about/
---

# About Wanderluxe

Hi! I'm [Your Name] and I love traveling...

[Your story here]
```

2. It automatically appears at `/about/`

### Create a Contact Page

Same process - create `contact.md`

---

## 📊 Analytics

### Google Analytics

1. Create account at analytics.google.com
2. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
3. Add to `_config.yml`:
```yaml
google_analytics: "G-YOUR-ID-HERE"
```

4. Tracking works automatically!

---

## 🐛 Troubleshooting

### Site not updating after pushing to GitHub?
- Wait 2-3 minutes for GitHub Pages to rebuild
- Check Settings → Pages to see if there are build errors
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Images not showing?
- Make sure the path is correct: `/images/filename.jpg`
- Or use full URL: `https://example.com/image.jpg`

### Post not appearing on homepage?
- Check that filename is correct: `YYYY-MM-DD-title.md`
- Make sure the front matter (between `---`) is valid
- Date must not be in the future!

### Styling looks broken?
- Make sure `style.css` uploaded correctly
- Check browser console for errors (F12)

---

## 📚 Resources

**Learn Markdown:**
- https://www.markdownguide.org/basic-syntax/

**Jekyll Documentation:**
- https://jekyllrb.com/docs/

**GitHub Pages Help:**
- https://docs.github.com/en/pages

**Travel Blog Monetization:**
- Nomadic Matt's blogging course
- Travel Blog Success Facebook group
- ProBlogger travel blogging guides

---

## ✅ Post-Launch Checklist

- [ ] Update `_config.yml` with your info
- [ ] Write your first 3 blog posts
- [ ] Sign up for Google Analytics
- [ ] Apply for Google AdSense
- [ ] Join 3-5 affiliate programs
- [ ] Set up newsletter (ConvertKit/Mailchimp)
- [ ] Create Gumroad account for itineraries
- [ ] Add social media links to footer
- [ ] Create About and Contact pages
- [ ] Submit sitemap to Google Search Console

---

## 🎯 Content Strategy Tips

### Blog Post Ideas:
1. Destination guides ("3 Days in Paris")
2. Budget travel tips ("Europe for $50/day")
3. Packing lists ("Ultimate Backpacking Gear")
4. Food guides ("Best Street Food in Bangkok")
5. Travel fails and lessons learned
6. Photo essays
7. Hotel/hostel reviews
8. Transportation tips
9. Cultural experiences
10. Solo travel stories

### SEO Tips:
- Use long-tail keywords in titles ("Budget 3-Day Tokyo Itinerary")
- Include keywords naturally in content
- Add alt text to images
- Internal linking between posts
- 1500+ words for destination guides
- Answer common questions (People Also Ask)

### Posting Schedule:
- Start with 1-2 posts per week
- Consistency > frequency
- Batch write posts in advance
- Repurpose content (blog → Instagram → Pinterest → email)

---

## 💡 Pro Tips

1. **Pinterest is HUGE for travel blogs** - create pins for every post
2. **Email list is your #1 asset** - grow it from day one
3. **Focus on one region first** - become the expert
4. **Long-form content ranks better** - aim for 1500-3000 words
5. **Update old posts** - keeps them ranking
6. **Guest post on other blogs** - builds backlinks
7. **Join travel blogger communities** - learn from others
8. **Track what works** - double down on successful topics

---

## 🆘 Need Help?

- **GitHub Issues**: github.com/your-repo/issues
- **Jekyll Talk Forum**: talk.jekyllrb.com
- **Travel Blog Community**: Facebook groups for travel bloggers

---

## 🎉 You're All Set!

Your beautiful travel blog is now powered by Jekyll and ready to grow!

**Next steps:**
1. Write your first post
2. Set up monetization
3. Start promoting on social media
4. Build your email list

Happy blogging! ✈️🌍

---

*Created by Claude for RiftTravels.com*
*Last updated: February 2026*
