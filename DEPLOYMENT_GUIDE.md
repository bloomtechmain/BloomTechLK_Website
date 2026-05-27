# 🚀 Railway + Cloudflare Pages Deployment Guide

Complete step-by-step guide to deploy BloomTech.lk with Railway backend and Cloudflare Pages frontend.

---

## 📊 Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    USER'S BROWSER                       │
└──────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
┌───────────────────┐        ┌────────────────────┐
│ CLOUDFLARE PAGES  │        │  RAILWAY.APP       │
│ (Static Frontend) │◄──────►│  (Backend API)     │
│                   │  API   │                    │
│ - HTML/CSS/JS     │ Calls  │ - Express Server   │
│ - Images/Videos   │        │ - PostgreSQL DB    │
│ - Pre-rendered    │        │ - Authentication   │
└───────────────────┘        └────────────────────┘
```

**What goes where:**
- 🎨 **Cloudflare Pages**: All frontend code, images, videos (static files)
- 🔧 **Railway**: Backend API, database, authentication

**Images & Videos**: Served directly from Cloudflare (zero backend involvement) ✅

---

## 🎯 PART 1: Railway Backend Deployment

### Step 1.1: Create Railway Account

1. Go to **https://railway.app**
2. Click **"Login"** → Sign in with GitHub
3. Authorize Railway to access your GitHub repositories
4. You'll get **$5 free credit/month** (no credit card required initially)

### Step 1.2: Create New Project from GitHub

1. From Railway Dashboard, click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your repository: **`BloomTechLK`**
4. Railway will create the project and attempt auto-deploy

### Step 1.3: Configure Backend Service

1. **Stop the auto-deployment** (it will fail because root directory is wrong)
   - Click the service → Settings → Delete the service
   
2. **Add service again with correct config:**
   - Click **"+ New"** → **"GitHub Repo"**
   - Select `BloomTechLK` again
   - This time, go to **Settings** immediately

3. **Set Root Directory:**
   - In Service Settings → **"Source"** section
   - Set **Root Directory**: `backend`
   - Click **"Save"**

4. **Configure Build Settings:**
   - Build Command: `npm run build` (auto-detected)
   - Start Command: `npm run start` (auto-detected)
   - These should be set automatically from package.json

### Step 1.4: Add PostgreSQL Database

1. In your Railway project, click **"+ New"**
2. Select **"Database"** → **"PostgreSQL"**
3. Railway will create and provision the database
4. The `DATABASE_URL` environment variable will be auto-added to your backend service

### Step 1.5: Configure Environment Variables

1. Go to your **backend service** (not the database)
2. Click the **"Variables"** tab
3. Add these variables (click "+ New Variable" for each):

```env
DATABASE_URL          (Already auto-filled by Railway - don't change)
JWT_SECRET            bloomtech_secret_key_2026_enterprise_integrity
GOOGLE_CLIENT_ID      664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com
PORT                  5000
NODE_ENV              production
```

**How to add:**
- Click **"+ New Variable"**
- Enter variable name in left field
- Enter value in right field
- Click outside to save
- Repeat for all variables

### Step 1.6: Deploy Backend

1. After adding all environment variables, Railway will **auto-redeploy**
2. Watch the **"Deployments"** tab for build logs
3. Wait for deployment to show **"SUCCESS"** (green checkmark)
4. Deployment takes ~2-3 minutes

### Step 1.7: Get Your Railway Backend URL

1. Go to your backend service → **"Settings"** tab
2. Scroll to **"Networking"** section
3. Click **"Generate Domain"**
4. Railway will give you a URL like: `https://bloomtechlk-production.up.railway.app`

**🚨 IMPORTANT: Copy this URL!** You'll need it for Cloudflare configuration.

### Step 1.8: Initialize Database

After first successful deployment, you need to initialize the database tables.

**Option A: Use Railway CLI (Recommended)**

```bash
# Install Railway CLI globally
npm install -g @railway/cli

# Login to Railway
railway login

# Navigate to backend folder
cd backend

# Link to your project
railway link

# Run database initialization
railway run npm run init-db
```

**Option B: Use Railway Dashboard**

1. Go to backend service → **"Settings"**
2. Find **"Deploy"** section
3. Under **"Custom Start Command"** temporarily add: `npm run init-db && npm run start`
4. Force a redeploy
5. After deployment succeeds, change back to: `npm run start`

**Verify database initialization:**
- Check deployment logs for "Database initialized successfully"
- Or connect to database and verify tables exist

### Step 1.9: Test Backend API

Open your Railway URL in a browser:
```
https://your-app-name.up.railway.app
```

You should see:
```
BloomTechUS API is running...
```

**Test API endpoints:**
```bash
# Health check
curl https://your-app-name.up.railway.app

# Portfolio endpoint (should return empty array or sample data)
curl https://your-app-name.up.railway.app/api/portfolio
```

If you see responses, **backend is working!** ✅

---

## 🌐 PART 2: Cloudflare Pages Frontend Deployment

### Step 2.1: Configure Cloudflare Environment Variables

1. Go to **Cloudflare Dashboard** → **Pages**
2. Select your **BloomTech project**
3. Click **"Settings"** → **"Environment variables"**

**Add Production Variables:**

Click **"Production"** tab, then add these variables:

| Variable Name | Value |
|---------------|-------|
| `NODE_VERSION` | `18` |
| `VITE_API_URL` | `https://your-app-name.up.railway.app` ← **Use your Railway URL!** |
| `VITE_GOOGLE_CLIENT_ID` | `664605079979-g31lo74cfiue4tlict3do3cpi24ikcv.apps.googleusercontent.com` |

**Add Preview Variables (same values):**

Click **"Preview"** tab and add the same three variables with the same values.

**How to add each variable:**
1. Click **"Add variable"**
2. Enter variable name (e.g., `VITE_API_URL`)
3. Enter value (e.g., your Railway URL)
4. Click **"Save"**

### Step 2.2: Verify Build Configuration

Go to **Settings** → **"Build & deployments"** and confirm:

| Setting | Value |
|---------|-------|
| **Framework preset** | `None` (or Vite) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist/client` |
| **Root directory** | `frontend` |

These should already be correct from your existing setup!

### Step 2.3: Trigger New Deployment

Since you've updated environment variables, you need to redeploy:

**Option A: Push to GitHub**
```bash
git add .
git commit -m "Configure Railway backend URL"
git push origin main
```

**Option B: Manual Redeploy**
1. Go to Cloudflare Pages → Your project
2. Click **"Deployments"**
3. Find latest deployment
4. Click **"..."** → **"Retry deployment"**

### Step 2.4: Monitor Build

1. Click on the deployment to see build logs
2. Wait for:
   - ✅ Build starts
   - ✅ Dependencies installed
   - ✅ Vite build completes
   - ✅ Pre-rendering: Success 21/21 routes
   - ✅ Deployment successful

Build takes ~3-5 minutes.

### Step 2.5: Test Frontend Deployment

1. **Visit your site**: `https://bloomtechusa.com` (or your Cloudflare domain)

2. **Check homepage:**
   - Videos load and play ✅
   - Images display correctly ✅
   - Navigation works ✅

3. **View page source** (Right-click → View Source):
   - Should see full HTML content (not empty `<div id="root">`)
   - Pre-rendered content visible ✅

4. **Test service pages:**
   - Click any service link
   - Images should load ✅
   - Content should display ✅

---

## 🧪 PART 3: Test Backend Integration

Now test that frontend properly connects to Railway backend.

### Step 3.1: Test User Registration

1. Go to your site → **"Login"** page
2. Click **"Register Hub"**
3. Fill out registration form:
   - Name: Test User
   - Email: test@example.com
   - Password: testpassword123
4. Click **"Create Account"**

**Expected result:**
- Registration succeeds
- You see success message
- Can navigate to Login page

**If it fails:**
- Check browser console (F12) for errors
- Check Network tab for API request to Railway
- Verify `VITE_API_URL` is set correctly in Cloudflare

### Step 3.2: Test User Login

1. Go to **"Login"** page
2. Enter credentials from registration
3. Click **"Sign In Now"**

**Expected result:**
- Login succeeds
- Redirected to homepage
- User menu shows your name

### Step 3.3: Test Expert Form Submission

1. Navigate to any **Service Details** page
2. Click **"Talk to an Expert"** button
3. Fill out the form:
   - Name: Test Expert Request
   - Email: expert@test.com
   - Message: Testing expert form
4. Click **"Send Inquiry"**

**Expected result:**
- Form submits successfully
- Shows "Request Received!" message
- Modal closes after 3 seconds

**If it fails:**
- Check browser console for errors
- Check Network tab - should see POST to `/api/expert/submit`
- Verify Railway backend is responding

### Step 3.4: Test Portfolio Data

1. Go to **Portfolio** page
2. Check if projects load

**Expected behavior:**
- Even if backend is down, portfolio shows fallback data ✅
- If backend is up, it may load from database or fallback

---

## ✅ PART 4: Final Verification Checklist

Go through this checklist to confirm everything works:

### Frontend (Cloudflare Pages)
- [ ] Homepage loads with hero videos playing
- [ ] All navigation links work
- [ ] Service pages display correctly
- [ ] Images load across all pages
- [ ] Portfolio page displays projects
- [ ] Company page loads
- [ ] Contact page loads
- [ ] Mobile responsive (test on phone)
- [ ] View Source shows pre-rendered HTML
- [ ] Page load time < 2 seconds

### Backend (Railway)
- [ ] Railway backend URL responds
- [ ] Database is initialized
- [ ] Registration works
- [ ] Login works
- [ ] Google OAuth works (optional)
- [ ] Expert form submissions work
- [ ] API endpoints return proper responses
- [ ] No CORS errors in browser console

### Integration
- [ ] Frontend successfully calls Railway backend
- [ ] Authentication persists across page reloads
- [ ] No console errors
- [ ] Network tab shows successful API calls
- [ ] Forms submit and return success messages

### SEO & Performance
- [ ] View Source shows full HTML content
- [ ] Meta tags present in page source
- [ ] Sitemap.xml accessible
- [ ] Robots.txt accessible
- [ ] Page loads quickly
- [ ] Images optimized and load fast

---

## 🐛 PART 5: Troubleshooting

### Issue: Frontend can't connect to backend (CORS errors)

**Symptoms:**
- Browser console shows CORS errors
- API requests fail with "Access-Control-Allow-Origin" errors

**Solution:**
1. Check `backend/index.ts` CORS configuration includes your Cloudflare domain
2. Verify Railway backend is deployed and running
3. Check `VITE_API_URL` in Cloudflare environment variables

**Fix CORS in Railway:**
```typescript
// backend/index.ts should have:
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://bloomtechusa.com',      // Your domain
    'https://*.pages.dev'             // Cloudflare previews
  ],
  credentials: true
}));
```

### Issue: Railway build fails

**Common causes:**
1. **Wrong root directory** → Set to `backend`
2. **Missing dependencies** → Check package.json
3. **TypeScript errors** → Fix in code before deploying
4. **Environment variables missing** → Add all required vars

**Check build logs:**
- Railway Dashboard → Your service → Deployments → Click on failed deployment
- Read error messages
- Google specific errors

### Issue: Database connection fails

**Symptoms:**
- API returns 500 errors
- Logs show "Cannot connect to database"

**Solutions:**
1. Verify PostgreSQL database is running in Railway
2. Check `DATABASE_URL` is set in backend environment variables
3. Ensure `init-db` script has run successfully
4. Check Railway database status (should show "Active")

### Issue: Cloudflare build fails

**Common causes:**
1. **Wrong output directory** → Should be `dist/client`
2. **Node version mismatch** → Set `NODE_VERSION=18`
3. **Missing environment variables** → Add `VITE_API_URL`, etc.
4. **Build command wrong** → Should be `npm run build`

**Check build logs:**
- Cloudflare Pages → Your project → Deployments → Click on failed build
- Look for specific error messages
- Verify all environment variables are set

### Issue: Images/Videos don't load

**Check:**
1. Verify files exist in `frontend/src/assets/` or `frontend/public/`
2. Check browser Network tab for 404 errors
3. Verify Vite build includes assets
4. Check file paths in code are correct

**Assets location:**
- Videos: `frontend/src/assets/*.mp4` → Bundled by Vite
- Images: `frontend/public/images/*.jpg` → Copied to dist/client

### Issue: Pre-rendering fails

**Symptoms:**
- Build succeeds but pages show empty content
- View Source shows `<div id="root"></div>` only

**Solutions:**
1. Check build logs for pre-rendering errors
2. Verify `prerender.js` script runs during build
3. Check for JavaScript errors in components
4. Ensure all routes are included in prerender routes list

### Issue: Environment variables not working

**Check:**
1. Variable names exactly match (case-sensitive)
2. In Cloudflare, variables are set for both Production AND Preview
3. Redeploy after adding variables (changes don't apply to existing deployments)
4. Use `import.meta.env.VITE_API_URL` syntax (not `process.env`)

---

## 💰 PART 6: Cost & Scaling

### Current Setup Costs

**Railway Free Tier:**
- $5 free credit per month
- Includes:
  - 1 PostgreSQL database
  - 1 backend service
  - 512MB RAM
  - Shared CPU
- **Cost: $0/month** (within free tier)

**Cloudflare Pages:**
- Unlimited bandwidth
- Unlimited requests
- 500 builds/month
- **Cost: $0/month** (FREE forever)

**Total: $0/month** 🎉

### When You Need to Scale

**Railway Hobby Plan** ($5/month when free tier is exceeded):
- More compute resources
- Better performance
- Priority support

**Signs you need to upgrade:**
- Consistent high traffic
- Database size > 100MB
- Multiple concurrent users
- Need better response times

**Cloudflare remains FREE** regardless of traffic! 🚀

---

## 🔒 PART 7: Security Best Practices

### Protect Your Environment Variables

**Never commit these to Git:**
- ✅ `.env` files are in `.gitignore`
- ✅ Only `.env.template` is committed
- ✅ Real values only in Railway/Cloudflare dashboards

### Secure Your JWT Secret

**Current JWT secret is exposed in this guide** ⚠️

**After deployment, change it:**
1. Generate a new secret:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
2. Update in Railway environment variables
3. Redeploy backend
4. Users will need to re-login (tokens invalidated)

### Database Security

- ✅ Railway PostgreSQL is private by default
- ✅ Only accessible from your backend service
- ✅ SSL/TLS encrypted connections
- ✅ Regular automated backups

### HTTPS Everywhere

- ✅ Cloudflare Pages: HTTPS by default
- ✅ Railway: HTTPS by default
- ✅ All API calls encrypted

---

## 📚 PART 8: Useful Commands

### Railway CLI Commands

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to project
railway link

# View environment variables
railway variables

# Run commands in Railway environment
railway run npm run init-db

# View logs
railway logs

# Open dashboard
railway open
```

### Local Development Commands

```bash
# Start backend locally
cd backend
npm install
npm run dev

# Start frontend locally
cd frontend
npm install
npm run dev

# Build frontend locally (test pre-rendering)
cd frontend
npm run build
```

### Git Deployment Commands

```bash
# After making changes
git add .
git commit -m "Your change description"
git push origin main

# This triggers:
# - Railway auto-redeploy (backend)
# - Cloudflare Pages auto-redeploy (frontend)
```

---

## 🎯 PART 9: Next Steps After Deployment

### 1. Set Up Custom Domain (Optional)

**For Cloudflare Pages:**
1. Already using `bloomtechusa.com` ✅

**For Railway Backend (Optional):**
1. Go to Railway service → Settings → Networking
2. Add custom domain (e.g., `api.bloomtechusa.com`)
3. Update `VITE_API_URL` in Cloudflare to match

### 2. Monitor Your Applications

**Railway Monitoring:**
- Railway Dashboard shows CPU, Memory, Network usage
- Set up alerts for downtime
- Review deployment logs regularly

**Cloudflare Analytics:**
- Cloudflare Pages → Analytics tab
- View visitor stats, bandwidth, requests
- Monitor build success rate

### 3. Set Up Automated Backups

**Railway PostgreSQL:**
1. Go to database service → Settings
2. Enable automated backups (included in free tier)
3. Set backup frequency (daily recommended)

### 4. Add Error Tracking (Optional)

**Sentry Integration:**
1. Sign up at sentry.io (free tier)
2. Add Sentry SDK to frontend and backend
3. Get real-time error notifications

### 5. Performance Optimization

**Frontend:**
- Images already optimized ✅
- Videos already optimized ✅
- Code splitting enabled ✅
- Pre-rendering enabled ✅

**Backend:**
- Consider Redis caching for frequent queries
- Add database indexes for common queries
- Enable gzip compression

---

## 📞 PART 10: Support & Resources

### Official Documentation

- **Railway Docs**: https://docs.railway.app
- **Cloudflare Pages**: https://developers.cloudflare.com/pages
- **Vite**: https://vitejs.dev
- **React**: https://react.dev

### Getting Help

**Railway Issues:**
- Railway Discord: https://discord.gg/railway
- Railway Help Center
- Check Railway status page

**Cloudflare Issues:**
- Cloudflare Community: https://community.cloudflare.com
- Cloudflare Support (Pro plan+)
- Check Cloudflare status page

### Common Support Questions

**Q: How do I update my backend code?**
A: Push to GitHub. Railway auto-redeploys from main branch.

**Q: How do I update my frontend?**
A: Push to GitHub. Cloudflare auto-rebuilds from main branch.

**Q: Can I rollback a deployment?**
A: Yes! Railway and Cloudflare both keep deployment history. Click "Rollback" in their dashboards.

**Q: How do I add more API endpoints?**
A: Add routes in backend, push to GitHub, Railway redeploys automatically.

**Q: Database is full, what do I do?**
A: Upgrade to Railway Hobby plan or clean up old data.

---

## 🎉 Congratulations!

You now have a **production-ready deployment** with:

✅ **Backend on Railway** - Scalable Node.js API with PostgreSQL  
✅ **Frontend on Cloudflare** - Lightning-fast static site with global CDN  
✅ **Automatic deployments** - Push to GitHub, auto-deploy  
✅ **Zero monthly costs** - Both free tiers  
✅ **Professional setup** - Industry best practices  

### Your Deployment URLs

- **Frontend**: https://bloomtechusa.com
- **Backend**: https://your-app-name.up.railway.app
- **Database**: Railway PostgreSQL (private)

**Next time you need to deploy updates:**
1. Make your code changes
2. `git push origin main`
3. Wait 3-5 minutes
4. Changes are live! 🚀

---

**Created**: May 2026  
**Status**: Production Ready  
**Maintained by**: BloomTech.lk
