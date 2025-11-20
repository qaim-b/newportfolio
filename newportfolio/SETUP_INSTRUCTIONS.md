# Setup Instructions

Your portfolio website is ready! Here's how to get it running.

## Quick Start (Easiest - Deploy to Vercel)

### Option 1: Deploy Directly to Vercel (Recommended)

1. **Commit your code:**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository
   - Click "Deploy"

   That's it! Vercel will automatically:
   - Install dependencies
   - Build your site
   - Deploy it
   - Give you a live URL

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (from project directory)
vercel

# Follow the prompts, then your site will be live!
```

## Local Development

If you want to run the site locally first:

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

4. **Build for production (optional):**
   ```bash
   npm run build
   npm start
   ```

## Customization Checklist

Before deploying, update these important details:

### 1. Contact Information (`components/Contact.tsx`)
- [ ] Update email address
- [ ] Add LinkedIn profile URL
- [ ] Add GitHub profile URL

### 2. Projects (`components/Projects.tsx`)
- [ ] Update project 3 details (currently placeholder)
- [ ] Add real GitHub repository links
- [ ] Add live demo links
- [ ] Verify project descriptions and metrics

### 3. Add Your CV
- [ ] Place your CV file as `public/cv.pdf`
- Or update the CV link in `components/Contact.tsx`

### 4. Optional: Update Colors
- Edit `tailwind.config.ts` to change the color scheme
- Current colors: Navy (#1a1a2e), Blue-gray (#4a5568), Off-white (#fafafa)

## Project Structure

```
portfolio-web/
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Site metadata and layout
│   └── page.tsx            # Main page
├── components/
│   ├── Hero.tsx            # Landing section
│   ├── Journey.tsx         # International journey timeline
│   ├── Projects.tsx        # Project showcase
│   ├── Experience.tsx      # Work experience
│   ├── Skills.tsx          # Skills and languages
│   ├── BeyondEngineering.tsx  # Football team story
│   └── Contact.tsx         # Contact and footer
├── public/
│   └── (add cv.pdf here)
└── README.md
```

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Make sure Node.js version is 18+:
   ```bash
   node --version
   ```

2. Clear cache and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Deployment Issues

If Vercel deployment fails:
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify no TypeScript errors: `npm run build`

## After Deployment

1. **Test your live site** - Click through all sections
2. **Test on mobile** - Ensure responsive design works
3. **Update your resume** with the portfolio URL
4. **Share the link** on LinkedIn, GitHub profile, etc.

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- Vercel Documentation: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs

---

Your portfolio is ready to impress! 🚀
