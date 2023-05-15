FROM node:14
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
CMD npm run dev
EXPOSE 5056