#!/bin/bash
set -e

echo "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

echo "⬇️ Installing Node.js and npm..."
# Install Node.js (LTS) from NodeSource
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g npm@11.3.0
echo "🧪 Verifying Node.js and npm installation..."
node -v
npm -v


echo "📦 Installing backend dependencies..."
sudo npm install
sudo npm install pm2 -g
sudo pm2 start ./backend/index.js --name backend-service
sudo pm2 save

echo "🚀 Starting backend service..."


