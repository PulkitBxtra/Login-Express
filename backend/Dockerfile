FROM node:19

#workdir
WORKDIR /usr/index

COPY package*.json ./ 

RUN npm install

COPY . .

# RUN npm run build

EXPOSE 8000

CMD ["node", "index.js"]

