#!/bin/bash
set -e

echo "🔄 Updating system packages..."
sudo apt update && sudo apt upgrade -y

echo "⬇️ Installing Node.js and npm..."
# Install Node.js (LTS) from NodeSource
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

echo "🧪 Verifying Node.js and npm installation..."
node -v
npm -v


echo "📦 Installing backend dependencies..."
npm install

echo "🚀 Starting backend service..."
# Adjust this command depending on how you run the server
# For example, replace with `npm run start` or `node app.js` if needed
node index.js &


