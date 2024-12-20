# Step 1: Use a Node.js base image
FROM node:18-alpine as builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Use a new, smaller base image to reduce the image size
FROM node:18-alpine

# Step 8: Set the working directory in the final image
WORKDIR /app

# Step 9: Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Step 10: Install only production dependencies for the smaller image
RUN npm install --production

# Step 11: Copy the built application from the builder image
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Step 12: Expose the port that Next.js runs on (default is 3000)
EXPOSE 3000

# Step 13: Start the Next.js application in production mode
CMD ["npm", "start"]
