FROM node:alpine 

WORKDIR /app

COPY package.json postinstall.js ./

RUN SKIP_BUILD=1 yarn install

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]