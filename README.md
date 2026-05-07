# 📸 Pixora — Instagram-like Photo Sharing App

A cloud-native photo sharing web application built with vanilla HTML/CSS/JS, Supabase backend, and deployable to Netlify.

---

## 🚀 Quick Setup Guide

### Step 1: Create Supabase Project
1. Go to https://supabase.com and create a free account
2. Create a **New Project** (choose a region, set a database password)
3. Wait for project to be ready (~2 minutes)

### Step 2: Set Up Database
1. In your Supabase dashboard, click **SQL Editor**
2. Copy & paste the contents of `supabase_schema.sql`
3. Click **Run** — this creates all tables, policies, and the storage bucket

### Step 3: Configure Your Credentials
You need to update **3 files** with your Supabase credentials.

Find your credentials at: Supabase Dashboard → Settings → API

```
Project URL:  https://YOURPROJECTID.supabase.co
Anon Key:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Open and replace `YOUR_PROJECT_ID` and `YOUR_ANON_KEY_HERE` in:
- `index.html` (line ~170)
- `pages/creator.html` (line ~270)
- `pages/consumer.html` (line ~270)

### Step 4: Deploy to Netlify
**Option A — Drag & Drop (Easiest)**
1. Go to https://netlify.com and create a free account
2. From the dashboard, drag your entire `pixora` folder onto the deploy area
3. Done! Your site is live 🎉

**Option B — GitHub + Netlify CI/CD**
1. Push this folder to a GitHub repository
2. In Netlify: New site → Import from Git → Select your repo
3. Build settings: leave blank (static site)
4. Deploy!

---

## 🗂 Project Structure

```
pixora/
├── index.html              ← Login / Sign up page
├── pages/
│   ├── creator.html        ← Creator dashboard (upload & manage posts)
│   └── consumer.html       ← Consumer feed (browse, like, comment)
├── netlify.toml            ← Netlify deployment config
├── supabase_schema.sql     ← Full database schema + RLS policies
└── README.md               ← This file
```

---

## 👥 User Roles

| Feature | Creator | Consumer |
|---------|---------|----------|
| Sign up | ✅ | ✅ |
| Upload photos | ✅ | ❌ |
| Set title/caption/location/people | ✅ | ❌ |
| View all posts feed | ✅ | ✅ |
| Like posts | ❌ | ✅ |
| Comment on posts | ❌ | ✅ |
| Search posts | ✅ | ✅ |
| Delete own posts | ✅ | ❌ |

---

## 🧱 Architecture

```
Browser (HTML/CSS/JS)
       │
       ├── Supabase Auth      ← Email/password authentication
       ├── Supabase Database  ← PostgreSQL (profiles, posts, likes, comments)
       └── Supabase Storage   ← Image file storage (public bucket)

Hosting: Netlify (CDN + static hosting)
```

---

## 🔒 Security Features
- Row Level Security (RLS) on all database tables
- Only creators can upload images
- Users can only delete their own content
- JWT-based authentication via Supabase Auth

---

## 💡 Notes
- Free Supabase tier: 500MB database, 1GB storage, 50k monthly active users
- Free Netlify tier: 100GB bandwidth/month, unlimited static deploys
- No server required — fully serverless architecture
