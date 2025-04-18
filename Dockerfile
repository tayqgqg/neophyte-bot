# Gunakan image Node.js versi 20
FROM node:20

# Direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan install dependencies
COPY package*.json ./
RUN apt-get update && apt-get install -y ffmpeg python3 make g++ && \
    npm install

# Salin semua file project
COPY . .

# Jalankan bot
CMD ["npm", "start"]
