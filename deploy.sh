#!/bin/bash

# Deployment script for Julian's portfolio website

echo "🚀 Starting deployment process..."

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 2. Build the application
echo "🔨 Building the application..."
cp next.config.deploy.ts next.config.ts
npm run build

# 3. Create deployment package
echo "📦 Creating deployment package..."
mkdir -p deploy
cp -r out/* deploy/
cp -r public deploy/
cp package.json deploy/
cp package-lock.json deploy/

echo "✅ Build complete! Your site is ready in the 'deploy' folder."
echo ""
echo "📁 Deployment options:"
echo ""
echo "1. 🌐 Vercel (Recommended):"
echo "   - Sign up at vercel.com"
echo "   - Connect your GitHub repository"
echo "   - Deploy automatically"
echo ""
echo "2. 🚀 Netlify:"
echo "   - Go to netlify.com"
echo "   - Drag and drop the 'deploy' folder"
echo "   - Or connect GitHub for auto-deploys"
echo ""
echo "3. 💻 Traditional Hosting:"
echo "   - Upload the 'deploy' folder contents to your web host"
echo "   - Make sure to upload all files including _next folder"
echo ""
echo "4. ☁️ Railway/Render:"
echo "   - Create a new Node.js service"
echo "   - Connect your GitHub repository"
echo "   - Set build command: 'cp next.config.deploy.ts next.config.ts && npm run build'"
echo "   - Set publish directory: 'out'"
echo ""
echo "🎉 Your portfolio is ready to deploy!"