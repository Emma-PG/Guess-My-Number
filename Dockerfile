FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY normalize.css /usr/share/nginx/html/normalize.css
COPY main.js /usr/share/nginx/html/main.js
