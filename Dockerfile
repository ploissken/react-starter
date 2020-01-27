FROM node:carbon
RUN mkdir -p /home/node/node_modules \
&& chown -R node /home/node/
WORKDIR /home/node/
COPY . .
RUN npm install && npm run build && npm i serve -g
EXPOSE 5000
CMD serve -s build
