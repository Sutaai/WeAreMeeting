FROM node:25.7-alpine AS base

WORKDIR /app

ENV PNPM_HOME="/pnpm"
RUN npm install -g pnpm@10.28.2

FROM base AS build

COPY pnpm-lock.yaml /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch
COPY package.json /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod --offline

COPY . /app
RUN pnpm run build

FROM node:25.7-alpine AS final

COPY --from=build /app/.output /app
EXPOSE 80

CMD ["node", "/app/server/index.mjs"]
