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

# Salin semua file project
COPY . .

# Install dependencies
RUN npm install

# Jalankan bot
CMD ["npm", "start"]
