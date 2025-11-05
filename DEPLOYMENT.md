# Deployment Guide

## Option 1: Heroku (Recommended)

### Steps:
1. **Install Heroku CLI**: https://devcenter.heroku.com/articles/heroku-cli
2. **Login to Heroku**: `heroku login`
3. **Create app**: `heroku create akash-portfolio`
4. **Set environment variables**:
   ```bash
   heroku config:set EMAIL_USER=akashkumbhar3112@gmail.com
   heroku config:set EMAIL_PASS=eqnkxocwgeixznmv
   heroku config:set RECIPIENT_EMAIL=akashkumbhar3112@gmail.com
   heroku config:set NODE_ENV=production
   ```
5. **Deploy**: `git push heroku main`

### Your app will be live at: `https://akash-portfolio.herokuapp.com`

## Option 2: Vercel

### Steps:
1. **Install Vercel CLI**: `npm i -g vercel`
2. **Login**: `vercel login`
3. **Deploy**: `vercel --prod`
4. **Set environment variables** in Vercel dashboard

## Option 3: Netlify

### Steps:
1. **Build project**: `npm run build`
2. **Upload** `client/build` folder to Netlify
3. **Set environment variables** in Netlify dashboard

## Important Notes:
- ✅ Environment variables are configured
- ✅ Production build script ready
- ✅ Static file serving enabled
- ✅ Email functionality included

## Free Hosting Options:
- **Heroku**: 550 hours/month free
- **Vercel**: Unlimited for personal projects
- **Netlify**: 100GB bandwidth/month free