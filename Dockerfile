FROM nginx
COPY html/ /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates/
