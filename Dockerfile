FROM node:latest
LABEL author="Anderson Rostirolla"
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start 
EXPOSE 3000