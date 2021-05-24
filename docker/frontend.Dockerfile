# Build container.
FROM node:lts-alpine AS build

WORKDIR /code

ENV CI=true
ENV EXTEND_ESLINT=true

COPY frontend /code/frontend
WORKDIR /code/frontend
RUN yarn install
RUN yarn build

# Final container.
FROM nginx:stable-alpine

COPY --from=build /code/frontend/build /usr/share/nginx/html
COPY docker/nginx.frontend.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
