FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install -g pnpm
RUN npm install 
RUN npm run build
CMD ["npm", "start"]


