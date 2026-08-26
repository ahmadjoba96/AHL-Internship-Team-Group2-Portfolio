# STAGE 1: Build the React Client
FROM node:20-alpine AS client-build
WORKDIR /app/client

COPY client/package*.json ./
RUN npm ci

COPY client/ ./
RUN npm run build

FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app/server
COPY server/package*.json ./
# Install production dependencies only
RUN npm ci --omit=dev && npm install tsx typescript @types/node

COPY server/src ./src

COPY --from=client-build /app/client/dist /app/client/dist

EXPOSE 3000

CMD ["npx", "tsx", "src/index.ts"]
