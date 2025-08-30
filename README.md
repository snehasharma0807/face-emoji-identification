# Next.js + Supabase Project

A modern Next.js application with Supabase integration, ready for deployment on Vercel.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Supabase** for backend services
- **ESLint** for code quality
- **Vercel** deployment ready

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account and project

## 🛠️ Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NODE_ENV=development
```

### 3. Get Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Create a new project or select existing one
3. Go to Settings → API
4. Copy the Project URL and anon/public key
5. For service role key, go to Settings → API → Project API keys

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🚀 Deployment on Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Deploy!

### 3. Environment Variables on Vercel

In your Vercel project settings, add these environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── contexts/               # React contexts
│   └── SupabaseContext.tsx
└── lib/                    # Utility libraries
    └── supabase.ts        # Supabase client
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Security Notes

- Never commit `.env.local` to version control
- Use environment variables for all sensitive data
- The `SUPABASE_SERVICE_ROLE_KEY` should only be used server-side
- Client-side code only uses public anon key

## 📚 Next Steps

1. **Database Setup**: Create tables in Supabase Dashboard
2. **Authentication**: Implement user auth with Supabase Auth
3. **Real-time**: Add real-time subscriptions
4. **Storage**: Set up file storage with Supabase Storage
5. **Edge Functions**: Create serverless functions

## 🆘 Troubleshooting

### Common Issues

1. **Environment variables not loading**: Ensure `.env.local` is in project root
2. **Supabase connection failed**: Check your credentials and project status
3. **Build errors**: Verify all dependencies are installed

### Getting Help

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

MIT License - feel free to use this project as a starting point for your own applications.
