# GitHub Repository Setup Instructions

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `family-dentist-landing`
   - **Description**: `Professional family dentist landing page built with Next.js and Tailwind CSS`
   - **Visibility**: Public (or Private if preferred)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push Local Code to GitHub

After creating the repository, GitHub will show you the commands. Run these in your terminal:

```bash
# Navigate to your project directory
cd /Users/enxiangqiu/Desktop/temp_project_files/family-dentist-landing

# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/family-dentist-landing.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your project files
3. The repository should contain:
   - All source code in `src/` folder
   - Components, API routes, and configuration files
   - Documentation files (README.md, DEPLOYMENT.md, etc.)
   - Images in `public/images/` folder

## Next Steps: Deploy to Vercel

Once your code is on GitHub:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `family-dentist-landing` repository
5. Add environment variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `GOOGLE_MAPS_API_KEY`: Your Google Maps API key (optional)
6. Deploy!

Your website will be live at a Vercel URL (e.g., `family-dentist-landing.vercel.app`).
