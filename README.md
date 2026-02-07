# Personal Portfolio Website

A modern, elegant portfolio website showcasing AI/ML projects, robotics research, and an international journey across 4 countries.

## Features

- **Story-Driven Design**: Narrative focused on global journey and diverse experiences
- **Responsive Layout**: Mobile-first design that works on all devices
- **Elegant Styling**: Clean, sophisticated design inspired by Bill Gates Notes
- **Fast Performance**: Built with Next.js 14 for optimal speed
- **Easy Deployment**: One-click deploy to Vercel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Merriweather (serif) + Inter (sans-serif)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

## Customization

### Update Personal Information

Edit the following files to customize content:

- **Contact Info**: `components/Contact.tsx` - Update email, LinkedIn, GitHub links
- **Projects**: `components/Projects.tsx` - Add your project details and links
- **Experience**: `components/Experience.tsx` - Update work experience details
- **Skills**: `components/Skills.tsx` - Modify technical skills and languages

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#1a1a2e',  // Main dark color
  accent: '#4a5568',   // Accent color
  background: '#fafafa' // Background color
}
```

## Project Structure

```
portfolio-web/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page assembling all sections
├── components/
│   ├── Hero.tsx         # Landing section
│   ├── Journey.tsx      # International background timeline
│   ├── Projects.tsx     # Technical projects showcase
│   ├── Experience.tsx   # Work and research experience
│   ├── Skills.tsx       # Technical and soft skills
│   ├── BeyondEngineering.tsx  # Personal achievements
│   └── Contact.tsx      # Contact information and footer
└── package.json
```

## License

MIT
