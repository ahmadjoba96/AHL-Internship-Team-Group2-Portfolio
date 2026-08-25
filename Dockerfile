# STAGE 1: Build the React Client
FROM node:20-alpine AS client-build
WORKDIR /app/client
# Copy package files and install dependencies
COPY client/package*.json ./
RUN npm ci
# Copy client source and build
COPY client/ ./
RUN npm run build

# STAGE 2: Build the Express Server
FROM node:20-alpine AS server-build
WORKDIR /app/server
# Copy package files and install dependencies
COPY server/package*.json ./
RUN npm ci
# Copy server source and build (if we had a build step. For ts-node/nodemon it's fine, but let's compile it)
COPY server/ ./
# If there's a build step, run it here. Assuming we use ts-node for now or compile with tsc.
RUN npx tsc || true

# STAGE 3: Production Environment
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy backend
COPY --from=server-build /app/server/package*.json ./server/
COPY --from=server-build /app/server/node_modules ./server/node_modules
COPY --from=server-build /app/server/src ./server/src
COPY --from=server-build /app/server/tsconfig.json ./server/

# Copy frontend build into server's public or serving directory
COPY --from=client-build /app/client/dist ./client/dist

# Expose port
EXPOSE 3000

# Start the server (using ts-node in prod is not ideal, but works for this simple setup. We can switch to node dist/index.js if tsc is fully set up)
WORKDIR /app/server
CMD ["npx", "ts-node", "src/index.ts"]
