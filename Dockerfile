FROM nginx
COPY html/ /usr/share/nginx/html
COPY default.conf /etc/nginx/nginx.d/default.conf
