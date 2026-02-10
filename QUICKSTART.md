# ⚡ QUICK START - Get Blogging in 5 Minutes

## What This Does

Converts your static HTML site into a Jekyll blog so you can:
- Write posts in simple Markdown files
- Never touch HTML again
- Posts automatically appear on your homepage

---

## 🚀 Setup (Do This Once)

### 1. Download This Folder

You have a folder called `jekyll-travel-blog/` with all the files.

### 2. Upload to GitHub

**Option A - Simple Upload:**
1. Go to your GitHub repository: `github.com/riftdigitalllc/RiftTravels.com`
2. Click "Add file" → "Upload files"
3. Drag ALL files from `jekyll-travel-blog/` folder
4. Write commit message: "Convert to Jekyll"
5. Click "Commit changes"
6. Wait 2 minutes
7. Visit your site - should look the same!

**Option B - Git Command Line:**
```bash
cd jekyll-travel-blog
git init
git add .
git commit -m "Initial Jekyll setup"
git remote add origin https://github.com/riftdigitalllc/RiftTravels.com.git
git push -u origin main --force
```

### 3. Enable GitHub Pages

1. Go to your repo Settings
2. Click "Pages" in sidebar
3. Source → "main" branch
4. Click Save
5. Done!

---

## ✍️ Write Your First Blog Post (2 Minutes)

### Step 1: Create the File

In `_posts/` folder, create a new file named:
```
2026-02-20-my-amazing-trip-to-bali.md
```

Format is always: `YEAR-MONTH-DAY-title-with-dashes.md`

### Step 2: Add Front Matter

At the very top of the file, paste this:

```markdown
---
layout: post
title: "My Amazing Trip to Bali"
category: Asia
image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
excerpt: "Discovering hidden beaches and temples in Indonesia"
---
```

### Step 3: Write Your Post

After the `---`, write normally in Markdown:

```markdown
Bali exceeded all my expectations! Here's what I did:

## Day 1: Ubud

We started in Ubud, the cultural heart of Bali. The rice terraces were stunning!

![Tegallalang Rice Terraces](https://your-image-url.jpg)

## Day 2: Beaches

The beaches in Bali are incredible. My favorites were:

- Nusa Dua (calm, perfect for swimming)
- Uluwatu (dramatic cliffs)
- Seminyak (great for sunsets)

## Where I Stayed

I stayed at [this amazing villa](https://booking.com/bali?aid=YOUR_ID) - highly recommend!

## Tips for Your Trip

1. Rent a scooter - it's the best way to get around
2. Try nasi goreng everywhere
3. Watch sunset at Tanah Lot temple
4. Haggle at markets (but be respectful)

Would I go back? Absolutely! Bali is magical.
```

### Step 4: Publish

1. Save the file
2. Commit to GitHub (upload the new file or push via Git)
3. Wait 1-2 minutes
4. **Your post is live!** It appears on the homepage automatically

---

## 🎨 Add Images

### Option 1: Use Free Stock Photos
- Unsplash.com - grab any URL
- Pexels.com - free travel photos

Paste the URL directly:
```markdown
![Beach sunset](https://images.unsplash.com/photo-XXXXX)
```

### Option 2: Upload Your Own
1. Put images in `/images/` folder on GitHub
2. Reference them:
```markdown
![My photo](/images/bali-sunset.jpg)
```

---

## 💰 Add Affiliate Links

Just use your special URLs in posts:

```markdown
I booked my hotel through [Booking.com](https://booking.com?aid=YOUR_AFFILIATE_ID).

This [food tour](https://getyourguide.com/bali?partner_id=YOUR_ID) was amazing!
```

When people click and buy, you earn commission!

---

## 📧 Newsletter Signups

1. Sign up at convertkit.com (free)
2. Create a form
3. Get your form ID
4. Edit `_config.yml`:
```yaml
convertkit_form_id: "1234567"  # Your actual ID
```

Newsletter signup works automatically on every page!

---

## 🎯 Markdown Basics

```markdown
# Big Heading
## Medium Heading
### Small Heading

**Bold text**
*Italic text*

[Link text](https://example.com)
![Image](https://image-url.jpg)

- Bullet point
- Another point

1. Numbered list
2. Another item
```

That's it! Super simple.

---

## ❓ Common Questions

**Q: How do I change the homepage text?**
A: Edit `index.html` - it's the same HTML you had before!

**Q: How do I add pages (About, Contact)?**
A: Create `about.md` in the root folder with:
```markdown
---
layout: default
title: About
---

# About Me

Your story here...
```

**Q: Can I edit old posts?**
A: Yes! Just edit the `.md` file and commit to GitHub.

**Q: How do I delete a post?**
A: Delete the `.md` file from `_posts/` folder.

**Q: Posts not showing up?**
A: Check the filename date - if it's in the future, it won't appear!

**Q: How do I preview before publishing?**
A: Either push to GitHub (you can always edit), or install Jekyll locally.

---

## 🎉 You're Done!

That's literally it. You can now:
- ✅ Write blog posts in simple Markdown
- ✅ Never touch HTML again
- ✅ Focus on content, not code

**Your workflow from now on:**
1. Create new file in `_posts/`
2. Write your story
3. Commit to GitHub
4. Post goes live automatically

Happy blogging! 🌍✈️
