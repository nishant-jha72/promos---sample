# Promos Marketplace Dashboard

A modern, professional SaaS platform for discovering and booking promotional content creators. Built with Next.js 16, React 19, and Tailwind CSS v4 with a sleek dark theme and glassmorphism design.

## Features

- **Hero Section**: Compelling landing page with key metrics and call-to-action buttons
- **Campaign Insights**: Three-tier pricing/campaign model cards with detailed features
- **Promoter Directory**: Searchable, filterable directory with accuracy ratings, experience levels, and sorting options
- **Authentication**: Login and registration pages with role-based selection (Advertiser/Creator)
- **PROMO AI Chat Widget**: Floating AI chatbot for instant support and inquiries
- **Responsive Design**: Mobile-first responsive layout that works on all devices
- **Dark Theme**: Professional dark UI with emerald green accents and smooth animations
- **Glassmorphism**: Modern frosted glass effects on headers and cards

## Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **React**: 19.2.0
- **Styling**: Tailwind CSS v4 + CSS Animations
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Tailwind CSS Animate
- **TypeScript**: For type safety
- **Analytics**: Vercel Analytics

## Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 9.x or higher
- **Git**: For version control
- **Vercel Account**: For deployment (optional)

Check your versions:
\`\`\`bash
node --version
npm --version
git --version
\`\`\`

If you need to upgrade Node.js:
\`\`\`bash
# Using NodeSource (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs

# Or using NVM (cross-platform)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
\`\`\`

## Installation

### 1. Clone or Extract the Project

\`\`\`bash
# If downloaded as ZIP
unzip promos-dashboard.zip
cd promos-dashboard

# Or clone from GitHub
git clone https://github.com/YOUR_USERNAME/promos-dashboard.git
cd promos-dashboard
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

This will install all required packages listed in `package.json`.

### 3. Run Locally

\`\`\`bash
npm run dev
\`\`\`

The development server will start at `http://localhost:3000`

**Optional**: Run on a different port
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### 4. Open in Browser

Visit `http://localhost:3000` and you'll see the Promos dashboard!

## Project Structure

\`\`\`
promos-dashboard/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Main page component
│   └── globals.css             # Global styles and design tokens
├── components/
│   ├── header.tsx              # Navigation header with auth buttons
│   ├── hero-section.tsx        # Hero/landing section
│   ├── campaign-insights.tsx   # Campaign pricing cards
│   ├── promoters-directory.tsx # Searchable promoter directory
│   ├── auth-pages.tsx          # Login/register components
│   ├── bottom-sections.tsx     # About, creator, contact sections
│   ├── promo-ai-chat.tsx       # AI chatbot widget
│   └── ui/                     # shadcn/ui components
├── hooks/
│   └── use-mobile.tsx          # Mobile detection hook
├── lib/
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Project dependencies
├── vercel.json                 # Vercel deployment config
└── README.md                   # This file
\`\`\`

## Available Scripts

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
\`\`\`

## Deployment to Vercel

### Option 1: Using Vercel Dashboard (Recommended)

1. **Push code to GitHub**:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit: Promos marketplace dashboard"
   git remote add origin https://github.com/YOUR_USERNAME/promos-dashboard.git
   git branch -M main
   git push -u origin main
   \`\`\`

2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Select your `promos-dashboard` repository
   - Click "Import"
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Your app is live!**
   - Vercel generates a URL like `promos-dashboard.vercel.app`
   - Any push to `main` branch auto-deploys

### Option 2: Using Vercel CLI

\`\`\`bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the interactive prompts to set up
\`\`\`

## Configuration Files

### vercel.json
Specifies Vercel build and runtime configuration:
\`\`\`json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "nodeVersion": "20.x"
}
\`\`\`

### next.config.mjs
Next.js configuration with build optimizations and caching.

### tailwind.config.ts
Tailwind CSS configuration with custom theme tokens and component styling.

## Customization

### Change Colors/Theme

Edit `app/globals.css` to modify design tokens:
\`\`\`css
@theme inline {
  --color-primary: #your-color;
  --color-accent: #your-accent;
  /* ... more tokens ... */
}
\`\`\`

### Modify Content

Edit components in `components/` folder:
- `hero-section.tsx` - Change headline, CTA text
- `promoters-directory.tsx` - Add/remove filters
- `campaign-insights.tsx` - Update pricing tiers
- `promo-ai-chat.tsx` - Add real API integration

### Add Environment Variables

1. Create `.env.local` in project root (for local dev):
   \`\`\`
   NEXT_PUBLIC_API_URL=your_api_url
   \`\`\`

2. For Vercel deployment, add in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add your variables
   - Redeploy

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Android Chrome 60+

## Troubleshooting

### Issue: Node version error during deployment

**Solution**: Ensure Node.js 20+ is installed locally and the `vercel.json` has `"nodeVersion": "20.x"`

### Issue: Dependencies not installed

**Solution**: 
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Issue: Port 3000 already in use

**Solution**: 
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Issue: Build fails on Vercel

**Solution**: 
1. Check Vercel deployment logs for specific error
2. Verify `package.json` and build command are correct
3. Try building locally first: `npm run build`
4. Push fix to GitHub, Vercel auto-redeploys

### Issue: Styles not loading

**Solution**: Clear cache and rebuild
\`\`\`bash
rm -rf .next
npm run build
npm start
\`\`\`

## Performance Tips

- Use **next/image** for optimized images
- Enable **Static Generation** for faster builds
- Use **Incremental Static Regeneration (ISR)** for dynamic content
- Monitor with **Vercel Analytics** (already integrated)

## Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication with Supabase/Auth0
- [ ] Database connection for promoter data
- [ ] Payment integration with Stripe
- [ ] Real-time notifications
- [ ] Admin dashboard
- [ ] User profile pages

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

MIT License - feel free to use this project for personal and commercial use.

## Support

For issues, questions, or suggestions:
- Check the [Troubleshooting](#troubleshooting) section
- Review [Next.js documentation](https://nextjs.org)
- Check [Tailwind CSS docs](https://tailwindcss.com)
- Visit [Vercel docs](https://vercel.com/docs)

## Credits

Built with:
- [Next.js](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Vercel](https://vercel.com) - Deployment platform

---

**Happy coding! 🚀**

For updates and to stay connected, follow the official documentation links above.
