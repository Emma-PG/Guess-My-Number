FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY style.css /usr/share/nginx/html/normalize.css
COPY script.js /usr/share/nginx/html/main.js
