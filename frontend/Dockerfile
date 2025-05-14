FROM node:16 as build-stage

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:alpine

COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




# Use Node.js official image
#FROM node:18

# Set the working directory
#WORKDIR /app

# Copy package.json and install dependencies
#COPY package.json package-lock.json ./
#RUN npm install

# Copy the entire frontend code
#COPY . .

# Build the React app
#RUN npm run build

# Expose the frontend port
#EXPOSE 3000

# Serve the React app
#CMD ["npx", "serve", "-s", "build", "-l", "3000"]
