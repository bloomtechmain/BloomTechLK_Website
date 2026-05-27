# BloomTech.lk — Deployment Instructions

Everything you need to do manually to get the backend live on Railway and the frontend live on Cloudflare Pages.

---

## Part 1 — Railway (Backend)

### Step 1: Create a Railway account
1. Go to **https://railway.app** and sign up (or log in)
2. Click **New Project**

### Step 2: Deploy from GitHub
1. Choose **Deploy from GitHub repo**
2. Authorise Railway to access your GitHub account if prompted
3. Select **bloomtechmain/BloomTechLK_Website**
4. Railway will detect the repo — **do not deploy yet**, continue to Step 3 first

### Step 3: Set the root directory
1. After selecting the repo, click the service that was created
2. Go to **Settings → Source**
3. Set **Root Directory** to: `backend`
4. This tells Railway to only build the `backend/` folder

### Step 4: Add a PostgreSQL database
1. In your Railway project, click **+ New** → **Database** → **Add PostgreSQL**
2. Railway will create a Postgres instance and automatically inject `DATABASE_URL` into your backend service
3. You do not need to set `DATABASE_URL` manually — Railway handles it

### Step 5: Set environment variables
1. Click your **backend service** → **Variables** tab
2. Add the following variables one by one:

| Variable | Value |
|---|---|
| `JWT_SECRET` | `0fc3966bfebe7da2f22679d81d0d7a4a6655c8e7cde29599c1ad6a858c7a3a1388f514d62af204c5e3d65a3d32db64cf6db3b1d605bdf403ba1c9cf99a84e82d` |
| `GOOGLE_CLIENT_ID` | *(your Google OAuth Client ID from Google Cloud Console)* |
| `PORT` | `5000` |
| `NODE_ENV` | `production` |

> `DATABASE_URL` is injected automatically by Railway — do not add it manually.

### Step 6: Trigger the first deploy
1. Go to the **Deployments** tab
2. Click **Deploy** (or it may auto-deploy after you set variables)
3. Watch the build logs — it runs `npm install && npm run build` then starts `node dist/index.js`
4. Build should complete in 1–2 minutes

### Step 7: Initialise the database
Once the deploy is green:
1. Go to your **PostgreSQL** service → **Data** tab, or use the Railway shell
2. Alternatively, open the backend service → **Settings** → **Deploy** → run a one-off command:
   ```
   ts-node init-db.ts
   ```
   Or trigger it via the Railway CLI if you have it installed:
   ```bash
   railway run --service backend ts-node init-db.ts
   ```

### Step 8: Copy your Railway backend URL
1. Click your backend service → **Settings** → **Networking**
2. Click **Generate Domain** if none exists
3. Copy the URL — it looks like: `https://backend-production-0cf48.up.railway.app`
4. You will need this URL in Part 2

---

## Part 2 — Cloudflare Pages (Frontend)

### Step 1: Log in to Cloudflare
1. Go to **https://dash.cloudflare.com**
2. In the left sidebar, click **Workers & Pages**
3. Click **Create application** → **Pages** → **Connect to Git**

### Step 2: Connect GitHub
1. Authorise Cloudflare to access your GitHub account if prompted
2. Select **bloomtechmain/BloomTechLK_Website**
3. Click **Begin setup**

### Step 3: Configure build settings
Set these exactly:

| Setting | Value |
|---|---|
| **Framework preset** | None (leave blank) |
| **Root directory** | `frontend` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist/client` |

### Step 4: Set environment variables
Still on the setup screen, scroll to **Environment variables** and add:

| Variable | Value |
|---|---|
| `NODE_VERSION` | `20` |
| `VITE_API_URL` | *(paste the Railway URL from Part 1 Step 8)* e.g. `https://backend-production-xxxx.up.railway.app` |
| `VITE_GOOGLE_CLIENT_ID` | *(your Google OAuth Client ID)* |

### Step 5: Save and deploy
1. Click **Save and Deploy**
2. Cloudflare will clone the repo, run `npm install && npm run build` inside `frontend/`, and publish `dist/client/`
3. First build takes 2–4 minutes

### Step 6: Get your Cloudflare Pages URL
1. Once the build is green, Cloudflare shows your live URL — something like `https://bloomtechlk-website.pages.dev`
2. If you have a custom domain (`bloomtech.lk`), go to **Custom domains** → **Set up a custom domain** and follow the DNS instructions

---

## Part 3 — Wire Railway CORS to your Cloudflare domain

The backend already allows `https://*.pages.dev` and `https://bloomtechusa.com`. If your final custom domain is different:

1. Open `backend/index.ts` in the repo, find the `cors({ origin: [...] })` block
2. Add your exact Cloudflare domain:
   ```ts
   'https://bloomtech.lk',
   'https://www.bloomtech.lk',
   ```
3. Commit and push — Railway will auto-redeploy

---

## Part 4 — Google OAuth: authorise your domains

If you are using Google Sign-In:

1. Go to **https://console.cloud.google.com** → **APIs & Services** → **Credentials**
2. Click your OAuth 2.0 Client ID
3. Under **Authorised JavaScript origins**, add:
   - `https://bloomtechlk-website.pages.dev` (Cloudflare preview URL)
   - `https://bloomtech.lk` (your custom domain, once set up)
4. Under **Authorised redirect URIs**, add the same domains with `/auth/google/callback` appended if your flow uses a redirect
5. Click **Save**

---

## Part 5 — Verification checklist

Run through this after both services are live:

### Backend (Railway)
- [ ] Build log shows `npm run build` succeeded with no errors
- [ ] Service status is **Active** (green)
- [ ] Visit `https://your-railway-url.up.railway.app/` — should return a JSON response or `Cannot GET /` (both mean it's running)

### Frontend (Cloudflare)
- [ ] Build log shows `vite build` succeeded
- [ ] Homepage loads at your Cloudflare URL
- [ ] No console errors about `VITE_API_URL` being undefined
- [ ] Hero videos play on the homepage
- [ ] All images load (Services pages, Portfolio, etc.)

### Integration
- [ ] User registration works (creates an account)
- [ ] User login works (returns a JWT)
- [ ] Expert enquiry form submits successfully
- [ ] Google Sign-In works (if GOOGLE_CLIENT_ID is set)

---

## Environment variable reference

### Railway — backend service
```
DATABASE_URL        → auto-injected by Railway PostgreSQL add-on
JWT_SECRET          → 0fc3966bfebe7da2f22679d81d0d7a4a6655c8e7cde29599c1ad6a858c7a3a1388f514d62af204c5e3d65a3d32db64cf6db3b1d605bdf403ba1c9cf99a84e82d
GOOGLE_CLIENT_ID    → your Google OAuth client ID
PORT                → 5000
NODE_ENV            → production
```

### Cloudflare Pages — frontend build
```
NODE_VERSION        → 18
VITE_API_URL        → https://your-backend.up.railway.app
VITE_GOOGLE_CLIENT_ID → your Google OAuth client ID
```

---

## Costs

| Service | Plan | Cost |
|---|---|---|
| Railway | Hobby (includes $5 free credit/month) | ~$0/month for low traffic |
| Cloudflare Pages | Free | $0/month |

---

*Last updated: May 2026*
