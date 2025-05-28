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

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]