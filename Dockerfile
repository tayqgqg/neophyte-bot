# Gunakan image Node.js versi 20
FROM node:20

# Update repositori dan install dependencies sistem
RUN apt-get update && apt-get install -y \
  ffmpeg \
  python3 \
  make \
  g++ \
  curl

# Direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Salin semua file project
COPY . .

# Jalankan bot
CMD ["npm", "start"]
