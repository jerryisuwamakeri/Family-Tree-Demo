# Vercel Deployment Guide

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Configure Build Settings**
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `public`
   - **Install Command:** `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Project Structure for Vercel

```
Famtree/
├── public/               # ← Vercel serves from here
│   ├── index.html
│   ├── auth.html
│   ├── dashboard.html
│   ├── add_member.html
│   ├── tree.html
│   ├── calendar.html
│   ├── search.html
│   ├── profile.html
│   ├── manage_codes.html
│   ├── *.js             # Compiled TypeScript
│   └── assets/          # Images
│       ├── Imam Abdullahi Maliki.jpeg
│       ├── Ambassador Lamidi Alabi Maliki.jpeg
│       ├── Memunat Wuraola MALIKI aka Iya Ilawe.jpeg
│       └── MUSTAPHA ADEDOKUN MALIKI.jpg
│
├── src/                 # TypeScript source (not deployed)
├── dist/                # Compiled output (temporary)
├── vercel.json          # Vercel configuration
└── package.json         # Build configuration
```

## How It Works

### Build Process
1. **TypeScript Compilation:** `tsc` compiles `src/*.ts` → `dist/*.js`
2. **Copy JS Files:** `build.js` copies compiled JS from `dist/` → `public/`
3. **Copy HTML/Assets:** `scripts/copy-html.js` copies HTML and assets → `public/`

### Vercel Configuration
The `vercel.json` file configures:
- **Static hosting** from `public/` directory
- **Clean URLs** (e.g., `/dashboard` instead of `/dashboard.html`)
- **No trailing slashes**

### What Gets Deployed
✅ All HTML pages  
✅ Compiled JavaScript files  
✅ Assets (images)  
✅ Static file serving  

❌ TypeScript source files  
❌ node_modules  
❌ Build scripts  

## Environment Variables

This project uses **localStorage** for demo purposes. For production, you may want to add:

- `VITE_API_URL` - Backend API endpoint
- `VITE_AUTH_DOMAIN` - Authentication domain

Set these in Vercel Dashboard → Settings → Environment Variables

## Custom Domain

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Ensure all dependencies are in `package.json`

### 404 Errors
- Verify files exist in `public/` directory
- Check that paths are relative (no leading `/`)
- Ensure `vercel.json` has `"cleanUrls": true`

### Assets Not Loading
- Check that `assets/` directory is in `public/assets/`
- Verify image paths in HTML use `assets/filename.jpeg`
- Check browser console for 404 errors

### Theme Not Persisting
- localStorage is browser-specific
- Theme toggle requires client-side JavaScript
- Verify `theme.js` is loaded in HTML

## Local Testing

Test the production build locally:

```bash
# Build the project
npm run build

# Serve the public directory
npx serve public

# Open http://localhost:3000
```

## Continuous Deployment

Vercel automatically deploys:
- **Production:** Commits to `main` branch
- **Preview:** Pull requests and other branches

Every push triggers a new deployment with a unique URL.

## Performance

### Optimizations Applied
✅ Static file hosting (no server processing)  
✅ Vercel Edge Network (global CDN)  
✅ Automatic image optimization  
✅ HTTP/2 and Brotli compression  

### Further Optimizations
- [ ] Minify JavaScript files
- [ ] Optimize/compress images
- [ ] Add service worker for offline support
- [ ] Implement lazy loading for images

## Security

### Current Setup
- Static site (no backend vulnerabilities)
- localStorage authentication (demo only)
- No sensitive data in repository

### Production Recommendations
- Use proper authentication (Auth0, Firebase Auth)
- Implement HTTPS (automatic with Vercel)
- Add Content Security Policy headers
- Use environment variables for API keys

## Monitoring

Access deployment analytics in Vercel Dashboard:
- Page views and traffic
- Performance metrics
- Error tracking
- Build logs

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **Community:** https://github.com/vercel/vercel/discussions

---

**Ready to deploy!** 🚀

Your Imam Abdullahi Maliki Family Tree application is fully configured for Vercel deployment.
