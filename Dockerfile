FROM nginx
COPY html/ /usr/share/nginx/html
COPY d3vyce.conf /etc/nginx/conf.d/d3vyce.conf
