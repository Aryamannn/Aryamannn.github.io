# 🚀 DEPLOYMENT GUIDE - Aryaman Mishra Portfolio

## ✅ What's Included

Your React portfolio is now complete with:
- ✅ All 13 photography images properly imported
- ✅ All 6 marketing graphics properly imported
- ✅ Profile photo
- ✅ Resume PDF (downloadable)
- ✅ Research PDF (viewable and downloadable)
- ✅ Fully responsive design
- ✅ Interactive lightbox gallery
- ✅ Optimized for Vercel deployment

---

## 🎯 FASTEST METHOD - Deploy to Vercel (2 Minutes)

### Step 1: Upload to GitHub

1. Create a new repository on GitHub (public or private)
2. In your local `aryaman-portfolio` folder, run:

```bash
git init
git add .
git commit -m "Initial commit - Portfolio ready"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Sign up/Login (you can use your GitHub account)
3. Click **"Add New Project"**
4. Click **"Import"** next to your repository
5. Vercel will auto-detect React settings
6. Click **"Deploy"**
7. Wait 1-2 minutes ⏳
8. 🎉 DONE! Your site is live!

**Your site will be at:** `https://your-project-name.vercel.app`

---

## 🔄 Alternative: Vercel CLI Method

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project folder
cd aryaman-portfolio

# Deploy (follow prompts)
vercel

# To deploy to production directly
vercel --prod
```

---

## 🧪 Test Locally First (Optional)

```bash
# Navigate to project folder
cd aryaman-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

Opens at `http://localhost:3000`

---

## 📝 Important Notes

### ✅ What Works Automatically:
- All images load correctly (imported as React modules)
- PDFs are accessible and downloadable
- Responsive design works on all devices
- Lightbox gallery functions perfectly
- Smooth scrolling navigation

### ⚠️ If Images Don't Load on Vercel:
This shouldn't happen with the current setup, but if it does:
1. Clear Vercel cache: Go to Project Settings → Clear Cache
2. Redeploy: Click "Redeploy" from deployments tab

### 🔧 Custom Domain (Optional):
1. In Vercel project settings
2. Go to "Domains"
3. Add your custom domain
4. Follow DNS instructions

---

## 📂 Project Structure

```
aryaman-portfolio/
├── public/
│   ├── documents/                    # ✅ PDFs here
│   │   ├── Aryaman_Mishra_Resume.pdf
│   │   └── Otter_Kitchens_Social_Media_Analysis.pdf
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/                   # ✅ 13 photos + profile
│   │   └── graphics/                 # ✅ 6 marketing graphics
│   ├── App.js                        # ✅ Main component
│   ├── App.css                       # ✅ All styles
│   └── index.js
├── vercel.json                       # ✅ Deployment config
├── package.json                      # ✅ Dependencies
└── README.md                         # ✅ Documentation
```

---

## 🎨 Customization (After Deployment)

### Change Content:
Edit `src/App.js` - all text is in there

### Change Colors:
Edit `src/App.css` - search for color codes:
- Primary blue: `#3b82f6`
- Background: `#0f172a`
- Text: `#e2e8f0`

### Add More Photos/Graphics:
1. Add images to `src/assets/images/` or `src/assets/graphics/`
2. Import in `App.js`
3. Add to `photoItems` or `graphicItems` arrays
4. Commit and push to GitHub
5. Vercel auto-deploys!

---

## 🆘 Troubleshooting

### Problem: Build fails on Vercel
**Solution:** Check build logs. Usually it's a missing dependency.
```bash
npm install
npm run build
```
If it builds locally, it will build on Vercel.

### Problem: PDFs don't load
**Solution:** Make sure PDFs are in `public/documents/` (not `src/`)

### Problem: Images don't show
**Solution:** This shouldn't happen with the current setup. All images are properly imported as React modules.

---

## 🎉 You're All Set!

Your portfolio is production-ready and optimized for Vercel. Just push to GitHub and deploy!

**Questions?**
- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev

---

**Built with:**
- React 19
- Modern CSS (Grid, Flexbox)
- Vercel Edge Network
- Zero configuration needed!
