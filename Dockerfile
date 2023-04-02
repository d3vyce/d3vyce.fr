FROM nginx
COPY html/ /usr/share/nginx/html
RUN mv /etc/nginx/nginx.d/default.conf /etc/nginx/nginx.d/default.conf.old
COPY default.conf /etc/nginx/nginx.d/default.conf
