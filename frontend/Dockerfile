# Stage 1: Builder stage
FROM node:20 AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm config set strict-ssl false && \
    npm ci --force && \
    npm install -g @angular/cli

# Copy remaining files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Runtime stage
FROM nginx:alpine

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]