FROM node:current-slim

WORKDIR /usr/src/app

COPY ./msg-app .

RUN npm install
RUN npm install -g @angular/cli

CMD ng serve --prod=true --host 0.0.0.0