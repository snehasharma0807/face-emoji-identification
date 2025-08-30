# 🚀 Deployment Guide

This guide will walk you through deploying your Next.js + Supabase project to Vercel.

## Prerequisites

- ✅ Next.js project set up with Supabase
- ✅ GitHub repository created and pushed
- ✅ Supabase project created with API keys
- ✅ Vercel account (free tier available)

## Step 1: Prepare Your Repository

Ensure your repository is clean and ready:

```bash
# Check git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Setup Next.js + Supabase project"

# Push to GitHub
git push origin main
```

## Step 2: Deploy on Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sign in with GitHub, GitLab, or Bitbucket

2. **Create New Project**
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository you just pushed

3. **Configure Project**
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: Leave as default (usually `/`)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables**
   - Click "Environment Variables" section
   - Add the following variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 2-5 minutes)

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow prompts** to configure your project

## Step 3: Verify Deployment

After deployment:

1. **Check Build Logs**
   - Look for any build errors
   - Ensure environment variables are loaded

2. **Test Your App**
   - Visit your deployed URL
   - Check if Supabase connection works
   - Test any API endpoints

3. **Check Environment Variables**
   - Go to Project Settings → Environment Variables
   - Verify all variables are set correctly

## Step 4: Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - No additional configuration needed

## Environment Variables Reference

| Variable | Description | Required | Scope |
|----------|-------------|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | ✅ | All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key for client-side | ✅ | All |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key for server-side | ✅ | Production |

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs for specific errors
   - Verify all dependencies are in `package.json`
   - Ensure TypeScript compilation passes locally

2. **Environment Variables Not Loading**
   - Verify variables are set in Vercel dashboard
   - Check variable names match exactly
   - Ensure no extra spaces or quotes

3. **Supabase Connection Fails**
   - Verify Supabase project is active
   - Check API keys are correct
   - Ensure Supabase project allows connections from Vercel

4. **API Routes Not Working**
   - Check if routes are properly exported
   - Verify server-side Supabase client usage
   - Check Vercel function logs

### Getting Help

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Vercel Discord**: [vercel.com/discord](https://vercel.com/discord)
- **Supabase Support**: [supabase.com/support](https://supabase.com/support)

## Post-Deployment

### Monitoring

1. **Vercel Analytics** (if enabled)
   - Page views and performance
   - Error tracking
   - User behavior

2. **Supabase Dashboard**
   - Database performance
   - API usage
   - Authentication logs

### Updates

To deploy updates:

```bash
# Make your changes
git add .
git commit -m "Update description"
git push origin main

# Vercel will automatically redeploy
```

## Security Best Practices

1. **Environment Variables**
   - Never commit `.env.local` to Git
   - Use Vercel's environment variable system
   - Rotate keys regularly

2. **Supabase Security**
   - Use Row Level Security (RLS)
   - Limit service role key usage
   - Monitor API usage

3. **Vercel Security**
   - Enable security headers
   - Use Vercel's built-in security features
   - Regular dependency updates

## Cost Optimization

- **Vercel Hobby Plan**: Free tier available
- **Supabase Free Tier**: 500MB database, 2GB bandwidth
- **Monitor Usage**: Check both platforms for usage limits

---

🎉 **Congratulations!** Your Next.js + Supabase app is now deployed on Vercel!
