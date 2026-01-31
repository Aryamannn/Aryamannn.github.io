# Aryaman Mishra - Marketing Portfolio

A professional portfolio showcasing marketing work, photography, graphics, and data analysis projects.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React and deploy!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
aryaman-portfolio/
├── public/
│   ├── documents/          # PDF files (Resume, Research)
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/         # Photography portfolio
│   │   └── graphics/       # Marketing graphics
│   ├── App.js              # Main React component
│   ├── App.css             # Styles
│   └── index.js
└── vercel.json             # Vercel deployment config
```

## 🎨 Features

- ✅ Responsive design for all devices
- ✅ Interactive lightbox gallery
- ✅ Smooth scrolling navigation
- ✅ Photography portfolio section
- ✅ Marketing graphics showcase
- ✅ Research document viewer
- ✅ Downloadable resume
- ✅ Fast loading with optimized images

## 🔧 Technologies Used

- React 18
- CSS3 with Grid & Flexbox
- Google Fonts (Inter)
- Vercel for deployment

## 📱 Sections

1. **Hero** - Introduction and profile
2. **Skills** - Technical and creative expertise
3. **Photography** - Portfolio of photos from SF, NYC, and more
4. **Graphics** - Marketing content for Otter Kitchens
5. **Research** - Social media analysis report

## 🌐 Deployment Notes

- All images are imported as modules for proper webpack bundling
- PDFs are in the `public/documents` folder for direct access
- The app is fully optimized for Vercel's edge network
- Build time: ~1-2 minutes
- Zero configuration needed on Vercel

## 📧 Contact

**Aryaman Mishra**
- Email: aryaman.mmishra@gmail.com

---

Built with ❤️ using React and deployed on Vercel
