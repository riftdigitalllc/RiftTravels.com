# 🚀 COMPLETE RIFT TRAVELS JEKYLL SITE - READY TO UPLOAD

## ✅ What's In This Package:

Everything you need for a fully working travel blog:
- ✓ Complete Jekyll structure
- ✓ "Rift Travels" branding (no Wanderluxe)
- ✓ Logo support built-in
- ✓ 3 example blog posts
- ✓ Instagram section (3 photos per row)
- ✓ All styling working perfectly
- ✓ Responsive design

---

## 📋 HOW TO UPLOAD (5 Minutes):

### Step 1: Delete Everything in Your Repo

1. Go to: **github.com/riftdigitalllc/RiftTravels.com**
2. **Select all files** (click checkboxes)
3. **Scroll down** → Click "Delete files"
4. **Commit the deletion**

(This gives you a clean slate)

### Step 2: Upload All These Files

1. **Click "uploading an existing file"** or "Add file" → "Upload files"
2. **Drag ALL files and folders** from this package into GitHub
3. **Make sure you include:**
   - `_config.yml`
   - `_layouts/` folder
   - `_includes/` folder
   - `_posts/` folder
   - `assets/` folder
   - `index.html`
   - `Gemfile`
   - `CNAME` (if you have it)
   - Your `Logo.png` file

4. **Commit message:** "Fresh clean Jekyll site"
5. **Click "Commit changes"**

### Step 3: Wait 2-3 Minutes

GitHub Pages will rebuild your site automatically.

### Step 4: Check Your Site

Visit: **https://rifttravels.com**

It should look perfect! ✨

---

## 🎨 YOUR LOGO:

The site is ready for your Logo.png file:
1. Make sure it's named exactly: **`Logo.png`** (capital L)
2. Upload it to the root of your repo
3. It will appear in the top-left navigation automatically

---

## ✍️ HOW TO BLOG (Super Simple):

### To Write a New Post:

1. **Go to `_posts/` folder** on GitHub
2. **Click "Add file" → "Create new file"**
3. **Name it:** `2026-02-11-your-post-title.md`
4. **Add this at the top:**

```markdown
---
layout: post
title: "Your Post Title"
category: Europe
image: "https://images.unsplash.com/photo-XXXXX"
excerpt: "Short description"
---

Your blog post content here...

## Heading 1

Write your story...

## Heading 2

More content...
```

5. **Commit** → Your post appears on the homepage automatically!

---

## 📸 INSTAGRAM SECTION:

### Current Setup:
- Shows 6 placeholder photos
- All photos clickable → link to @rifttravels
- 3 photos per row on desktop, 2 on mobile

### To Update Photos:

**Option A - Manual (Simple):**
1. Post photo on Instagram
2. Right-click photo → "Open image in new tab"
3. Copy URL
4. Edit `index.html`
5. Replace one of the `https://images.unsplash.com/...` URLs
6. Commit

**Option B - Auto-Update (Recommended):**
1. Go to **behold.so** (free)
2. Connect @rifttravels Instagram
3. Get embed code
4. In `index.html`, find `<!-- Instagram Section -->`
5. Replace the Instagram grid with the Behold embed code
6. Commit

Now it auto-updates when you post!

---

## 🎨 CUSTOMIZATION:

### Change Colors:

Edit `assets/css/style.css` and find:

```css
:root {
    --sand: #F4EFE7;
    --terracotta: #D4846C;
    --deep-green: #3D5A4C;
    --gold: #C9A85E;
}
```

Change these hex codes to your brand colors!

### Update Navigation Links:

Edit `_config.yml` and find the `navigation:` section.

### Add Pages (About, Contact, etc.):

Create `about.md` in root folder:

```markdown
---
layout: default
title: About
---

# About Rift Travels

Your story here...
```

---

## ❓ TROUBLESHOOTING:

**Site shows 404?**
- Wait 3-5 minutes for GitHub Pages to build
- Check Settings → Pages → Make sure it's enabled

**Styling looks broken?**
- Make sure you uploaded the `assets/` folder with all CSS
- Clear your browser cache (Ctrl+Shift+R)

**Logo not showing?**
- Check filename is exactly `Logo.png` (capital L)
- Make sure it's in the root folder (not in a subfolder)

**Instagram section stacked vertically?**
- This means CSS didn't load
- Check that `assets/css/style.css` exists
- Try clearing browser cache

**Blog posts not appearing?**
- Check filename format: `YYYY-MM-DD-title.md`
- Make sure front matter (between `---`) is correct
- Date can't be in the future!

---

## 🎉 YOU'RE DONE!

Your professional travel blog is live!

**What works right now:**
✅ Beautiful design with your branding
✅ Blog posts auto-populate homepage
✅ Instagram section ready
✅ Fully responsive
✅ Fast and secure (GitHub Pages)
✅ 100% FREE hosting

**Next steps:**
1. Upload your logo
2. Write your first real blog post
3. Connect Instagram (behold.so)
4. Start traveling and blogging!

---

Need help? Check:
- README.md - Full documentation
- QUICKSTART.md - Quick reference guide
- Example posts in `_posts/` - See the format

Happy blogging! ✈️🌍
