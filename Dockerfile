FROM node:14

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN next build

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "nest", "start" ]