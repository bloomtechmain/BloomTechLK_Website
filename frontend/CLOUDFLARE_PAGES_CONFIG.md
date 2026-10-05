# Cloudflare Pages Configuration Guide

## 🎯 Critical Settings for SSR Static Deployment

Your site uses **Server-Side Rendering (SSR)** with **Static Site Generation (SSG)**. This means:
- All pages are pre-rendered as static HTML at build time
- No server is needed in production
- Cloudflare Pages serves pure static files
- Search engines see full content immediately

---

## ⚙️ Exact Cloudflare Pages Settings

### Build Configuration

Go to: **Cloudflare Pages Dashboard** → **Your Project** → **Settings** → **Build & deployments**

| Setting | Value |
|---------|-------|
| **Framework preset** | `None` (or Vite - doesn't matter) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist/client` |
| **Root directory** | `frontend` |
| **Node version** | `20` (also set via `.node-version`; `NODE_VERSION` env var optional) |

### Environment Variables

Go to: **Settings** → **Environment variables** → **Production** (and **Preview**)

| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `20` |
| `VITE_EMAILJS_SERVICE_ID` | `service_7sn9k2o` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_t0z9bew` |
| `VITE_EMAILJS_PUBLIC_KEY` | `dMrkwmOZ00UAvahin` |

There is no backend anymore — the Express/Postgres API has been removed, and the Contact/Expert forms send email directly via EmailJS from the browser. `VITE_API_URL` and `VITE_GOOGLE_CLIENT_ID` no longer apply.

---

## 🚀 Build Process Explained

When you push to GitHub, Cloudflare will:

```
1. Clone repository
   ↓
2. Navigate to frontend/ directory
   ↓
3. Run: npm install
   ↓
4. Run: npm run build
   │
   ├─→ build:client   (creates dist/client with template)
   ├─→ build:server   (creates dist/server with SSR bundle)
   ├─→ prerender      (renders all 20 routes as HTML)
   └─→ build:verify   (confirms build succeeded)
   ↓
5. .cfignore filters what gets deployed:
   │
   ├─→ ✅ DEPLOYS:    dist/client/ (all pre-rendered HTML)
   ├─→ ✅ DEPLOYS:    public/ files (_redirects, robots.txt, etc.)
   └─→ ❌ IGNORES:    server.js, dist/server/, src/, etc.
   ↓
6. Cloudflare serves static files from dist/client
   ↓
7. Site is LIVE! 🎉
```

---

## 📁 What Gets Deployed

### ✅ Deployed to Production
```
dist/client/
├── index.html                          (pre-rendered homepage)
├── company/index.html                  (pre-rendered)
├── contact/index.html                  (pre-rendered)
├── services/
│   ├── ai-machine-learning/index.html  (pre-rendered)
│   └── ... (all 16 service pages)
├── assets/
│   ├── css/                            (stylesheets)
│   ├── js/                             (JavaScript bundles)
│   └── img/                            (images)
├── _redirects                          (URL redirects)
├── robots.txt                          (SEO)
└── sitemap.xml                         (SEO)
```

### ❌ NOT Deployed (filtered by .cfignore)
```
server.js                (development server)
dist/server/             (SSR bundle - not needed)
src/                     (source code)
prerender.js             (build script)
*.md                     (documentation)
node_modules/            (dependencies)
```

---

## 🔍 Troubleshooting

### Issue: "Cloudflare Tunnel Error 1033"
**Cause**: Cloudflare detected `server.js` and tried to run it as dynamic app
**Fix**: ✅ Added `.cfignore` to exclude server files from deployment

### Issue: Build fails with "Cannot find module"
**Cause**: Missing dependencies or wrong Node version
**Fix**: 
1. Ensure Node 20 is used (`.node-version` already sets this; `NODE_VERSION` env var is optional)
2. All build dependencies must be in `dependencies`, not `devDependencies`

### Issue: Pages show empty content
**Cause**: Pre-rendering failed but build continued
**Fix**: ✅ Added `build:verify` step that fails build if pre-rendering didn't work

### Issue: "index.html not found"
**Cause**: Build output directory wrong
**Fix**: Ensure output directory is `dist/client` (not just `dist`)

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at https://www.bloomtech.lk
- [ ] No Cloudflare errors
- [ ] View page source - should see full HTML content (not empty `<div id="root">`)
- [ ] All navigation links work
- [ ] Images load correctly
- [ ] Check Cloudflare build logs - should show "Pre-rendering complete! Success: 20/20 routes"

---

## 📊 Expected Build Output

Successful build should show:

```
🚀 Starting pre-rendering process...

📄 Pre-rendering: /
   ✓ Saved to: /index.html
📄 Pre-rendering: /company
   ✓ Saved to: /company/index.html
📄 Pre-rendering: /contact
   ✓ Saved to: /contact/index.html
... (17 more routes)

============================================================
✅ Pre-rendering complete!
   Success: 20/20 routes
============================================================

✓ All critical pages verified

✅ Build verified successfully
```

---

## 🚨 Common Mistakes to Avoid

### ❌ Wrong Output Directory
```
Build output directory: dist          ← WRONG
```
```
Build output directory: dist/client   ← CORRECT
```

### ❌ Missing Environment Variables
Node 20 is required (set via `.node-version` or the `NODE_VERSION` env var) — older Node versions fail on modern syntax

### ❌ Running server.js in Production
This creates tunnel errors. Use `.cfignore` to prevent deployment.

### ❌ Wrong Build Command
```
Build command: vite build            ← WRONG (skips pre-rendering)
```
```
Build command: npm run build         ← CORRECT (full SSR pipeline)
```

---

## 📞 Support

If deployment fails:

1. **Check Build Logs**: Cloudflare Pages → Deployments → View build log
2. **Verify Settings**: Compare with exact settings above
3. **Test Locally**: Run `npm run build` in frontend directory
4. **Check .cfignore**: Ensure server files are excluded

---

## 🎉 Success Indicators

Your deployment is successful when:

✅ Build completes without errors
✅ All 20 routes pre-rendered
✅ Site loads instantly
✅ View Source shows full HTML content
✅ SEO audit score 90-100%
✅ No Cloudflare tunnel errors

---

**Last Updated**: April 23, 2026
**Status**: Ready for Production Deployment
